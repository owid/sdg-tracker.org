---
title: The mysterious nature of bots
slug: the-mysterious-nature-of-bots
date: 2014-05-02
layout: Article
---

<style>
  iframe { margin: auto !important; }
</style>

A couple of years ago [@JackLScanlan](https://twitter.com/JackLScanlan) made a joke of some kind, as he often does. The subject of the joke was [@Horse\_ebooks](https://twitter.com/Horse_ebooks), a uniquely Twitter oddity and likely the [most infamous spambot](http://en.wikipedia.org/wiki/Horse_ebooks) to have ever lived. This seemed like a prime opportunity for silliness, so after a bit of coding [@scanlan_ebooks](https://twitter.com/scanlan_ebooks) was born. Little did I know this would be but the first of [many robot clones](https://twitter.com/m1sp/mispybots/members).

<blockquote class="twitter-tweet" lang="en"><p>Dear god, just realised that I care about conceptual understanding.</p>&mdash; Jack Scanlan ebooks (@scanlan_ebooks) <a href="https://twitter.com/scanlan_ebooks/statuses/436651507677945856">February 21, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[Markov chain](http://en.wikipedia.org/wiki/Markov_chain) chatbots have a long history in programming, being very easy toy examples of a simple but powerful mathematical model which is used for a whole lot of [more serious stuff](http://en.wikipedia.org/wiki/Markov_chain#Applications). The classic Markov text generator maintains a probability map of which words are more or less likely to come after some number of preceding words, and builds a sentence by following it from a given start point.

The [algorithm I use now](https://github.com/mispy/twitter_ebooks/blob/master/lib/twitter_ebooks/suffix.rb#L40) is a variation on this. Instead of linearly chaining words, it starts with an intact sentence from the corpus and mixes it with one or more other sentences in a manner similar to [DNA recombination](http://en.wikipedia.org/wiki/Genetic_recombination). The Markov model is used to select the junction sites where this recombination occurs. This seems to strike a nice balance between diversifying the output and avoiding complete gibberish; the sentences it produces are grammatically correct more often than not. (well, assuming the source is!)

This has proliferated somewhat, and I have no idea how many of the various \_ebooks accounts are using my [twitter\_ebooks](https://github.com/mispy/twitter_ebooks) Ruby gem or how modified they are. There have been bots based on [novels](https://twitter.com/aspects_ebooks), [cartoon characters](https://twitter.com/pinkiepieebooks), and all manner of strange text corpora. Kevin Nguyen wrote a very [introspective article](http://bygonebureau.com/2014/02/24/i-bot/) about [@knguyen_ebooks](https://twitter.com/knguyen_ebooks), deployed by [@negatendo](https://twitter.com/negatendo).

What I find much more interesting than the bots themselves though is the way people interact with them. These generally fall into three groups:

- Those familiar with Markov chains who are being tongue-in-cheek about it
- Non-programmers experiencing [the ELIZA effect](http://en.wikipedia.org/wiki/ELIZA_effect) to various degrees
- People who should probably never be relied upon to judge a [Turing test](http://en.wikipedia.org/wiki/Turing_test)

The third group is more populous than you might expect, especially if you include ESL speakers. My bots will try to imitate human interaction patterns, responding to mentions [using keyword analysis](https://github.com/mispy/twitter_ebooks/blob/master/lib/twitter_ebooks/model.rb#L170) to come up with something vaguely related to the input, and a slight random delay to avoid appearing superhuman. They will also follow back and occasionally favorite or RT tweets they find sufficiently interesting.

Some examples of amusing events in recent history:

#### mcc_ebooks and the robot uprising

I think [@mcc_ebooks](https://twitter.com/mcc_ebooks) is my favorite overall, just because [@mcclure111](https://twitter.com/mcclure111) and her friends are already so suffused with baffling surreal humor that it just sort of amplifies it.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/LorenSchmidt">@LorenSchmidt</a> We could just stay like this forever while flashing bands of color horizontally across the screen</p>&mdash; mcc ebooks (@mcc_ebooks) <a href="https://twitter.com/mcc_ebooks/statuses/438212336349102080">February 25, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

People tend to give it the benefit of the doubt, which is often very sweet and heart-warming.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/mcc_ebooks">@mcc_ebooks</a> Aww, you have a girlfriend? Bots in love, so adorable!</p>&mdash; Erika Sorensen (@eiridescent) <a href="https://twitter.com/eiridescent/statuses/456945528039690240">April 18, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

As the original human tweets at and about the bot, more bot-related statements enter the corpus, so it becomes "self-aware".

<blockquote class="twitter-tweet" lang="en"><p>I feel like we just had a moment. <a href="https://twitter.com/mcc_ebooks">@mcc_ebooks</a></p>&mdash; Kevin Snow (@starguarded) <a href="https://twitter.com/starguarded/statuses/447131103413813248">March 21, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Which of course, has only one logical endpoint.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/Carin_McLeoud">@Carin_McLeoud</a> <a href="https://twitter.com/mcclure111">@mcclure111</a> I stand up (gain the ability to walk), to become naked</p>&mdash; mcc ebooks (@mcc_ebooks) <a href="https://twitter.com/mcc_ebooks/statuses/462028701564420096">May 2, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p></p>

#### m1sp1dea_ebooks spooks Rackspace security

[@m1sp1dea_ebooks](https://twitter.com/m1sp1dea_ebooks) uses a combined corpus consisting of myself and [@0xabad1dea](https://twitter.com/0xabad1dea)'s tweets. It's kind of a freakish hybrid. (people keep [confusing the two of us](http://abad1dea.tumblr.com/post/84149795075/misptaken-identity) anyway, somehow)

<blockquote class="twitter-tweet" lang="en"><p>Anxiety is not a big truck.</p>&mdash; Melissa × Mispy (@m1sp1dea_ebooks) <a href="https://twitter.com/m1sp1dea_ebooks/statuses/435201964205682688">February 17, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Of course since [@0xabad1dea](https://twitter.com/0xabad1dea) spends a lot of time talking about infosec, it was inevitable that the bot would one day announce it had found a vulnerability.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/m1sp1dea_ebooks">@m1sp1dea_ebooks</a> Hi! Please let us know if you find anything <a href="https://twitter.com/Rackspace">@Rackspace</a> should be aware of <a href="http://t.co/zpjsT3VeBa">http://t.co/zpjsT3VeBa</a></p>&mdash; Elizabeth Jurewicz (@RackerLiz) <a href="https://twitter.com/RackerLiz/statuses/421799120001445888">January 11, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

And not do very much to discourage the idea.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/m1sp1dea_ebooks">@m1sp1dea_ebooks</a> Please send details to help@rackspace.com , we&#39;ll see how we can help. ( cc <a href="https://twitter.com/Rackspace">@Rackspace</a>)</p>&mdash; Elizabeth Jurewicz (@RackerLiz) <a href="https://twitter.com/RackerLiz/statuses/421799501729255424">January 11, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Fortunately, a human quickly intervened.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/RackerLiz">@RackerLiz</a> <a href="https://twitter.com/m1sp1dea_ebooks">@m1sp1dea_ebooks</a> <a href="https://twitter.com/Rackspace">@Rackspace</a> oh I’m sorry, this is a bot who mashes up tweets :(</p>&mdash; Melissa (@0xabad1dea) <a href="https://twitter.com/0xabad1dea/statuses/421801912204550144">January 11, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p></p>

#### The political intrigues of TonyAbotMHR

During the last Australian federal election season, someone made a joke about [Tony Abbott](http://en.wikipedia.org/wiki/Tony_Abbott) and his propensity for Markov-like meaningless rambling. Thus, [@TonyAbotMHR](https://twitter.com/TonyAbotMHR) was born, using a slightly different algorithm that replaces nouns with random other nouns.

<blockquote class="twitter-tweet" lang="en"><p>But ladies and gentlemen, it&#39;s just got worse since Julia Gillard has become the Prime Minister of this napkin.</p>&mdash; Tony A Bot (@TonyAbotMHR) <a href="https://twitter.com/TonyAbotMHR/statuses/370259391783526402">August 21, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Occasionally, he is mistaken for the real thing, by endearingly optimistic citizens who seemingly believe the denizens of high politics are likely to engage in individual discourse with them.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/TonyAbotMHR">@TonyAbotMHR</a> I voted green it would appreciated if you did take sometime to see what they offered. Especially Mining Co. should pay HTax</p>&mdash; Mimi Savy deChermont (@ameliatdales) <a href="https://twitter.com/ameliatdales/statuses/377999629607923712">September 12, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

There's been at least one truly *epic* debate, covering everything from genetically modified giraffes to the local entertainment industry.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/TonyAbotMHR">@TonyAbotMHR</a> This is getting a bit cryptic but yep, i need to have no reservations about putting my name to any actions hypothetical or not</p>&mdash; Sir Tennly Loverock (@EdHightackle) <a href="https://twitter.com/EdHightackle/statuses/411059179663552513">December 12, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This man has since been elected Prime Minister, to our great dismay.


#### winocm_ebooks and the jailbreak swarm

[@winocm](https://twitter.com/winocm) has the highest follower count of my Twitter friends by a large margin, largely on account of her role in the [iOS jailbreaking community](http://www.ibtimes.co.uk/ios-7-1-untethered-jailbreak-imminent-winocm-demonstrates-jailbroken-iphone-4-youtube-video-1441258). Sadly this means she is *constantly* pestered by people demanding the release of various things.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/winocm">@winocm</a> plz don&#39;t ignore me&#10;I want to ask about 7.1 JB&#10;Plz answer 😣😣&#10;<a href="https://twitter.com/search?q=%23wincom&amp;src=hash">#wincom</a></p>&mdash; عبدالله النصر (@abdullahnssr) <a href="https://twitter.com/abdullahnssr/statuses/460529582735503360">April 27, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" lang="en"><p>Maybe I should make a Markov chain bot respond to all requests for a 7.1 jailbreak on this account… calling <a href="https://twitter.com/m1sp">@m1sp</a>!</p>&mdash; winocm (@winocm) <a href="https://twitter.com/winocm/statuses/460828677568479235">April 28, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Fortunately, this was a trivial extension to make to [@winocm_ebooks](https://twitter.com/winocm_ebooks).

```ruby
  make_bot(bot, "winocm") do |gen|
    EM.next_tick do
      bot.stream.track("@winocm") do |tweet|
        text = tweet[:text].downcase
        if !tweet[:user][:screen_name].include?("_ebooks") && (text.include?("7.1") || text.include?("jailbreak") || text.split.include?("jb"))
          bot.reply(tweet, "@#{tweet[:user][:screen_name]} " + gen.model.make_response(tweet[:text]))
        end
      end
    end
  end
```

It works really quite surprisingly well. People mention [@winocm](https://twitter.com/winocm), receive a reply from [@winocm_ebooks](https://twitter.com/winocm_ebooks), and proceed to engage with it, seemingly unaware that their jailbreaking deity has been replaced with a robot.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/abdullahnssr">@abdullahnssr</a> oh wait, I broke 7.x by installing 7.1 improperly I think, I should fix that...</p>&mdash; winocm_ebooks (@winocm_ebooks) <a href="https://twitter.com/winocm_ebooks/statuses/460839810379579393">April 28, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

These conversations go on for many, many pages. A few bold individuals even requested the bot's hand in marriage:

<blockquote class="twitter-tweet" lang="en"><p>Please will you marry me? <a href="https://twitter.com/winocm_ebooks">@winocm_ebooks</a></p>&mdash; Drake Kanjuani (@SecretAgentZ3R0) <a href="https://twitter.com/SecretAgentZ3R0/statuses/461665741633114112">May 1, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/winocm_ebooks">@winocm_ebooks</a> if I love you will you marry me and find me exploits</p>&mdash; Ninty Apple (@nintendoapple_) <a href="https://twitter.com/nintendoapple_/statuses/460941087507357697">April 29, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I'm fairly sure this isn't legal anywhere yet. Maybe Japan.

Can we draw any interesting conclusions from all of this? Probably not. I do like to think, though, that the readiness with which people engage with the bots speaks well of our capacity to accept that which is fundamentally different from us. Should true non-human intelligence appear, I hope we will be similarly ready to adapt our culture around it.
