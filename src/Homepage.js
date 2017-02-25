import React, {Component} from 'react'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

import styles from './index.css'
import mispy from './mispy.png'

@observer
export default class Homepage extends Component {
	render() {
        return <div className={styles.homepage}>
            <header>
                <Link to="/"><img src={mispy} width={150}/></Link>
                <h1>Jaiden Mispy</h1>
            </header>
            <main>
                <div class={styles.writing}>
                    <h2>Writing</h2>
                    <ul>
                        <li><h3><Link to="/wander-networking">Distributed networking in a multiplayer game</Link></h3></li>
                        <li><h3><Link to="/the-mysterious-nature-of-bots">The mysterious nature of twitterbots</Link></h3></li>
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
