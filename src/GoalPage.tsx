import * as React from 'react'

import {SiteHeader} from './SiteHeader'
import SiteFooter from './SiteFooter'
import {Head} from './Head'
import {sdgsUrl, absoluteSdgsUrl} from './settings'
import {formatSDG, parseMarkdown, stripMarkdown, firstParagraph} from './formatting'

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
    body?: HTMLBodyElement
    render() {
        const {isPreview, slug, goalNum, name, title, description, featuredImage, body} = this.props

        const pageTitle = `Goal ${goalNum}: ${title}`
    
        return <html>
            <Head canonicalUrl={absoluteSdgsUrl(slug)} pageTitle={pageTitle} pageDesc={firstParagraph(stripMarkdown(description))} imageUrl={absoluteSdgsUrl(featuredImage)}/>
            <body ref={e => this.body = e as HTMLBodyElement}>
                <SiteHeader/>
                <article className={`GoalPage ${slug}`}>
                    <header>
                        <div>
                            <div className="breadcrumb">
                                <span><a href={sdgsUrl("/")}>Sustainable Development Goals</a><span style={{"paddingLeft": ".5rem", "paddingRight": ".5rem"}}>/</span>{name}</span>
                            </div>
                            <div className="goalIntro">
                                <div className="row">
                                    <div className="col-md-8">
                                        <span>Sustainable Development Goal {goalNum}</span>
                                        <h1>{title}</h1>
                                        <div dangerouslySetInnerHTML={{__html: parseMarkdown(description)}}/>
                                        <a href="#targets"><i className="fa fa-arrow-down"/> How is the world doing on this goal?</a>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={sdgsUrl(featuredImage)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {formatSDG(body, isPreview)}
                </article>
                <SiteFooter/>
            </body>
        </html>    
    }
}
