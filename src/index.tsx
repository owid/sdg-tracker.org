import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as Markdown from 'react-markdown'
import { Goals, Goal } from './Goals'

declare var require: any
const styles = require('./index.scss')

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
    
    return <html>
        <head>
            <title>Goal {goalNum}: {goal.title} - Our World in Data</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Measuring progress towards the Sustainable Development Goals"/>
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
            <script src="/grapher/embedCharts.js"/>
        </body>
    </html>
}


const SiteIndex = (props: { assets: string[] }) => {
    const title = "Measuring progress towards the Sustainable Development Goals"
    const description = "The UN sustainable development goals are a set of targets for human progress adopted by world leaders in September 2015. Here we present data from the OWID database showing progress towards these goals around the world."
    const css = props.assets.filter(value => value.match(/\.css$/))

    return <html>
        <head>
            <title>{title} - Our World in Data</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            {css.map(cssPath =>
                <link rel="stylesheet" type="text/css" href={cssPath} />
            )}
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