import * as React from 'react'

export const SiteHeader = () => {
    return <header className="SiteHeader">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">SDG Tracker</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://ourworldindata.org">Our World in Data</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}