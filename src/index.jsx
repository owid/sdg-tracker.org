//import 'babel-polyfill'
import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
import Homepage from './Homepage'
import Post from './Post'

class App extends Component {
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

        return <html>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width; initial-scale=1"/>
                <link rel="stylesheet" type="text/css" href={'/'+manifest['main.css']}/>  
            </head>
            <body>
                <script src={'/'+manifest['main.js']}/>  
                {this.content()}
            </body>
        </html>
    }
}

export default (locals, callback) => {
    const manifest = locals.isProduction ? JSON.parse(locals.fs.readFileSync('build/manifest.json').toString()) : {
        'main.js': 'mispy.js',
        'main.css': 'mispy.css'
    }
    callback(null, renderToString(<App path={locals.path} manifest={manifest}/>))
};