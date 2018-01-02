import * as _ from 'lodash'
/*import * as markdown from 'markdown-it'
declare var require: any
const matter = require('gray-matter')
const md = new markdown({ linkify: true })
const customBlock = require('markdown-it-custom-block')
md.use(require('markdown-it-header-sections'))*/
import * as React from 'react'

/*md.use(customBlock, {
    grapher(argStr: string) {
        const embeds = argStr.trim().split(/\s+/).map(target => `<figure data-grapher-src="${target}"></figure>`)
//        if (embeds.length === 1)
//            return embeds[0]
 //       else
            return `<div class="embeds">${embeds.join("")}</div>`
    }
})*/

const compiler = require('markdown-to-jsx').compiler

export function parseMarkdown(content: string): JSX.Element[] {
    return compiler(content).props.children||[]
}

export function formatSDG(content: string, isPreview?: boolean): JSX.Element[] {   
    content = content.replace(/(<iframe.+<\/iframe>\n?)+/g, val => `<div class="embeds">${val}</div>\n`)

    const nodes = parseMarkdown(content)

    // Wrap content demarcated by headings into section blocks
    const sectionBoundaries: [number, number][] = []
    let headingIndex: number|undefined
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].type === "h2") {
            if (headingIndex !== undefined)
                sectionBoundaries.push([headingIndex, i])

            headingIndex = i
        }
        
        if (i === nodes.length-1) {
            if (headingIndex !== undefined)
                sectionBoundaries.push([headingIndex, i+1])
        }
    }

    let i = 0
    for (const bounds of sectionBoundaries.reverse()) {
        const elements = nodes.slice(bounds[0], bounds[1])
        nodes.splice(bounds[0], bounds[1]-bounds[0], <section key={i}>{elements}</section>)
        i += 1
    }

    // Replace iframes with figures in the final version
    // Iframes are still used in the preview because iframeless embedding doesn't quite handle
    // charts being added and removed very well yet
    let figureIndex = 0
    function replaceIframes(nodes: JSX.Element[]) {
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i]
            if (node.type == "iframe") {
                if (isPreview)
                    nodes[i] = <iframe key={node.props.src} src={node.props.src}/>
                else
                    nodes[i] = <figure key={node.props.src} data-grapher-src={node.props.src}/>
                figureIndex += 1
            } else if (node.props && node.props.children && node.props.children.length) {
                replaceIframes(node.props.children)
            }
        }
    }

    replaceIframes(nodes)

    return nodes
}