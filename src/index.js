import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import 'd3-random'
import {interpolateOranges} from 'd3-scale-chromatic'
import {hexbin as d3_hexbin} from 'd3-hexbin'
import * as d3 from 'd3'
import Resizable from 'react-component-resizable'
import {bind} from 'decko'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import styles from './index.css'
import mispy from './mispy.png'
import moment from 'moment'
import 'font-awesome-webpack'

@observer
class Hexagons extends Component {
    @computed get hexRadius() {
        return 20
    }

    @computed get hexbin() {
        return d3_hexbin().radius(this.hexRadius)
    }

    @computed get hexagons() {
        const {width, height} = this.props
        const {hexRadius, hexbin} = this
        const columns = width/hexRadius
        const rows = height/hexRadius

        const points = []
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                points.push([i/columns * width, j/rows * height])
            }
        }

        return hexbin(points)

    }

    render() {
        let {hexbin, hexagons} = this
        return <g class="hexagons" style={{stroke: '#fff', fill: '#000', 'stroke-width': '1px'}}>
            {_.map(hexagons, (d, i) => 
                <path onMouseOver={this.onMouseOver} key={i} class="hexagon" d={`M${d.x},${d.y}${hexbin.hexagon()}`}/>
            )}
        </g>
    }
}

@observer
class SiteHeader extends Component {
    @observable width
    @observable height    

    constructor() {
        super()
        this.onResize()
    }

    @bind onResize() {
        this.width = document.body.clientWidth
        this.height = 200
    }

    render() {
        const {width, height} = this

        return <Resizable className={styles.siteHeader} onResize={this.onResize}>
            {/*<svg>
                <Hexagons x={0} y={0} width={width+10} height={height+10}/>
            </svg>*/}
        </Resizable>
    }
}

class Homepage extends Component {
	render() {
        return <div className={styles.homepage}>
            <header>
                <a href="/"><img src={mispy} width={150}/></a>
                <h1>Jaiden Mispy</h1>
            </header>
            <main>
                <div class={styles.writing}>
                    <h2>Writing</h2>
                    <ul>
                        <li><h3><a href="/wander-networking">Distributed networking in a multiplayer game</a></h3></li>
                        <li><h3><a href="/twitterbots">The mysterious nature of twitterbots</a></h3></li>
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



function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
const posts = requireAll(require.context("../posts", true, /.md$/));

class Post extends Component {    
    render() {
        const {title, date, __content} = this.props
        console.log(this.props)

        console.log(date)
        return <main className={styles.post}>
            <header>
                <a href="/"><img src={mispy} style={{width: 120, height: 120}} alt="Jaiden Mispy"/></a>
            </header>
            <article>
                <time datetime={date}>{moment(date).format('DD MMMM YYYY')}</time>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: __content}}/>
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
                    <a><i class="fa fa-twitter-square"></i></a>
                    <a><i class="fa fa-facebook-square"></i></a>
                    <a><i class="fa fa-google-plus-square"></i></a>
                </section>
            </footer>
        </main>
    }
}

ReactDOM.render(<Post {...posts[0]}/>, document.body)