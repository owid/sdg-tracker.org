import * as React from 'react'

export const SiteHeader = () => {
    return <header className="SiteHeader">
        <div className="container">
            <a className="logo" href="https://ourworldindata.org">Our World in Data</a>
            <nav>
                <a href="https://ourworldindata.org/blog">Blog</a>
                <a href="https://ourworldindata.org/about">About</a>
                <a href="https://ourworldindata.org/support">Donate</a>
            </nav>
        </div>
    </header>
}
