import * as markdown from 'markdown-it'
declare var require: any
const matter = require('gray-matter')
const md = new markdown({ html: true, linkify: true })

export function parseMarkdown(content: string): string {
    return md.render(content)
}