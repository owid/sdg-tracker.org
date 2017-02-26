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

@observer
class HexagonsMain extends Component {
    @computed get width() {
        return this.props.width
    }
    @computed get height() {
        return this.props.height
    }

    @computed get grid() {
        return new Grid(20, 20)
    }

    @computed get hexRadius() {
        return 10
    }

    @computed get hexbin() {
        return d3_hexbin().radius(this.hexRadius)
    }

    @computed get points() {
        const {width, height} = this.props
        if (!width || !height) return []

        const radius = 5
        var theta = Math.PI * (3 - Math.sqrt(5));        
        return d3.range(2000).map(i => {
            var r = radius * Math.sqrt(i), a = theta * i;
            return [
              width / 2 + r * Math.cos(a),
              height / 2 + r * Math.sin(a)
            ];
        })
    }

    @computed get hexagons() {
        return this.hexbin(this.points)
    }

    @observable rotation = 0

    componentDidMount() {
        d3.timer(() => {
//            this.rotation += 1
        })
    }

    render() {
        let {width, height, hexbin, hexagons, rotation} = this

        const maxSize = _(hexagons).map('length').max()

        return <g style={{stroke: '#fff', fill: '#f5aa44', 'stroke-width': '1px'}}>
            {/*_.map(points, (d, i) => 
                <circle cx={d[0]} cy={d[1]} r={2}/>
            )*/}
            {_.map(hexagons, (d, i) => 
                <path transform={`rotate(${rotation} ${width/2} ${height/2})`} onMouseOver={this.onMouseOver} d={`M${d.x},${d.y}${hexbin.hexagon()}`} style={{opacity: d.length/maxSize}}/>
            )}
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
