declare var require: any
require('bootstrap/dist/css/bootstrap.min.css')
require('../css/sdgs.scss')

import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as path from 'path'

import IndexPage from '../src/IndexPage'
import GoalPage from '../src/GoalPage'
import AboutPage from '../src/AboutPage'
import pages from '../pages'

export default (locals: any, callback: (val: null, resp: any) => void) => {
    const output: {[key: string]: string} = {}
    output['/index.html'] = ReactDOMServer.renderToStaticMarkup(<IndexPage goals={pages as any[]}/>)
    for (const page of pages as any[]) {
        const el = page.layout === "goal" ? <GoalPage {...page}/> : <AboutPage {...page}/>
        output[`/${page.slug}.html`] = ReactDOMServer.renderToStaticMarkup(el)
    }
    callback(null, output)
};