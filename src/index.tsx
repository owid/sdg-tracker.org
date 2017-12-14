//import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import {Helmet, HelmetData} from 'react-helmet'
import Homepage from './Homepage'

declare var require: any
const faviconImg = require('./favicon.png')
const styles = require('./index.scss')

const Main = (props: {}) => {
    return <div>
        <header>
            <div className="container">
                <h1>Measuring global progress towards the Sustainable Development Goals</h1>
                <span>Our World in Data</span>
            </div>
        </header>
        <main className="homepage container">
            <p>The UN <a href="http://www.un.org/sustainabledevelopment/">sustainable development goals</a> are a set of targets for human progress adopted by world leaders in September 2015. Here we present data from the OWID database which can be used to track progress towards these goals around the world.</p>
            <div className="goals">
                <img src="img/goals/1.png"/>
                <img src="img/goals/2.png"/>
                <img src="img/goals/3.png"/>
                <img src="img/goals/4.png"/>
                <img src="img/goals/5.png"/>
                <img src="img/goals/6.png"/>
                <img src="img/goals/7.png"/>
                <img src="img/goals/8.png"/>
                <img src="img/goals/9.png"/>
                <img src="img/goals/10.png"/>
                <img src="img/goals/11.png"/>
                <img src="img/goals/12.png"/>
                <img src="img/goals/13.png"/>
                <img src="img/goals/14.png"/>
                <img src="img/goals/15.png"/>
                <img src="img/goals/16.png"/>
                <img src="img/goals/17.png"/>
                <img src="img/goals/18.png"/>
            </div>
        </main>
    </div>
}

const NoPoverty = (props: {}) => {
    return <div>
        <div className="header goal-1">
            <div className="container">
                <img src="../img/goals/1.png"/>
                <h1>End poverty in all its forms everywhere</h1>
            </div>
        </div>
        <main>
            <section>
                <div>
                    <p>1.1: By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.90 a day</p>
                </div>
                <div>
                    <iframe src="http://l:8080/grapher/share-of-the-population-living-in-extreme-poverty?tab=map&minimal=1"/>
                </div>
            </section>
            <section>
                <div>
                    <p>1.2: By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions</p>
                </div>
                <div>
                    <iframe src="http://l:8080/grapher/share-of-population-living-in-poverty-by-national-poverty-lines?country=BGD+IND+NPL+PAK"/>
                </div>
            </section>
            <section>
                <div>
                    <p>1.4 By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance</p>
                </div>
                <div>
                    <iframe src="https://ourworldindata.org/grapher/share-of-population-with-access-to-basic-infrastructure-services?country=WLD"/>
                </div>
            </section>
        </main>
    </div>
}

class Body extends React.Component<{path: string, assets: string[]}> {
    content() {
        const {path} = this.props

        if (path == "/") {
            return <Main/>
        } else if (path == "/no-poverty") {
            return <NoPoverty/>
        }
    }

    render() {
        const {assets} = this.props
        const js = assets.filter(value => value.match(/\.js$/))

        return <body>
            <Helmet title="Jaiden Mispy"/>
            {js.map(path =>
                <script src={'/'+path}/>  
            )}
            {this.content()}
            <script src="http://localhost:8080/grapher/embedCharts.js"></script>
        </body>
    }
}

class Head extends React.Component<{path: string, assets: string[], head: HelmetData}> {
    render() {
        const {head, assets, path} = this.props
        const css = assets.filter(value => value.match(/\.css$/))

        const description = `Since 2016 I have been working with Max Roser and the Oxford Martin School on Our World In Data. This project aims to make verifiable quantitative information about issues of global importance accessible and freely available to all of humanity.`

        return <head>
            {head.title.toComponent()}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={description}/>
            {/*<meta name="twitter:title" content={head.title.toString()}/>
            <meta name="twitter:url" content={"https://mispy.me" + path}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={"https://mispy.me/" + sunflowerImg}/>
            <meta name="twitter:card" content="summary_large_image"/>*/}

            {/*<meta property="og:locale" content="en_US"/>
            <meta property="og:site_name" content="Jaiden Mispy"/>
            <meta property="og:title" content="Jaiden Mispy"/>
            <meta property="og:url" content={"https://mispy.me" + path}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={"https://mispy.me/" + sunflowerImg}/>*/}
            {head.meta.toComponent()}
            {css.map(cssPath =>
                <link rel="stylesheet" type="text/css" href={'/'+cssPath}/>  
            )}       
            <link rel="icon" href={faviconImg}/>         
            {head.link.toComponent()}
        </head>
    }
}

export default (locals: any, callback: (val: null, html: string) => void) => {
    const assets = Object.keys(locals.webpackStats.compilation.assets)
    const bodyStr = ReactDOMServer.renderToString(<Body path={locals.path} assets={assets}/>)
    const head = Helmet.renderStatic()
    const headStr = ReactDOMServer.renderToString(<Head path={locals.path} head={head} assets={assets}/>)

    callback(null, "<html>"+headStr+bodyStr+"</html>")
};