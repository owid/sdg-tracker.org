import React, {Component} from 'react'
import {render} from 'react-dom'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import Link from './Link'
import moment from 'moment'
import Sunflower from './Sunflower'

import styles from './Homepage.css'
import mispy from './mispy.png'
import posts from '../posts'

class HomepageSummary extends Component {
    render() {
        return <div class={styles.homepageSummary}>
            <header>
                <Link to="/"><img class={styles.profile} src={mispy} alt="Jaiden Mispy"/></Link>
                <h1>Jaiden Mispy</h1>
            </header>
            <main>
                <div class={styles.writing}>
                    <h2>Writing</h2>
                    <ul>
                        {posts.map(post =>
                            <li>
                                <h3><Link to={post.slug}>{post.title}</Link></h3>
                                <time datetime={post.date}>{moment(post.date).format('DD MMMM YYYY')}</time>
                            </li>
                        )}
                    </ul>
                </div>
                {/*<div class={styles.links}>
                    <h2>Links</h2>
                    <ul>
                        <li><a href="https://twitter.com/m1sp">Twitter</a></li>
                        <li><a href="https://github.com/mispy">Github</a></li>
                        <li><a href="http://www.oxfordmartin.ox.ac.uk/people/745">Oxford</a></li>
                    </ul>
                </div>*/}
            </main>        
        </div>
    }
}

window.homepageStart = function() {
    render(<Sunflower/>, document.getElementsByClassName("sunflowerContainer")[0])
}

@observer
export default class Homepage extends Component {
	render() {
        return <div className={styles.homepage}>
            <div class="sunflowerContainer"/>
            <HomepageSummary/>
            <script async dangerouslySetInnerHTML={{__html: "window.homepageStart()"}}></script>
        </div>
	}
}
