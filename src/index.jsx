//import 'babel-polyfill'
import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
import Homepage from './Homepage'
import Post from './Post'
import Helmet from 'react-helmet'

class Body extends Component {
    content() {
        const {path} = this.props

        if (path == "/") {
            return <Homepage class="homepage"/>
        } else {
            return <Post params={{slug: path.replace('/', '')}}/>
        }           
    }

    render() {
        const {manifest} = this.props

        return <body>
            <Helmet title="~mispy"/>
            <script src={'/'+manifest['main.js']}/>  
            {this.content()}
        </body>
    }
}

class Head extends Component {
    render() {
        const {head, manifest} = this.props

        return <head>
            {head.title.toComponent()}
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {head.meta.toComponent()}
            <link rel="stylesheet" type="text/css" href={'/'+manifest['main.css']}/>  
            {head.link.toComponent()}
        </head>
    }
}

export default (locals, callback) => {
    const manifest = locals.isProduction ? JSON.parse(locals.fs.readFileSync('build/manifest.json').toString()) : {
        'main.js': 'mispy.js',
        'main.css': 'mispy.css'
    }

    const bodyStr = renderToString(<Body path={locals.path} manifest={manifest}/>)
    const head = Helmet.rewind()
    const headStr = renderToString(<Head head={head} manifest={manifest}/>)

    callback(null, "<html>"+headStr+bodyStr+"</html>")
};