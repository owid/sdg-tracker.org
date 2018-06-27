import * as React from 'react'
import {absoluteSdgsUrl, GRAPHER_ROOT} from './settings'

export default function SiteFooter() {
    return <footer className="SiteFooter bg-dark">
        <p><a href="https://goo.gl/forms/fwJmzRk68IVoPssh2">Give us feedback on the SDG Tracker</a></p>
        <p>Citation: Ritchie, Roser, Mispy, Ortiz-Ospina. "Measuring progress towards the Sustainable Development Goals." <em>SDG-Tracker.org, website</em> (2018).</p>
        <script src={`${GRAPHER_ROOT}/embedCharts.js`}/>
    </footer>
}
