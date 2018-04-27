import * as React from 'react'

export const SiteHeader = () => {
    return <header className="SiteHeader">
        <div className="container">
            <a className="logo" href="/">SDG Tracker</a>
            <nav>
                <a href="/about">About</a>
                <a href="https://ourworldindata.org">Our World in Data</a>
            </nav>
        </div>
    </header>
}
