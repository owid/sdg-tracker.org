import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'
import Homepage from './Homepage'
import Post from './Post'
import NoMatch from './NoMatch'

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={Homepage}/>
    <Route path="/:slug" component={Post}/>
    <Route path="*" component={NoMatch}/>
</Router>, document.body)

