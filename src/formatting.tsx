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

export function parseMarkdown(content: string): JSX.Element {
    const jsx: JSX.Element = compiler(content)

    // Wrap content demarcated by headings into section blocks
    const sectionBoundaries: [number, number][] = []
    let headingIndex: number|undefined
    for (let i = 0; i < jsx.props.children.length; i++) {
        if (jsx.props.children[i].type === "h2") {
            if (headingIndex !== undefined)
                sectionBoundaries.push([headingIndex, i])

            headingIndex = i
        }
        
        if (i === jsx.props.children.length-1) {
            if (headingIndex !== undefined)
                sectionBoundaries.push([headingIndex, i+1])
        }
    }

    for (const bounds of sectionBoundaries.reverse()) {
        const elements = jsx.props.children.slice(bounds[0], bounds[1])
        jsx.props.children.splice(bounds[0], bounds[1]-bounds[0], <section>{elements}</section>)
    }

    // Replace iframes with figures
    function replaceIframes(nodes: JSX.Element[]) {
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i]
            if (node.type == "iframe") {
                nodes[i] = <figure data-grapher-src={node.props.src}/>
            } else if (node.props && node.props.children && node.props.children.length) {
                replaceIframes(node.props.children)
            }
        }
    }

    replaceIframes(jsx.props.children)

    return jsx
}

export function formatSDG(content: string): JSX.Element {   
    return parseMarkdown(content)
}