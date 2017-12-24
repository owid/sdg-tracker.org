import * as React from 'react'

export const SiteHeader = () => {
    return <header>
        <div className="container">
            <a className="logo" href="/">Our World in Data</a>
            <nav>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/support">Donate</a>
            </nav>
        </div>
    </header>
}
