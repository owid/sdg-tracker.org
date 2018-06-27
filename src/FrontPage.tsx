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

        const pageTitle = "Measuring progress towards the Sustainable Development Goals"
        const pageImage = `/img/sdg-poster.png`
        const pageDesc = "The United Nations Sustainable Development Goals (SDGs) are targets for global development adopted in September 2015, set to be achieved by 2030. Here we present data across all available indicators from the Our World in Data database tracking progress towards these goals around the world."

        return <html>
            <Head canonicalUrl={absoluteSdgsUrl("/")} pageTitle={pageTitle} pageDesc={firstParagraph(stripMarkdown(description))} imageUrl={absoluteSdgsUrl(featuredImage)}/>
            <body className="FrontPage">
                <SiteHeader/>
                <div className="siteIntro container">
                    <h1>{title}</h1>
                    <p>The United Nations <a href="http://www.un.org/sustainabledevelopment/">Sustainable Development Goals</a> (SDGs) are targets for global development adopted in September 2015, set to be achieved by 2030. Here we present data across all available indicators from the <a href="https://ourworldindata.org">Our World in Data</a> database tracking progress towards these goals around the world.</p>
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