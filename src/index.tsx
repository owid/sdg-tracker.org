//import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import {Helmet, HelmetData} from 'react-helmet'
import Homepage from './Homepage'

declare var require: any
const faviconImg = require('./favicon.png')
const styles = require('./index.scss')

const Main = (props: {}) => {
    const sdgRoot = "/"
    const slug = "no-poverty"

    return <div>
        <div className="title container">
            <h1>Measuring progress towards the Sustainable Development Goals</h1>
            <p>The UN <a href="http://www.un.org/sustainabledevelopment/">sustainable development goals</a> are a set of targets for human progress adopted by world leaders in September 2015. Here we present data from the OWID database showing progress towards these goals around the world.</p>
        </div>
        <nav className="goalNav" id="no-poverty">
            <div className="goals">
                <a href="#no-poverty"><img src="img/goals/1.png"/></a>
                <a href="#zero-hunger"><img src="img/goals/2.png"/></a>
                <a href="#good-health"><img src="img/goals/3.png"/></a>
                <a href="#quality-education"><img src="img/goals/4.png"/></a>
                <a href="#gender-equality"><img src="img/goals/5.png"/></a>
                <a href="#clean-water"><img src="img/goals/6.png"/></a>
                <a href="#clean-energy"><img src="img/goals/7.png"/></a>
                <a href="#decent-work"><img src="img/goals/8.png"/></a>
                <a href="#industry-innovation"><img src="img/goals/9.png"/></a>
                <a href="#reduced-inequalities"><img src="img/goals/10.png"/></a>
                <a href="#sustainable-cities"><img src="img/goals/11.png"/></a>
                <a href="#responsible-consumption"><img src="img/goals/12.png"/></a>
                <a href="#climate-action"><img src="img/goals/13.png"/></a>
                <a href="#life-below-water"><img src="img/goals/14.png"/></a>
                <a href="#life-on-land"><img src="img/goals/15.png"/></a>
                <a href="#peace-justice-institutions"><img src="img/goals/16.png"/></a>
                <a href="#partnerships"><img src="img/goals/17.png"/></a>
                <img src="img/goals/18.png"/>
            </div>
        </nav>
        <article>
            <div className="goalTitle" id="no-poverty">
                <img src="../img/goals/1.png"/>
                <div>
                    <h2>Goal 1: End poverty in all its forms everywhere</h2>
                </div>
            </div>
            <section>
                <div>
                    <h3>Goal 1.1</h3>
                    <p>By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.90 a day</p>
                </div>
                <figure data-grapher-src="/grapher/share-of-the-population-living-in-extreme-poverty?tab=map&minimal=1"/>
            </section>
            <section>
                <div>
                    <h3>Goal 1.2</h3>
                    <p>By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions</p>
                </div>
                <figure data-grapher-src="/grapher/share-of-population-living-in-poverty-by-national-poverty-lines?country=BGD+IND+NPL+PAK"/>
            </section>
            <section>
                <div>
                    <h3>Goal 1.4</h3>
                    <p>By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance</p>
                </div>
                <figure data-grapher-src="/grapher/share-of-population-with-access-to-basic-infrastructure-services?country=WLD"/>
            </section>
            <div className="goalTitle" id="zero-hunger">
                <img src="../img/goals/2.png"/>
                <div>
                    <h2>Goal 2: End hunger, achieve food security and improved nutrition and promote sustainable agriculture</h2>
                </div>
            </div>
            <section>
                <div>
                    <h3>Goal 2.1</h3>
                    <p>By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round</p>
                </div>
                <figure data-grapher-src="/grapher/prevalence-of-undernourishment?tab=chart&country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"/>
            </section>
            <div className="goalTitle" id="good-health">
                <img src="../img/goals/3.png"/>
                <div>
                    <h2>Goal 3: Ensure healthy lives and promote well-being for all at all ages</h2>
                </div>
            </div>
            <section>
                <div>
                    <h3>Goal 3.1</h3>
                    <p>By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
                </div>
                <figure data-grapher-src="/grapher/maternal-mortality?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"/>
            </section>

        </article>
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
            <header>
                <div className="container">
                    <a className="logo" href="/">Our World in Data</a>
                    <nav>
                        <a href="/blog">Blog</a>
                        <a href="/about">About</a>
                        <a href="/donate">Donate</a>
                    </nav>
                </div>
            </header>
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
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic|PT+Sans+Narrow:400,700|PT+Serif:400,700,400italic&amp;subset=latin,latin-ext" />
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