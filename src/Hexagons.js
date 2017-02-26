import _ from 'lodash'
import * as d3 from 'd3'
import 'd3-random'
import {interpolateOranges} from 'd3-scale-chromatic'
import {hexbin as d3_hexbin} from 'd3-hexbin'
import Resizable from 'react-component-resizable'
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {computed, observable, action} from 'mobx'
import {bind} from 'decko'
import styles from './index.css'

function dist(a, b) {
    return (b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y)
}

@observer
class HexagonsMain extends Component {
    @computed get width() {
        return this.props.width
    }
    @computed get height() {
        return this.props.height
    }

    @computed get hexRadius() {
        return 6
    }

    @computed get hexbin() {
        return d3_hexbin().radius(this.hexRadius)
    }

    @computed get points() {
        const {width, height} = this.props
        if (!width || !height) return []

        const {rotation} = this

        const radius = 5
        var theta = Math.PI * (3 - Math.sqrt(5));
        return d3.range(1000).map(i => {
            var r = radius * Math.sqrt(i), a = theta * i * rotation;
            return {
              x: width / 2 + r * Math.cos(a),
              y: height / 2 + r * Math.sin(a)
            };
        })
    }

    @computed get hexagons() {
        const {hexbin, points} = this
        return hexbin(points.map(point => [point.x, point.y]))
    }

    @observable rotation = 1

    componentDidMount() {
        d3.timer(() => {
            this.rotation += 0.00002
        })
    }

    render() {
        let {width, height, hexbin, hexagons, rotation, points} = this

        const maxSize = 2
        const colorScale = d3.scaleSequential(interpolateOranges).domain([-20000, Math.pow(width/2, 2)])
        const center = { x: width/2, y: height/2 }

        return <g style={{stroke: '#f5aa44', fill: '#f5aa44', 'stroke-width': '1px'}}>
            {_.map(points, (d, i) => 
                <circle cx={d.x} cy={d.y} r={3}/>
            )}
            {/*_.map(hexagons, (d, i) => {
                const distFromCenter = dist(d, center)
                return <path onMouseOver={this.onMouseOver} d={`M${d.x},${d.y}${hexbin.hexagon()}`} style={{fill: colorScale(distFromCenter), opacity: d.length/maxSize}}/>
            }
            )*/}
        </g>
    }
}

@observer
export default class Hexagons extends Component {
    @observable width
    @observable height    

    constructor() {
        super()
    }

    componentDidMount() {
        this.onResize()
    }

    @action.bound onResize() {
        this.width = this.base.clientWidth
        this.height = this.base.clientHeight
    }

    render() {
        const {width, height} = this

        return <Resizable onResize={this.onResize}>
            <svg>
                <HexagonsMain x={0} y={0} width={width} height={height}/>
            </svg>
        </Resizable>
    }
}
