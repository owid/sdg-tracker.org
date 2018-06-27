import * as React from 'react'
import {parseMarkdown} from './formatting'
import GoalPage from './GoalPage'
import AboutPage from './AboutPage'
import FrontPage from './FrontPage'

function renderGoalPage(pageInfo: any) {
    const page: any = pageInfo.entry.get("data").toJS()
    page.slug = pageInfo.entry.get("slug")
    page.isPreview = true

    if (page.layout === "goal")
        return <GoalPage {...page}/>
    else if (page.layout === "frontpage")
        return <FrontPage {...page}/>
    else if (page.layout === "about")
        return <AboutPage {...page}/>
}

declare var CMS: any
CMS.registerPreviewTemplate("pages", renderGoalPage);