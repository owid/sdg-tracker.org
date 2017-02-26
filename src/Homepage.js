import React, {Component} from 'react'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import Link from './Link'

import styles from './index.css'
import mispy from './mispy.png'
import posts from '../posts'

@observer
export default class Homepage extends Component {
	render() {
        return <div className={styles.homepage}>
            <header>
                <Link to="/"><img class={styles.profile} src={mispy} alt="Jaiden Mispy"/></Link>
                <h1>Jaiden Mispy</h1>
            </header>
            <main>
                <div class={styles.writing}>
                    <h2>Writing</h2>
                    <ul>
                        {posts.map(post =>
                            <li><h3><Link to={post.slug}>{post.title}</Link></h3></li>
                        )}
                    </ul>
                </div>
                <div class={styles.links}>
                    <h2>Links</h2>
                    <ul>
                        <li><a href="https://twitter.com/m1sp">Twitter</a></li>
                        <li><a href="https://github.com/mispy">Github</a></li>
                        <li><a href="http://www.oxfordmartin.ox.ac.uk/people/745">Oxford</a></li>
                    </ul>
                </div>
            </main>
        </div>
	}
}
