import * as React from 'react'
import {absoluteSdgsUrl, GRAPHER_ROOT} from './settings'

export default function SiteFooter() {
    return <footer className="SiteFooter">
        <a href="https://goo.gl/forms/fwJmzRk68IVoPssh2">Give feedback on this project</a>
        <script src={`${GRAPHER_ROOT}/embedCharts.js`}/>
    </footer>
}
