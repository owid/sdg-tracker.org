import * as React from 'react'

import {SiteHeader} from './SiteHeader'
import {Head} from './Head'
import {BAKED_URL} from './settings'
import {parseMarkdown} from './formatting'

export interface GoalPageProps {
    slug: string
    name: string
    title: string
    description: string
    featuredImage: string
    body: string
}

export const GoalPage = (props: GoalPageProps) => {
    const {slug, name, title, description, featuredImage, body} = props
    console.log(body)

    const canonicalUrl = `${BAKED_URL}/${slug}`
    const pageDesc = "Hmm"

    return <html>
        <Head canonicalUrl={canonicalUrl} pageTitle={title} pageDesc={description} imageUrl={featuredImage}/>
        <body>
            <SiteHeader/>
            <article className="goal">
                <div className="breadcrumb">
                    <span><a href="../">Sustainable Development Goals</a> <i className="fa fa-angle-right"/> {name}</span>
                </div>
                <header id="goal">
                    <img src={featuredImage} />
                    <div>
                        <h1>{title}</h1>
                        <div dangerouslySetInnerHTML={{__html: parseMarkdown(description)}}/>
                        <p style={{ color: 'red' }}>Draft version; do not distribute</p>
                    </div>
                </header>
                <div dangerouslySetInnerHTML={{__html: parseMarkdown(body)}}/>
            </article>
            <script src="https://ourworldindata.org/grapher/embedCharts.js"/>
        </body>
    </html>
}
