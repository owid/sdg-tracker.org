declare var require: any
require('font-awesome/css/font-awesome.css')
require('../css/sdgs.scss')

import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as Markdown from 'react-markdown'
import * as path from 'path'

import IndexPage from '../src/IndexPage'
import GoalPage from '../src/GoalPage'
import pages from '../pages'

export default (locals: any, callback: (val: null, resp: any) => void) => {
    const output: {[key: string]: string} = {}
    output['/index.html'] = ReactDOMServer.renderToStaticMarkup(<IndexPage goals={pages}/>)
    for (const page of pages) {
        output[`/${page.slug}.html`] = ReactDOMServer.renderToStaticMarkup(<GoalPage {...page}/>)
    }
    callback(null, output)
};