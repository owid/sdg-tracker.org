import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Helmet, HelmetData } from 'react-helmet'
import { Goals, Goal } from './Goals'
import Homepage from './Homepage'

declare var require: any
const faviconImg = require('./favicon.png')
const styles = require('./index.scss')

const GoalSection = (props: { goal: Goal }) => {
    const goalNum = Goals.indexOf(props.goal) + 1

    return <section className="goal">
        <header id={props.goal.slug}>
            <img src={`img/goals/${goalNum}.png`} />
            <div>
                <h2>Goal {goalNum}: {props.goal.title}</h2>
            </div>
        </header>
        {props.goal.targets.map((target, index) => 
            target.figures !== undefined && <section className={"target" + (target.figures.length > 1 ? " multiFigure" : "")}>
                <div>
                    <h3>Target {goalNum}.{index+1}</h3>
                    <p>{target.title}</p>
                    {target.figureDesc && <p>{target.figureDesc}</p>}
                </div>
                <div>
                    {target.figures.map(path => 
                        <figure data-grapher-src={`/grapher/${path}`}/>
                    )}
                </div>
            </section>
        )}
    </section>
}

const SDGPage = (props: { path: string, assets: string[] }) => {
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
            <header>
                <div className="container">
                    <a className="logo" href="/">Our World in Data</a>
                    <nav>
                        <a href="/blog">Blog</a>
                        <a href="/about">About</a>
                        <a href="/support">Donate</a>
                    </nav>
                </div>
            </header>
            <article>
                <div className="title container">
                    <h1>{title}</h1>
                    <p>The UN <a href="http://www.un.org/sustainabledevelopment/">sustainable development goals</a> are a set of targets for human progress adopted by world leaders in September 2015. Here we present data from the OWID database showing progress towards these goals around the world.</p>
                    <p style={{ color: 'red' }}>Draft version; do not distribute</p>
                </div>
                <nav className="goalNav">
                    <div className="goals">
                        {Goals.map((goal, index) => <a href={`#${goal.slug}`}><img src={`img/goals/${index + 1}.png`} alt={goal.name} /></a>)}
                        <img src="img/goals/18.png" />
                    </div>
                </nav>
                {Goals.map(goal =>
                    <GoalSection goal={goal} />
                )}
            </article>
            <script src="/grapher/embedCharts.js"></script>
        </body>
    </html>
}

export default (locals: any, callback: (val: null, html: string) => void) => {
    callback(null, ReactDOMServer.renderToString(<SDGPage path={locals.path} assets={Object.keys(locals.webpackStats.compilation.assets)} />))
};