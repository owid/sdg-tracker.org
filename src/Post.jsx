import React, {Component} from 'react'
import moment from 'moment'
import styles from './index.css'
import mispy from './mispy.png'
//import 'font-awesome-webpack'
import NoMatch from './NoMatch'
import Link from './Link'
import 'highlight.js/styles/monokai-sublime.css'
import 'font-awesome/css/font-awesome.css'
import posts from '../posts'
import Helmet from 'react-helmet'

export default class Post extends Component {    
    render() {
        const {slug} = this.props.params
        const post = posts.filter((p) => p.slug == slug)[0]

        if (!post) return <NoMatch/>

        const {title, date, body} = post
        const canonicalUrl = `https://mispy.me/${slug}`

        return <main className={styles.post}>
            <Helmet title={title} titleTemplate="%s - ~mispy"/>
            <header>
                <Link to="/"><img class={styles.profile} src={mispy} alt="Jaiden Mispy"/></Link>
            </header>
            <article>
                <time datetime={date}>{moment(date).format('DD MMMM YYYY')}</time>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: body}}/>
            </article>
            <footer>
                <section class={styles.author}>
                    <h4>Jaiden Mispy</h4>
                    <ul>
                        <li>Perth, Australia</li>
                        <li><a href="/">https://mispy.me</a></li>
                    </ul>
                </section>
                <section class={styles.share}>
                    <h4>Share this post</h4>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(canonicalUrl)}`} target="_blank"><i class="fa fa-twitter-square"></i></a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}"`} target="_blank"><i class="fa fa-facebook-square"></i></a>
                    <a href={`https://plus.google.com/share?url=${encodeURIComponent(canonicalUrl)}`} target="_blank"><i class="fa fa-google-plus-square"></i></a>
                </section>
            </footer>
        </main>
    }
}