import * as React from 'react'
import {parseMarkdown} from './formatting'
import GoalPage from './GoalPage'
import AboutPage from '../src/AboutPage'

function renderGoalPage(pageInfo: any) {
    const page: any = pageInfo.entry.get("data").toJS()
    page.slug = pageInfo.entry.get("slug")
    page.isPreview = true
    return page.layout === "goal" ? <GoalPage {...page}/> : <AboutPage {...page}/>
}

declare var CMS: any
CMS.registerPreviewTemplate("pages", renderGoalPage);