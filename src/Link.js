import React, {Component} from 'react'

export default class Link extends Component {
    render() {
        return <a href={this.props.to} {...this.props}>{this.props.children}</a>
    }
}