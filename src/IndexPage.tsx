import * as React from 'react'
import {SiteHeader} from './SiteHeader'
import {Head} from './Head'
import {BAKED_URL} from './settings'
import {GoalPageProps} from './GoalPage'

export default function IndexPage(props: { goals: GoalPageProps[] }) {
    const {goals} = props
    const canonicalUrl = `https://ourworldindata.org/mispy/sdgs`
    const pageTitle = "Measuring progress towards the Sustainable Development Goals"
    const pageImage = `${canonicalUrl}/img/sdg-poster.png`
    const pageDesc = "The UN sustainable development goals are a set of targets for global development adopted by world leaders in September 2015. Here we present data from the OWID database showing progress towards these goals around the world."

    return <html>
        <Head canonicalUrl={BAKED_URL} pageTitle={pageTitle} pageDesc={pageDesc} imageUrl={pageImage}/>
        <body>
            <SiteHeader/>
            <div className="intro container">
                <h1>Measuring progress towards the Sustainable Development Goals</h1>
                <p>The UN <a href="http://www.un.org/sustainabledevelopment/">sustainable development goals</a> are a set of targets for global development adopted by world leaders in September 2015. Here we present data from the OWID database tracking progress towards these goals around the world.</p>
                <p style={{ color: 'red' }}>Draft version; do not distribute</p>
            </div>
            <nav className="goalNav">
                <div className="goals">
                    {goals.map(goal => 
                        <a href={goal.slug}>
                            <img src={goal.featuredImage} alt={goal.name}/>
                        </a>
                    )}
                <img src="./img/goals/18.png" />
                </div>
            </nav>
        </body>
    </html>
}