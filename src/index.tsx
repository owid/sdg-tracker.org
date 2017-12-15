import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Helmet, HelmetData } from 'react-helmet'
import { Goals, Goal } from './Goals'
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
            <p style={{ color: 'red' }}>Draft version; do not distribute</p>
        </div>
        <nav className="goalNav" id="no-poverty">
            <div className="goals">
                {Goals.map((goal, index) => <a href={`#${goal.slug}`}><img src={`img/goals/${index + 1}.png`} alt={goal.name} /></a>)}
                <img src="img/goals/18.png" />
            </div>
        </nav>
        <article>
            <div className="goalTitle" id="no-poverty">
                <img src="img/goals/1.png" />
                <div>
                    <h2>Goal 1: End poverty in all its forms everywhere</h2>
                    <p>Some introductory text could go here. Extreme poverty rates have been cut by more than half since 1990. While this is a remarkable achievement, one in five people in developing regions still live on less than $1.90 a day, and there are millions more who make little more than this daily amount, plus many people risk slipping back into poverty.</p>
                </div>
            </div>
            <section>
                <div>
                    <h3>Target 1.1</h3>
                    <p><em>By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.90 a day</em></p>
                    <p>Some explanatory text could go here, explaining how the figure relates to the target</p>
                </div>
                <figure data-grapher-src="/grapher/share-of-the-population-living-in-extreme-poverty?tab=map&minimal=1" />
            </section>
            <section>
                <div>
                    <h3>Target 1.2</h3>
                    <p>By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions</p>
                </div>
                <figure data-grapher-src="/grapher/share-of-population-living-in-poverty-by-national-poverty-lines?country=BGD+IND+NPL+PAK" />
            </section>
            <section>
                <div>
                    <h3>Target 1.4</h3>
                    <p>By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance</p>
                </div>
                <figure data-grapher-src="/grapher/share-of-population-with-access-to-basic-infrastructure-services?country=WLD" />
            </section>
            <div className="goalTitle" id="zero-hunger">
                <img src="img/goals/2.png" />
                <div>
                    <h2>Goal 2: End hunger, achieve food security and improved nutrition and promote sustainable agriculture</h2>
                </div>
            </div>
            <section>
                <div>
                    <h3>Target 2.1</h3>
                    <p>By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round</p>
                </div>
                <figure data-grapher-src="/grapher/prevalence-of-undernourishment?tab=chart&country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL" />
            </section>
            <div className="goalTitle" id="good-health">
                <img src="img/goals/3.png" />
                <div>
                    <h2>Goal 3: Ensure healthy lives and promote well-being for all at all ages</h2>
                </div>
            </div>
            <section>
                <div>
                    <h3>Target 3.1</h3>
                    <p>By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
                </div>
                <figure data-grapher-src="/grapher/maternal-mortality?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL" />
            </section>
            <section>
                <div>
                    <h3>Target 3.2</h3>
                    <p>By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under‑5 mortality to at least as low as 25 per 1,000 live births</p>
                </div>
                <figure data-grapher-src="/grapher/child-mortality-rate-per-1000-live-births" />
            </section>
            <section className="multiFigure">
                <div>
                    <h3>Target 3.3</h3>
                    <p>By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
                    <p>The visualisations below present global-level data on communicable diseases including AIDS, tuberculosis and malaria. Broader and long-term coverage is available on some of these health issues at our entries on <a href="/hiv-aids/">HIV/AIDS</a> and <a href="/malaria/">Malaria</a>.</p>
                </div>
                <figure data-grapher-src="/grapher/number-of-new-hiv-infections-per-1000-uninfected-population-aged-15-49?country=BGD+IND+NPL+PAK+ZAF+OWID_WRL" />
                <figure data-grapher-src="/grapher/tuberculosis-incidence-per-100000-people?tab=map" />
                <figure data-grapher-src="/grapher/malaria-incidence-per-1000-population" />
                <figure data-grapher-src="/grapher/global-malaria-deaths-by-world-region" />
            </section>
            <section className="multiFigure">
                <div>
                    <h3>Target 3.4</h3>
                    <p>By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being</p>
                </div>
                <div className="row">
                    <figure data-grapher-src="/grapher/mortality-from-non-communicable-diseases" />
                    <figure data-grapher-src="/grapher/suicide-mortality-rate" />
                </div>
            </section>
            <section>
                <div>
                    <h3>Target 3.6</h3>
                    <p>By 2020, halve the number of global deaths and injuries from road traffic accidents</p>
                </div>
                <figure data-grapher-src="/grapher/mortality-road-injuries?tab=chart" />
            </section>
            <section className="multiFigure">
                <div>
                    <h3>Target 3.7</h3>
                    <p>By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes</p>
                </div>
                <div className="row">
                    <figure data-grapher-src="/grapher/demand-for-family-planning" />
                    <figure data-grapher-src="/grapher/adolescent-birth-rate?tab=chart" />
                </div>
            </section>
            <section className="multiFigure">
                <div>
                    <h3>Target 3.9</h3>
                    <p>By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination</p>
                </div>
                <div className="row">
                    <figure data-grapher-src="/grapher/death-rate-by-source-from-air-pollution" />
                    <figure data-grapher-src="/grapher/death-rate-from-ambient-particulate-air-pollution-per-100000?tab=map&amp;year=2015&amp;country=BGD+IND+NPL+PAK" />
                </div>
            </section>
            <section className="multiFigure">
                <div>
                    <h3>Target 3.a</h3>
                    <p>Strengthen the implementation of the World Health Organization Framework Convention on Tobacco Control</p>
                    <p>The charts below provide a global overview of the prevalence of smoking in people aged 15 years and older, by gender. We cover the topic of smoking — including attributable deaths and secondhand smoke — in our entry available <a href="https://ourworldindata.org/smoking/">here</a>.</p>
                </div>
                <div className="row">
                    <figure data-grapher-src="/grapher/share-of-men-who-are-smoking?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL" />
                    <figure data-grapher-src="/grapher/share-of-women-who-are-smoking" />
                </div>
            </section>
            <section>
                <div>
                    <h3>Target 3.b</h3>
                    <p>Support the research and development of vaccines and medicines for the communicable and non‑communicable diseases that primarily affect developing countries, provide access to affordable essential medicines and vaccines</p>
                </div>
                <figure data-grapher-src="/grapher/immunization-dpt-children" />
            </section>

            <div className="goalTitle" id="quality-education">
                <img src="img/goals/4.png" />
                <div>
                    <h2>Goal 4: Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</h2>
                </div>
            </div>
            <section className="multiFigure">
                <div>
                    <h3>Target 4.1</h3>
                    <p>By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes</p>
                </div>
                <figure data-grapher-src="/grapher/existence-of-nationally-representative-learning-assessment-at-the-end-of-primary-education" />
                <figure data-grapher-src="/grapher/students-in-grade-2-who-cant-read-a-single-word-ca-2015" />
                <figure data-grapher-src="/grapher/existence-of-nationally-representative-learning-assessment-at-the-end-of-primary-education" />
                <figure data-grapher-src="/grapher/share-of-students-at-end-of-primary-education-achieving-minimum-maths-proficiency-2010-2015" />
            </section>
            <section className="multiFigure">
                <div>
                    <h3>Target 4.6</h3>
                    <p>By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy</p>
                </div>
                <figure data-grapher-src="/grapher/youth-literacy-males" />
                <figure data-grapher-src="/grapher/youth-literacy-female" />
                <figure data-grapher-src="/grapher/adult-literacy-male" />
                <figure data-grapher-src="/grapher/adult-literacy-female" />
            </section>

            <div className="goalTitle" id="gender-equality">
                <img src="img/goals/5.png" />
                <div>
                    <h2>Goal 5: Achieve gender equality and empower all women and girls</h2>
                </div>
            </div>
            <section className="multiFigure">
                <div>
                    <h3>Target 5.1</h3>
                    <p>End all forms of discrimination against all women and girls everywhere</p>
                    <p>The following visualisations present global-level data on the legal basis of nondiscrimation and gender equality across various measures, including hiring, equal pay, marital rape and property rights, among others. Also shown below is the long-term global progression of universal suffrage — an important indicator of gender equality.</p>
                </div>
                <figure data-grapher-src="/grapher/universal-suffrage-granted-to-women" />
                <figure data-grapher-src="/grapher/law-mandate-nondiscrimination-hiring" />
                <figure data-grapher-src="/grapher/law-mandate-equal-pay" />
                <figure data-grapher-src="/grapher/does-legislation-explicitly-criminalise-marital-rape" />
                <figure data-grapher-src="/grapher/gender-rights-to-property" />
                <figure data-grapher-src="/grapher/women-required-to-obey-husband" />
                <figure data-grapher-src="/does-law-mandate-paid-or-unpaid-maternity-leave" />
                <figure data-grapher-src="/grapher/nondiscrimination-clause-gender" />
                <figure data-grapher-src="/grapher/testimony-weight-gender" />
            </section>
            <section className="multiFigure">
                <h3>Target 5.2</h3>
                <p>Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation</p>
                <p>The visualisation on the left presents data on the share of ever-partnered women and girls aged 15 or older who reported being victim to some form of violence by a current or former partner within the previous year. As shown as a time-series [accessed by clicking the "Chart" tab or any country on the map], data coverage is highly incomplete and infrequent when viewed over time. Recent data for many countries is not currently available — for example, the latest data reference for India dates back to 2006.</p>
                <p>For a select number of countries, data is available on the percentage of young girls (ages 15 to 19 years old) who report having been victims of sexual abuse. This data is presented in the chart to the right; as shown, such data is also infrequently collected with a wide range of reference years</p>
                <figure data-grapher-src="/grapher/women-subjected-to-violence-last-year" />
                <figure data-grapher-src="/percentage-of-girls-15-to-19-who-report-having-been-victims-of-sexual-abuse" />
            </section>
            <section className="multiFigure">
                <h3>Target 5.3</h3>
                <p>Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation</p>
                <p>The map below presents coverage of the percentage of women (aged between 20 and 24) who report being married or in a union before the age of 18. This metric for some countries is typically more consistently measured/estimated providing a useful time-series trend. However for some countries, measurement is still a key issue; data for India and Brazil, for example, has not been recorded within the last decade.</p>
                <figure data-grapher-src="/grapher/women-married-by-age-18" />
                <figure data-grapher-src="/grapher/female-genital-mutilation" />
            </section>
            <section className="multiFigure">
                <h3>Target 5.5</h3>
                <p>Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life</p>
                <p>The series of charts below present data on political participation and management positions held by women at various levels. Data coverage on political participation is typically complete and up-to-date for nearly all countries, however, data on female management is less well-covered.</p>
                <figure data-grapher-src="/grapher/countries-that-have-ever-elected-a-woman-to-parliament" />
                <figure data-grapher-src="/grapher/seats-held-by-women-in-national-parliaments?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL" />
                <figure data-grapher-src="/grapher/proportion-of-women-in-ministerial-positions" />
                <figure data-grapher-src="/grapher/share-firms-top-female-manager?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL" />
                <figure data-grapher-src="/grapher/female-employment-in-management" />
            </section>
            <section>
                <div>
                    <h3>Target 5.6</h3>
                    <p>Ensure universal access to sexual and reproductive health and reproductive rights</p>
                    <p>This chart shows the percentage of interviewed, married women aged 15-49 who report making their own informed decisions on healthcare-related issues. As is the case with many gender-related metrics, data for many countries is infrequently reported and often insufficient to develop trends over time.</p>
                </div>
                <figure data-grapher-src="/grapher/proportion-of-women-who-make-their-own-informed-health-care-decisions" />
            </section>
        </article>
    </div>
}

const SDGGoal = (props: { goal: Goal }) => {
    const number = Goals.indexOf(props.goal) + 1

    return <section className="goal">
        <header id={props.goal.slug}>
            <img src={`img/goals/${number}.png`} />
            <div>
                <h2>Goal {number}: {props.goal.title}</h2>
            </div>
        </header>
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
                    <SDGGoal goal={goal} />
                )}
            </article>
            <script src="/grapher/embedCharts.js"></script>
        </body>
    </html>
}

export default (locals: any, callback: (val: null, html: string) => void) => {
    callback(null, ReactDOMServer.renderToString(<SDGPage path={locals.path} assets={Object.keys(locals.webpackStats.compilation.assets)} />))
};