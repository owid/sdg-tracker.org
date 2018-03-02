import * as React from 'react'
import SiteFooter from './SiteFooter'
import {SiteHeader} from './SiteHeader'
import {Head} from './Head'
import {sdgsUrl, absoluteSdgsUrl} from './settings'
import {GoalPageProps} from './GoalPage'

export default function IndexPage(props: { goals: GoalPageProps[] }) {
    const {goals} = props
    const pageTitle = "Measuring progress towards the Sustainable Development Goals"
    const pageImage = `/img/sdg-poster.png`
    const pageDesc = "The United Nations Sustainable Development Goals (SDGs) are targets for global development adopted in September 2015, set to be achieved by 2030. Here we present data across all available indicators from the Our World in Data database tracking progress towards these goals around the world."

    return <html>
        <Head canonicalUrl={absoluteSdgsUrl("/")} pageTitle={pageTitle} pageDesc={pageDesc} imageUrl={absoluteSdgsUrl(pageImage)}/>
        <body className="IndexPage">
            <SiteHeader/>
            <div className="siteIntro container">
                <h1>Measuring progress towards the Sustainable Development Goals</h1>
                <p>The United Nations <a href="http://www.un.org/sustainabledevelopment/">Sustainable Development Goals</a> (SDGs) are a set of targets for global development adopted in September 2015, aiming to be achieved by 2030. Here we present data across all available indicators from the <a href="https://ourworldindata.org">Our World in Data</a> database tracking progress towards these goals around the world.</p>
            </div>
            <nav>
                <div className="goals">
                    {goals.map(goal => 
                        <a href={sdgsUrl(goal.slug)}>
                            <img src={sdgsUrl(goal.featuredImage)} alt={goal.name}/>
                        </a>
                    )}
                    <a>
                        <img src={sdgsUrl("/img/uploads/18.png")} />
                    </a>
                </div>
            </nav>
            <SiteFooter/>
        </body>
    </html>
}