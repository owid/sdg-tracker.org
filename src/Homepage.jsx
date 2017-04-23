import React, {Component, cloneElement} from 'react'
import {render} from 'react-dom'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import Link from './Link'
import moment from 'moment'
import Sunflower from './Sunflower'

import styles from './Homepage.css'
import mispyImg from './mispy.png'
import sunflowerImg from './sunflower.png'
import * as d3 from 'd3'
import * as d3_chromatic from 'd3-scale-chromatic'

window.homepageStart = function() {
    const el = render(<Forest width={window.innerWidth} height={window.innerHeight}/>, document.body)

    window.onresize = function() {
        render(<Forest width={window.innerWidth} height={window.innerHeight}/>, document.body, el)
    }
}

class Grid {
    @observable width
    @observable height

    @computed get centerX() { return Math.floor(this.width/2) }
    @computed get centerY() { return Math.floor(this.height/2) }

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    distFromCenter(i, j) {
        return Math.sqrt((i-this.centerX)**2 + (j-this.centerY)**2)
    }

    map(callback) {
        const results = []
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                results.push(callback(i, j))
            }
        }
        return results
    }
}

@observer
class Forest extends Component {
    @computed get width() { return this.props.width }
    @computed get height() { return this.props.height }

    @computed get grid() {
        const size = 51
        return new Grid(size, 2*Math.floor(size * (this.height/this.width) / 2)+1)  
    }

    @observable offset = 0.1

    @action.bound frame() {
        this.offset += 0.004
        this.draw()
        requestAnimationFrame(this.frame)        
    }

    start(canvas) {
        const first = !this.ctx
        this.ctx = canvas.getContext('2d')
        if (first)
            requestAnimationFrame(this.frame)
    }

    draw() {
        const {grid, offset, ctx} = this
        const tileWidth = this.props.width/grid.width
        const tileHeight = this.props.height/grid.height
        const schemes = ["Spectral"]//["Greens", "Greys", "Oranges", "Purples", "Reds", "BuGn", "BuPu", "GnBu", "OrRd", "PuBuGn", "PuBu", "PuRd", "RdPu", "YlGnBu", "YlGn", "YlOrBr", "YlOrRd"]
        const scales = schemes.map(k => d3_chromatic["interpolate"+k])//Object.keys(d3_chromatic).filter(k => k.startsWith("interpolate")).map(k => d3_chromatic[k])

        grid.map((i, j) => {
            const distFromCenter = grid.distFromCenter(i, j)
            
            let v = (1-distFromCenter/grid.distFromCenter(0, 0) + this.offset)
            const index = Math.floor(v/2 % scales.length)
            v = v % 2 < 1 ? v%1 : 1 - v%1

            const color = scales[index](v)

            ctx.fillStyle = color
            ctx.fillRect(tileWidth*i, tileHeight*j, tileWidth, tileHeight)
        })        
    }

    render() {
        return <canvas width={this.props.width} height={this.props.height} ref={e => this.start(e)}/>
    }

}

@observer
export default class Homepage extends Component {
	render() {
        return <script async dangerouslySetInnerHTML={{__html: "window.homepageStart()"}}></script>
	}
}
