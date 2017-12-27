import * as _ from 'lodash'
import * as markdown from 'markdown-it'
declare var require: any
const matter = require('gray-matter')
const md = new markdown({ linkify: true })
const customBlock = require('markdown-it-custom-block')
md.use(require('markdown-it-header-sections'))

md.use(customBlock, {
    grapher(argStr: string) {
        const embeds = argStr.trim().split(/\s+/).map(target => `<figure data-grapher-src="${target}"></figure>`)
        if (embeds.length === 1)
            return embeds[0]
        else
            return `<div class="embeds">${embeds.join("")}</div>`
    }
})

export function parseMarkdown(content: string): string {
    return md.render(content)
}

export function formatSDG(content: string): string {   
    return parseMarkdown(content)
}