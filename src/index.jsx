//import 'babel-polyfill'
import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
import Homepage from './Homepage'
import Helmet from 'react-helmet'
import faviconImg from './favicon.png'
import sunflowerImg from './sunflower.png'

class Body extends Component {
    content() {
        const {path} = this.props

        return <Homepage class="homepage"/>
    }

    render() {
        const {assets} = this.props
        const js = assets.filter(value => value.match(/\.js$/))

        return <body style={{margin: 0}}>
            <Helmet title="Jaiden Mispy"/>
            {js.map(path =>
                <script src={'/'+path}/>  
            )}
            {this.content()}
        </body>
    }
}

class Head extends Component {
    render() {
        const {head, assets, path} = this.props
        const css = assets.filter(value => value.match(/\.css$/))

        const description = `Since 2016 I have been working with Max Roser and the Oxford Martin School on Our World In Data. This project aims to make verifiable quantitative information about issues of global importance accessible and freely available to all of humanity.`

        return <head>
            {head.title.toComponent()}
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={description}/>
            <meta name="twitter:title" content={head.title.toString()}/>
            <meta name="twitter:url" content={"https://mispy.me" + path}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={"https://mispy.me/" + sunflowerImg}/>
            <meta name="twitter:card" content="summary_large_image"/>

            <meta property="og:locale" content="en_US"/>
            <meta property="og:site_name" content="Jaiden Mispy"/>
            <meta property="og:title" content="Jaiden Mispy"/>
            <meta property="og:url" content={"https://mispy.me" + path}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={"https://mispy.me/" + sunflowerImg}/>
            {head.meta.toComponent()}
            {css.map(cssPath =>
                <link rel="stylesheet" type="text/css" href={'/'+cssPath}/>  
            )}       
            <link rel="icon" href={faviconImg}/>
            {head.link.toComponent()}
        </head>
    }
}

export default (locals, callback) => {
    const assets = Object.keys(locals.webpackStats.compilation.assets)
    const bodyStr = renderToString(<Body path={locals.path} assets={assets}/>)
    const head = Helmet.rewind()
    const headStr = renderToString(<Head path={locals.path} head={head} assets={assets}/>)

    callback(null, "<html>"+headStr+bodyStr+"</html>")
};