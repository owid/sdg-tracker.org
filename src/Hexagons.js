import _ from 'lodash'
import * as d3 from 'd3'
import 'd3-random'
import {interpolateOranges} from 'd3-scale-chromatic'
import {hexbin as d3_hexbin} from 'd3-hexbin'
import Resizable from 'react-component-resizable'
import React, {Component} from 'react'

@observer
export default class Hexagons extends Component {
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
