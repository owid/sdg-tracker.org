import * as React from 'react'
import SiteFooter from './SiteFooter'
import {SiteHeader} from './SiteHeader'
import {Head} from './Head'
import {sdgsUrl, absoluteSdgsUrl} from './settings'
import {GoalPageProps} from './GoalPage'
import {parseMarkdown, stripMarkdown, firstParagraph} from './formatting'
import pages from '../pages'

export interface FrontPageProps {
    slug: string
    title: string
    description: string
    featuredImage: string
    body: string
    goals: GoalPageProps[]
}

export default class FrontPage extends React.Component<FrontPageProps> {
    render() {
        const {slug, title, description, featuredImage, body, goals} = this.props

        return <html lang="en">
            <Head canonicalUrl={absoluteSdgsUrl("/")} pageTitle={title} pageDesc={firstParagraph(stripMarkdown(description))} imageUrl={absoluteSdgsUrl(featuredImage)}/>
            <body className="FrontPage">
                <SiteHeader/>
                <div className="siteIntro container">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: parseMarkdown(body)}}/>
                </div>
                <nav>
                    <div className="goals">
                        {pages.map((page: any) => 
                            page.layout !== "frontpage" && <a key={page.slug} href={sdgsUrl(page.slug)}>
                                <img src={sdgsUrl(page.featuredImage)} alt={page.name}/>
                            </a>
                        )}
                    </div>
                </nav>
                <SiteFooter/>
            </body>
        </html>
    }
}