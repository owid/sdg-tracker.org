import React, {Component} from 'react'
import {render} from 'react-dom'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import Link from './Link'
import moment from 'moment'
import Sunflower from './Sunflower'

import styles from './Homepage.css'
import mispy from './mispy.png'
//import posts from '../posts'

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
                        {/*posts.map(post =>
                            <li>
                                <h3><Link to={post.slug}>{post.title}</Link></h3>
                                <time datetime={post.date}>{moment(post.date).format('DD MMMM YYYY')}</time>
                            </li>
                        )*/}
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
    render(<Homepage isClient={true}/>, document.body)
}

@observer
export default class Homepage extends Component {
	render() {
        const {isClient} = this.props

        return <main class={styles.homepage}>
            <section class={styles.cover}>
                {isClient && <Sunflower/>}
                <h1>Jaiden Mispy</h1>
                <hr/>
                <p>Data Visualization Developer</p>

                <i class="fa fa-angle-down"/>
            </section>
            <section class={styles.currentProject}>
                <h2>Current Project</h2>
                <hr/>
                <div class="project">
                    <a href="https://ourworldindata.org" target="_blank"><img src="https://ourworldindata.org/wp-content/uploads/2016/06/OurWorldInData.png"/></a>
                    <p>Since 2016 I have been working with <a href="https://maxroser.com">Max Roser</a> and the <a href="http://www.oxfordmartin.ox.ac.uk/">Oxford Martin School</a> on <a href="https://ourworldindata.org">Our World In Data</a>. This project aims to make verifiable quantitative information about issues of global importance accessible and freely available to all of humanity.</p>
                </div>
            </section>
            <section class={styles.contact}>
                <h2>Contact</h2>
                <hr/>
                <form action="https://formspree.io/jaiden@mispy.me" method="POST">
                    <input type="text" name="name" placeholder="Name" required/>
                    <input type="email" name="_replyto" placeholder="Email Address" required/>
                    <textarea name="message" rows={5} placeholder="Message" required/>
                    <input type="submit" value="Send"/>
                </form>
            </section>
            <footer>
                <a href="mailto:jaiden@mispy.me">jaiden@mispy.me</a>
                <div class={styles.socialLinks}>
                    <a href="https://twitter.com/m1sp" target="_blank"><i class="fa fa-twitter"/></a>
                    <a href="https://facebook.com/misprime" target="_blank"><i class="fa fa-facebook"/></a>
                    <a href="https://github.com/mispy" target="_blank"><i class="fa fa-github"/></a>
                </div>            
            </footer>
            <script async dangerouslySetInnerHTML={{__html: "window.homepageStart()"}}></script>
        </main>
	}
}
