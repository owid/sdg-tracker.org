import * as _ from 'lodash'

declare var require: any
function requireAll(requireContext: any): any[] {
  return requireContext.keys().map((key: string) => {
    const obj = requireContext(key)
    
    return _.extend({
      slug: key.split('/')[1].replace(/.md$/, ''),
      body: obj.body
    }, obj.attributes)
  })
}
const pages = requireAll(require.context("../pages", true, /.md$/)) as any[]
export default _.sortBy(pages, page => page.goalNum)