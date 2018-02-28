import * as React from 'react'
import {absoluteSdgsUrl} from './settings'

export default function SiteFooter() {
    return <footer className="SiteFooter">
        <a href="https://goo.gl/forms/fwJmzRk68IVoPssh2">Give feedback on this project</a>
        <script src={absoluteSdgsUrl("../grapher/embedCharts.js")}/>
    </footer>
}
