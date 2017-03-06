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
import styles from './Homepage.css'

function getDistance(a, b) {
    return Math.sqrt((b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y))
}

class Ripple {
    @observable radius

    constructor({origin, colorScale, radius, priority}) {
        this.origin = origin
        this.colorScale = colorScale
        this.radius = radius
        this.priority = priority
    }
}

@observer
class SunflowerMain extends Component {
    colorScales = _(d3_chromatic).keys().filter(k => k.indexOf('interpolate') !== -1).map(k => d3_chromatic[k]).value()
    colorScalesIndex = 0
    @observable rotation = +(new Date())/1000000000//0.1952444
    @observable isPlaying = true
    @observable bbox = null
    @observable mouse = { x: 0, y: 0 }
    @observable ripples = []
    @observable ripplePriority = 0

    @computed get size() {
        return this.props.size
    }

    @computed get theta() {
        return Math.PI * (3 - Math.sqrt(5))
    }

    constructor() {
        super()
        this.points = d3.range(1000).map(i => {return { x: 0, y: 0 }})
        this.offscreenCanvas = document.createElement('canvas')
        this.ctx = this.offscreenCanvas.getContext('2d')
    }

    updatePoints() {
        const {points, rotation, theta, size} = this

        const spacing = 0.015*size

        for (let i = 0; i < points.length; i++) {
            const radius = spacing * Math.sqrt(i)
            const angle = theta * i * rotation
            let x = size / 2 + radius * Math.cos(angle)
            let y = size / 2 + radius * Math.sin(angle)

            points[i].x = x
            points[i].y = y
        }
    }
π
    @action componentDidMount() {
        this.finalCtx = this.base.getContext('2d')
//        this.updatePoints()
//        this.circles = d3.select(this.base).selectAll('circle')

        this.componentDidUpdate()
        requestAnimationFrame(this.frame)
    }

    @action componentDidUpdate() {
        this.ripples.push(new Ripple({
            origin: { x: this.size/2, y: this.size/2 },
            colorScale: d3.scaleSequential(d3_chromatic.interpolateYlOrBr).domain([0, this.size*0.9]),
            radius: this.size,
            priority: 0
        }))

        this.offscreenCanvas.width = this.base.width
        this.offscreenCanvas.height = this.base.height        
    }

    @action.bound expandRipples() {
        const {points, ripples, size} = this

        ripples.forEach(ripple => {
            if (ripple.radius >= size*2) return

            ripple.radius += size/50

            points.forEach(point => {
                if (point.colorPriority && point.colorPriority > ripple.priority)
                    return

                const dist = getDistance(point, ripple.origin)
                if (dist < ripple.radius) {
                    point.color = ripple.colorScale(dist)
                    point.colorPriority = ripple.priority
                }                                    
            })
        })
    }

    @action.bound frame() {
        this.rotation += 0.000002//0.000001///Math.pow(dist(this.mouse, { x: this.width/2, y: this.height/2 }), 2)

        this.updatePoints()
        this.expandRipples()

        const {ctx, size, points, ripples} = this
        window.ctx = ctx

        ctx.clearRect(0, 0, this.base.width, this.base.height);

        const pointRadius = Math.round(size/130)

        points.forEach(d => {
            ctx.fillStyle = d.color || '#f5a44a'
            ctx.beginPath()
            ctx.arc(d.x, d.y, pointRadius, 0, 2 * Math.PI, false)
            ctx.fill()
        })

        this.finalCtx.clearRect(0, 0, this.base.width, this.base.height);
        this.finalCtx.drawImage(this.offscreenCanvas, 0, 0)

        requestAnimationFrame(this.frame)
    }

    @action.bound onMouseDown(e) {
        e.preventDefault();

        this.mouseDown = true
        this.onMouseMove(e)
    }

    @action.bound onMouseUp() {
        this.mouseDown = false
    }

    @action.bound onMouseMove(e) {
        e.preventDefault()

        const rect = e.target.getBoundingClientRect()
        const offsetX = e.offsetX || e.targetTouches[0].pageX - rect.left
        const offsetY = e.offsetY || e.targetTouches[0].pageY - rect.top

        const newMouse = { x: offsetX, y: offsetY }
        this.mouse = newMouse

        const {size} = this

        if (this.mouseDown && (this.ripples.length == 0 || _.last(this.ripples).radius > size/8))
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
            colorScale: d3.scaleSequential(colorScales[colorScalesIndex]).domain([0, this.size*0.75]),
            radius: 0,
            priority: this.ripplePriority++
        }))        
    }

    render() {
        let {size, points, bbox} = this

        return <canvas 
            width={size} height={size} style={{width: size, height: size, cursor: 'pointer'}}
            onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseLeave={this.onMouseUp} onMouseMove={this.onMouseMove}
            onTouchStart={this.onMouseDown} onTouchEnd={this.onMouseUp} onTouchMove={this.onMouseMove}
        />
    }
}

@observer
export default class Sunflower extends Component {
    @observable size

    constructor() {
        super()
    }

    componentDidMount() {
        this.onResize()
    }

    @action.bound onResize() {
        this.size = Math.floor(Math.min(this.base.clientWidth, this.base.clientHeight))
    }

    render() {
        const {size, onResize} = this
        return <Resizable onResize={onResize} class={styles.sunflower}>
            <SunflowerMain x={0} y={0} size={size}/>
        </Resizable>
    }
}
