import _ from 'lodash'
import * as d3 from 'd3'
import 'd3-random'
import * as d3_chromatic from 'd3-scale-chromatic'
import {hexbin as d3_hexbin} from 'd3-hexbin'
import Resizable from 'react-component-resizable'
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {computed, observable, action} from 'mobx'
import {bind} from 'decko'
import styles from './index.css'

function getDistance(a, b) {
    return Math.sqrt((b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y))
}

class Ripple {
    @observable radius

    constructor({origin, colorScale, radius}) {
        this.origin = origin
        this.colorScale = colorScale
        this.radius = radius
    }
}

@observer
class HexagonsMain extends Component {
    @computed get width() {
        return this.props.width
    }
    @computed get height() {
        return this.props.height
    }

    @computed get spacing() {
        return 10        
    }

    @computed get theta() {
        return Math.PI * (3 - Math.sqrt(5))
    }

    constructor() {
        super()
        this.points = d3.range(1000).map(i => {return { x: 0, y: 0 }})
    }

    updatePoints() {
        const {width, height} = this.props
        if (!width || !height) return

        const {points, rotation, spacing, theta} = this

        for (let i = 0; i < points.length; i++) {
            const radius = spacing * Math.sqrt(i)
            const angle = theta * i * rotation
            let x = width / 2 + radius * Math.cos(angle)
            let y = height / 2 + radius * Math.sin(angle)

            points[i].x = x
            points[i].y = y
        }
    }

    colorScales = _(d3_chromatic).keys().filter(k => k.indexOf('interpolate') !== -1).map(k => d3_chromatic[k]).value()
    colorScalesIndex = 0
    @observable rotation = +(new Date())/1000000000//0.1952444
    @observable isPlaying = true
    @observable bbox = null
    @observable mouse = { x: 0, y: 0 }
    @observable ripples = []

    componentDidMount() {
        this.ctx = this.base.getContext('2d')


//        this.updatePoints()
//        this.circles = d3.select(this.base).selectAll('circle')
        d3.timer(this.frame)
    }


    @action.bound frame() {
        this.rotation += 0.000001//0.000001///Math.pow(dist(this.mouse, { x: this.width/2, y: this.height/2 }), 2)

        this.updatePoints()

        const {points, ripples} = this

        for (let ripple of ripples) {
            if (ripple.radius < this.width*2)
                ripple.radius += 10
        }

        const {ctx} = this
        window.ctx = ctx


        ctx.clearRect(0, 0, this.base.width, this.base.height);

        this.points.forEach(d => {
            ctx.fillStyle = '#f5aa44'
            for (let ripple of ripples.reverse()) {
                const dist = getDistance(d, ripple.origin)
                if (dist < ripple.radius) {
                    ctx.fillStyle = ripple.colorScale(dist)
                    break
                }
            }

            ctx.beginPath();
            ctx.arc(d.x, d.y, 5, 0, 2 * Math.PI, false);
            ctx.fill();
        })
    }

    @action.bound onMouseDown(e) {
        this.mouseDown = true
        this.onMouseMove(e)
    }

    @action.bound onMouseUp() {
        this.mouseDown = false
    }

    @action.bound onMouseMove(e) {
        e.preventDefault()

        const newMouse = { x: e.offsetX, y: e.offsetY }
        this.mouse = newMouse

        if (this.mouseDown && (this.ripples.length == 0 || _.last(this.ripples).radius > 10))
            this.ripple()
    }

    @action.bound ripple() {
        this.colorScalesIndex = this.colorScalesIndex >= this.colorScales.length-1 ? 0 : this.colorScalesIndex+1     

        const {colorScales, colorScalesIndex, mouse, points} = this

        const closestPointToMouse = _.orderBy(points, point => getDistance(point, mouse))[0]

        if (this.ripples.length >= 50)
            this.ripples = this.ripples.slice(1)

        this.ripples.push(new Ripple({
            origin: closestPointToMouse,
            colorScale: d3.scaleSequential(colorScales[colorScalesIndex]).domain([0, this.width/2]),
            radius: 0
        }))        
    }

    render() {
        console.log("render")
        let {width, height, points, bbox} = this

        return <canvas onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseLeave={this.onMouseUp} onMouseMove={this.onMouseMove} width={width} height={height} style={{cursor: 'pointer'}}/>

        /*<g onClick={this.onClick} onMouseMove={this.onMouseMove} style={{fill: '#f5aa44', 'stroke-width': '1px', cursor: 'pointer', 'opacity': 0.5}}>
            {bbox && <rect x={0} y={0} width={width} height={height} fill="rgba(0,0,0,0)" stroke="none"/>}
            {_.map(points, (d,i) => 
                <circle cx={0} cy={0} r={5}/>
            )}
        </g>*/
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
            <HexagonsMain x={0} y={0} width={width} height={height}/>
        </Resizable>
    }
}
