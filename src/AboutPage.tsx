import * as React from 'react'

import {SiteHeader} from './SiteHeader'
import SiteFooter from './SiteFooter'
import {Head} from './Head'
import {sdgsUrl, absoluteSdgsUrl} from './settings'
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

        const pageTitle = `${title}`
    
        return <html>
            <Head canonicalUrl={absoluteSdgsUrl(slug)} pageTitle={pageTitle} pageDesc={description} imageUrl={absoluteSdgsUrl(featuredImage)}/>
            <body ref={e => this.body = e as HTMLBodyElement}>
                <SiteHeader/>
                <article className="AboutPage">
                    <header>
                        <div className="breadcrumb">
                            <span><a href={sdgsUrl("/")}>Sustainable Development Goals</a><span style={{"padding-left": ".5rem", "padding-right": ".5rem"}}>/</span>{name}</span>
                        </div>
                    </header>
                    <img src={sdgsUrl(featuredImage)}/>
                    <h1>{pageTitle}</h1>
                    <div className="content">{formatSDG(body, isPreview)}</div>
                </article>
                <SiteFooter/>
            </body>
        </html>    
    }
}
