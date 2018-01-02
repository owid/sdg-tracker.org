import * as React from 'react'

import {SiteHeader} from './SiteHeader'
import {Head} from './Head'
import {BAKED_URL} from './settings'
import {formatSDG, parseMarkdown} from './formatting'

export interface GoalPageProps {
    isPreview?: boolean
    slug: string
    goalNum: number
    name: string
    title: string
    description: string
    featuredImage: string
    body: string
}

export default class GoalPage extends React.Component<GoalPageProps> {
    body: HTMLBodyElement
    // HACK (Mispy): Make chart embeds work in Netlify CMS preview
    /*componentDidMount() {
        const script = document.createElement("script")
        script.src = "https://ourworldindata.org/grapher/embedCharts.js"
        script.async = true
        this.body.appendChild(script)
    }*/

    render() {
        const {isPreview, slug, goalNum, name, title, description, featuredImage, body} = this.props

        const canonicalUrl = `${BAKED_URL}/${slug}`
        const pageTitle = `Goal ${goalNum}: ${title}`
    
        return <html>
            <Head canonicalUrl={canonicalUrl} pageTitle={pageTitle} pageDesc={description} imageUrl={featuredImage}/>
            <body ref={e => this.body = e as HTMLBodyElement}>
                <SiteHeader/>
                <article className="GoalPage">
                    <header>
                        <div className="breadcrumb">
                            <span><a href="../">Sustainable Development Goals</a> <i className="fa fa-angle-right"/> {name}</span>
                        </div>
                        <div className="goalIntro">
                            <img src={featuredImage} />
                            <div>
                                <h1>{pageTitle}</h1>
                                <div>{parseMarkdown(description)}</div>
                                <p style={{ color: 'red' }}>Draft version; do not distribute</p>
                            </div>
                        </div>
                    </header>
                    <div className="content">{formatSDG(body, isPreview)}</div>
                </article>
                <script src="https://ourworldindata.org/grapher/embedCharts.js"/>
            </body>
        </html>    
    }
}
