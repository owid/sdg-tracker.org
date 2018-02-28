import { sdgsUrl } from './settings'
import * as React from 'react'
import * as urljoin from 'url-join'

export const Head = (props: { canonicalUrl: string, pageTitle?: string, pageDesc?: string, imageUrl?: string }) => {
    const {canonicalUrl} = props
    const pageTitle = props.pageTitle ? `${props.pageTitle} - Our World in Data` : `Our World in Data`
    const pageDesc = props.pageDesc || "Living conditions around the world are changing rapidly. Explore how and why."
    let imageUrl = props.imageUrl || `https://ourworldindata.org/wp-content/uploads/2016/06/OurWorldInData.png`

    return <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc}/>
        <link rel="canonical" href={canonicalUrl}/>
        <meta property="fb:app_id" content="1149943818390250"/>
        <meta property="og:url" content={canonicalUrl}/>
        <meta property="og:title" content={pageTitle}/>
        <meta property="og:description" content={pageDesc}/>
        <meta property="og:image" content={imageUrl}/>
        <meta property="og:site_name" content="Our World in Data"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@OurWorldInData"/>
        <meta name="twitter:creator" content="@OurWorldInData"/>
        <meta name="twitter:title" content={pageTitle}/>
        <meta name="twitter:description" content={pageDesc}/>
        <meta name="twitter:image" content={imageUrl}/>
        <link rel="stylesheet" href={sdgsUrl("/assets/sdgs.css")}/>
    </head>
}
