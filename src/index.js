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
        return <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/style.css"/>  
            </head>
            <body>
                {this.content()}
            </body>
        </html>
    }
}

export default (locals, callback) => {    
    callback(null, renderToString(<App path={locals.path}/>))
};