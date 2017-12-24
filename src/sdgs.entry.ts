import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as Markdown from 'react-markdown'
import { Goals, Goal } from './Goals'

declare var require: any
require('font-awesome/css/font-awesome.css')
require('./index.scss')

const RootUrl = "/mispy/sdgs"

const SiteHeader = () => {
    return <header>
        <div className="container">
            <a className="logo" href="/">Our World in Data</a>
            <nav>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/support">Donate</a>
            </nav>
        </div>
    </header>
}

const SiteIntro = () => {

}

const GoalPage = (props: { goal: Goal, assets: string[] }) => {
    const {goal} = props
    const goalNum = Goals.indexOf(props.goal) + 1
    const css = props.assets.filter(value => value.match(/\.css$/))
    const baseUrl = "https://ourworldindata.org/mispy/sdgs"
    const canonicalUrl = `${baseUrl}/${goal.slug}`
    const pageTitle = `Goal ${goalNum}: ${goal.title}`
    const pageDesc = goal.description
    const pageImage = `${baseUrl}/img/goals/${goalNum}.png`

    return <html>
        <head>
            <title>{pageTitle} - Our World in Data</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={pageDesc}/>
            <meta property="fb:app_id" content="1149943818390250"/>
            <meta property="og:type" content="article"/>
            <meta property="og:url" content={canonicalUrl}/>
            <meta property="og:title" content={pageTitle}/>
            <meta property="og:description" content={pageDesc}/>
            <meta property="og:image" content={pageImage}/>
            <meta property="og:site_name" content="Our World in Data"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@OurWorldInData"/>
            <meta name="twitter:creator" content="@OurWorldInData"/>
            <meta name="twitter:title" content={pageTitle}/>
            <meta name="twitter:description" content={pageDesc}/>
            <meta name="twitter:image" content={pageImage}/>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            {css.map(cssPath =>
                <link rel="stylesheet" type="text/css" href={"../"+cssPath} />
            )}
        </head>
        <body>
            <SiteHeader/>
            <article className="goal">
                <div className="breadcrumb">
                    <span><a href="../">Sustainable Development Goals</a> <i className="fa fa-angle-right"/> {goal.name}</span>
                </div>
                <header id="goal">
                    <img src={`../img/goals/${goalNum}.png`} />
                    <div>
                        <h1>Goal {goalNum}: {goal.title}</h1>
                        {goal.description && <Markdown source={goal.description}/>}
                        <p style={{ color: 'red' }}>Draft version; do not distribute</p>
                    </div>
                </header>
                {props.goal.targets.map((target, index) => 
                    target.figures !== undefined && <section className={"target" + (target.figures.length > 1 ? " multiFigure" : "")}>
                        <div>
                            <h3>Target {goalNum}.{index+1}</h3>
                            <p><em>{target.title}</em></p>
                            {target.figureDesc && <Markdown source={target.figureDesc}/>}
                        </div>
                        <div>
                            {target.figures.map(path => 
                                <figure data-grapher-src={`/grapher/${path}`}/>
                            )}
                        </div>
                    </section>
                )}
            </article>
            <script src="https://ourworldindata.org/grapher/embedCharts.js"/>
        </body>
    </html>
}


const SiteIndex = (props: { assets: string[] }) => {
    const canonicalUrl = `https://ourworldindata.org/mispy/sdgs`
    const pageTitle = "Measuring progress towards the Sustainable Development Goals"
    const pageImage = `${canonicalUrl}/img/sdg-poster.png`
    const pageDesc = "The UN sustainable development goals are a set of targets for global development adopted by world leaders in September 2015. Here we present data from the OWID database showing progress towards these goals around the world."
    const css = props.assets.filter(value => value.match(/\.css$/))

    return <html>
        <head>
            <title>{pageTitle} - Our World in Data</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={pageDesc}/>
            <meta property="fb:app_id" content="1149943818390250"/>
            <meta property="og:type" content="article"/>
            <meta property="og:url" content={canonicalUrl}/>
            <meta property="og:title" content={pageTitle}/>
            <meta property="og:description" content={pageDesc}/>
            <meta property="og:image" content={pageImage}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:site_name" content="Our World in Data"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@OurWorldInData"/>
            <meta name="twitter:creator" content="@OurWorldInData"/>
            <meta name="twitter:title" content={pageTitle}/>
            <meta name="twitter:description" content={pageDesc}/>
            <meta name="twitter:image" content={pageImage}/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {css.map(cssPath =>
                <link rel="stylesheet" type="text/css" href={cssPath} />
            )}
            <link rel='stylesheet' id='font-awesome-owid-css' href='https://ourworldindata.org/wp-content/themes/owid-theme/css/font-awesome.min.css?ver=4.9.1' type='text/css' media='all' />
        </head>
        <body>
            <SiteHeader/>
            <div className="intro container">
                <h1>Measuring progress towards the Sustainable Development Goals</h1>
                <p>The UN <a href="http://www.un.org/sustainabledevelopment/">sustainable development goals</a> are a set of targets for global development adopted by world leaders in September 2015. Here we present data from the OWID database tracking progress towards these goals around the world.</p>
                <p style={{ color: 'red' }}>Draft version; do not distribute</p>
            </div>
            <nav className="goalNav">
                <div className="goals">
                    {Goals.map((goal, index) => <a href={`${goal.slug}`}><img src={`./img/goals/${index + 1}.png`} alt={goal.name} /></a>)}
                    <img src="./img/goals/18.png" />
                </div>
            </nav>
        </body>
    </html>
}

const SDGPage = (props: { path: string, assets: string[] }) => {
    const goal = Goals.find(g => g.slug == props.path)

    if (goal)
        return <GoalPage assets={props.assets} goal={goal}/>
    else
        return <SiteIndex assets={props.assets}/>

}

export default (locals: any, callback: (val: null, html: string) => void) => {
    callback(null, ReactDOMServer.renderToString(<SDGPage path={locals.path} assets={Object.keys(locals.webpackStats.compilation.assets)} />))
};