---
slug: wander-networking
title: Distributed networking in a multiplayer game
date: 2015-02-08 17:42:50.000000000 +11:00
---
A few months ago, I was tasked with porting the networking code of [Wander](http://www.wanderthegame.com/) to the PS4, and ended up writing some bits of it from scratch. I've been programming for years, but this was my first foray into C++ and serious gamedev, so I had to learn a lot!

### The problem

![](/content/images/2015/08/griffin_landing.jpg)

Wander was designed to be an open world, massively multiplayer[^n] exploration game. Players occupy the same universe and should be visible to one another as soon as they, uh, wander into range. Crucially, Wander is non-competitive, meaning clients can be trusted: there's not much to be gained from cheating, unless you get a kick out of teleporting yourself into odd places.

The game is based on [CRYENGINE](http://cryengine.com/)[^n] and written in C++ and Lua. The engine has its own conception of networking, but it's based around matchmaking and lobbies and was generally a bit tangential to our requirements. So we needed an alternative that could connect nearby players, push state to the Cryengine objects, and work on both PC and PS4.

When I joined the project, it was already sorta functional on PC. We were using a C# library called Badumna, invoked from C++ via a C++/CLI wrapper. Badumna was a University of Melbourne project turned startup turned bankrupt turned open source. The website no longer exists, so I had to go find the documentation [on archive.org](https://web.archive.org/web/20131124073148/http://www.scalify.com/documentation/Manual/index.php). Not... not terribly promising.

### What we tried

Loki gave me two alternatives to pursue: port Badumna to C++, or get Mono working on the PS4.

A quick look through the Badumna code made it clear the first option was waaay beyond my abilities. The library has around 72,000 lines of code, making heavy use of custom attributes and other C# features which aren't directly translatable to C++. Lots of fiddly meta stuff like this:

![](https://pbs.twimg.com/media/B7c83J3CEAA6Cwl.png:large)

Much of the code is security features we didn't need, but separating that out from the critical network stuff is non-trivial. And while I had decent experience with C# and some prior knowledge of C, my C++ was not going to be good enough to port an entire networking library from scratch.

So I looked at the second option. [Mono on PS4](http://tirania.org/blog/archive/2014/Apr-14.html) is pretty experimental and requires [AOT compilation](http://www.mono-project.com/docs/advanced/aot/), but Badumna was designed to run on mobile devices so I did make some headway and eventually got it to compile. Unfortunately, I ran into a NOT IMPLEMENTED runtime error from the stdlibs: there was no System.Security.Cryptography. And I was *not* going to try and homebrew *a cryptography stdlib*, so...

Having hit a dead end and feeling a bit frustrated, we went hunting for alternatives. Loki found a C++ library called [VAST](http://vastlib.wikispaces.com/) which looked promising: spatial P2P for virtual worlds! Exactly what we wanted, and it didn't matter very much that it was based on a 2D instead of 3D coordinate space. Even if we do have a floating island.

I set about trying to get the VAST code working on PS4. The library itself is small, but it has ... a dependency. Namely, The A Dynamically Assembled Protocol Transformation, Integration, and eValuation Environment Communication Environment™:

![](/content/images/2015/07/ace.png)

Yes, that is the actual expansion of that acronym. But wait, it gets better! You can do real-time Common Object Request Broker Architecture® Component Model with Component Integrated A Dynamically Assembled Protocol Transformation, Integration, and eValuation Environment Communication Environment™ Object Request Broker™

![](/content/images/2015/07/ccm.png)

*what is happening*

<img src="/content/images/2015/07/new_yellow.gif">

<img src="/content/images/2015/07/new_yellow.gif" width="150">

<img src="/content/images/2015/07/new_yellow.gif" width="300">

<img src="/content/images/2015/07/lastmodified.png">

*oh my gods*

So, a now-wiser Mispy would read all this as "FLEE, MORTAL" and seek greener pastures, but I was intrigued. This monstrosity [runs on freakin' OpenVMS](http://www.dre.vanderbilt.edu/versions.html) so surely I could get it working on PS4. And after lots of tinkering with preprocessor conditionals and tearing my hair out over the threading API, I succeeded! My VAST prototype successfully established a connection.

Of course at this point I discover that VAST doesn't really do any of the things we wanted it to in the first place.

I am still to this day not entirely clear on what exactly VAST *is* supposed to do. It might be useful if you're trying to load balance a series of servers attached to a spatial responsibility zone? Maybe? At any rate, what it definitely *doesn't* do is any of the actual networking part of P2P-- there's no [NAT punching](https://en.wikipedia.org/wiki/NAT_traversal), [STUN](https://en.wikipedia.org/wiki/STUN) or [TURN](https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT) or what have you.

The key mistake I'd been making here was assuming that since we started with a complex system (Badumna), some approximation of that complexity was needed if I wanted to replace it. Given the task "port Badumna", instead of trying to solve the surface-level problem I should've thought more carefully about *why* it was needed and if there was another way to tackle the underlying issue. 

Similarly, I should have analyzed VAST more carefully before getting too invested in the interesting technical process of getting it to work. Tinker mentality can be dangerous when what you need is careful design!

### What we actually went with

Badumna does decentralized peer discovery using [distributed hash tables](distributed hash tables) to avoid single-point-of-failure issues. This is huge technological overkill for a small indie game, and it eventually dawned on me that all the peer discovery could just be done by polling some Python script. That left the core "talk to given peer" networking problem, which falls well within the purview of [SteamNetworking](https://partner.steamgames.com/documentation/api) (based on libjingle) and the PS4 libraries.

I would like to take a moment to express my great fondness for Steam's P2P networking API, by the way! It's super no-nonsense: you don't even need to worry about the current connection state, you just give it a packet and a destination id and off it goes, idempotently setting up whatever it needs to along the way. If the libjingle NAT-punching stuff isn't enough, it'll even go through Steam's own relay servers for you.

So the networking flow now looks like this:

- every few seconds, the game sends a POST request to a [cherrypy](http://www.cherrypy.org/) server with the player's id (either Steam or PSN) and current world coordinates
- the server stores this information in Redis and does a [zrangebyscore](http://redis.io/commands/ZRANGEBYSCORE) query to return a json array of other player ids within a certain radius
- the player ids are fed into a platform-agnostic networking layer wrapped around the Steam and PS4 APIs
- connections are established and players start pushing state to each other directly (using [interpolation](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking#Entity_interpolation) to avoid jerkiness)

Player logouts are handled by expiring ids from the Redis cache if the server doesn't hear from them for a while, which means it can be out of sync but that's fine since there's little harm in trying and failing to connect to the occasional offline player.

Loki worked out the Redis stuff and tied Cryengine into Steam, while I wrote a wrapper for the (rather lower-level) PS4 API to act as a drop-in replacement for SteamNetworking. This was reasonably non-trivial and the kind of thing I would love to open source, but <span style="background-color: black; color: black;">grumble grumble Sony mutter NDAs grumble</span>

Anyway, it worked! The first moment I saw another little Azertash[^n] swimming around on a TV was very satisfying indeed. 

## Improvements

There is one feature of Badumna it would be useful to replicate: relay messaging between peers. Currently, a player only sees another player if the two are directly connected to each other. This means the network topology is [fully connected](https://en.wikipedia.org/wiki/Network_topology#Mesh) and the number of connections grows quadratically with the number of players:

![c = n(n-1)/2](https://upload.wikimedia.org/math/3/e/8/3e86e867a928d394c6e126bd725883de.png)

So if you have 10 players in the same local area each of them is connected to 9 other people and there are 45 connections in total. For a small game like Wander this is fine, but if you wanted to handle high population density, you could instead organize players into [star topologies](https://en.wikipedia.org/wiki/Star_network) where a single player relays information between two or more others. Much less overhead!

[^n]: In the technical sense of "there are lots of players in the same world". Wander has little in common with traditional MMORPGs.
[^n]: Considered aptly named by frustrated devs.
[^n]: A squat, colorful, fast-swimming gender-ambiguous lizard creature. By far my favorite of the four player forms.
