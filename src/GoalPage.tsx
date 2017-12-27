import * as React from 'react'

import {SiteHeader} from './SiteHeader'
import {Head} from './Head'
import {BAKED_URL} from './settings'
import {formatSDG, parseMarkdown} from './formatting'

export interface GoalPageProps {
    slug: string
    goalNum: number
    name: string
    title: string
    description: string
    featuredImage: string
    body: string
}

export default function GoalPage(props: GoalPageProps) {
    const {slug, goalNum, name, title, description, featuredImage, body} = props

    const canonicalUrl = `${BAKED_URL}/${slug}`
    const pageTitle = `Goal ${goalNum}: ${title}`

    return <html>
        <Head canonicalUrl={canonicalUrl} pageTitle={pageTitle} pageDesc={description} imageUrl={featuredImage}/>
        <body>
            <SiteHeader/>
            <article className="goal">
                <div className="breadcrumb">
                    <span><a href="../">Sustainable Development Goals</a> <i className="fa fa-angle-right"/> {name}</span>
                </div>
                <header>
                    <img src={featuredImage} />
                    <div>
                        <h1>{pageTitle}</h1>
                        <div dangerouslySetInnerHTML={{__html: parseMarkdown(description)}}/>
                        <p style={{ color: 'red' }}>Draft version; do not distribute</p>
                    </div>
                </header>
                <div className="content" dangerouslySetInnerHTML={{__html: formatSDG(body)}}/>
            </article>
            <script src="https://ourworldindata.org/grapher/embedCharts.js"/>
        </body>
    </html>
}
