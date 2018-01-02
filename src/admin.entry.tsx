import * as React from 'react'
import {parseMarkdown} from './formatting'
import GoalPage, {GoalPageProps} from './GoalPage'

function renderGoalPage(pageInfo: any) {
    const props: GoalPageProps = pageInfo.entry.get("data").toJS()
    props.slug = pageInfo.entry.get("slug")
    return <GoalPage {...props}/>
}

declare var CMS: any
CMS.registerPreviewTemplate("pages", renderGoalPage);

