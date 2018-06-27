declare var require: any
require('../css/sdgs.scss')

import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as path from 'path'

import FrontPage from '../src/FrontPage'
import GoalPage from '../src/GoalPage'
import AboutPage from '../src/AboutPage'
import pages from '../pages'

export default (locals: any, callback: (val: null, resp: any) => void) => {
    const output: {[key: string]: string} = {}
    for (const page of pages as any[]) {
        let el
        if (page.layout === "goal")
            el = <GoalPage {...page}/>
        else if (page.layout === "frontpage")
            el = <FrontPage {...page}/>
        else// if (page.layout === "about")
            el = <AboutPage {...page}/>

        
        output[`/${page.slug}.html`] = ReactDOMServer.renderToStaticMarkup(el)
    }
    callback(null, output)
};