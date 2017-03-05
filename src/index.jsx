import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
import Homepage from './Homepage'
import Post from './Post'

class App extends Component {
    content() {
        const {path} = this.props

        if (path == "/") {
            return <Homepage/>
        } else {
            return <Post params={{slug: path.replace('/', '')}}/>
        }           
    }

    render() {
        const {assets} = this.props
        const js = assets.filter(value => value.match(/\.js$/))
        const css = assets.filter(value => value.match(/\.css$/))

        return <html>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width; initial-scale=1"/>
                {css.map(path =>
                    <link rel="stylesheet" type="text/css" href={'/'+path}/>  
                )}                
            </head>
            <body>
                {js.map(path =>
                    <script src={'/'+path}/>  
                )}
                {this.content()}
            </body>
        </html>
    }
}

export default (locals, callback) => {    
    callback(null, renderToString(<App path={locals.path} assets={Object.keys(locals.webpackStats.compilation.assets)}/>))
};