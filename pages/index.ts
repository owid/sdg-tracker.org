import * as _ from 'lodash'
import {GoalPageProps} from '../src/GoalPage'

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
const pages = requireAll(require.context("../pages", true, /.md$/)) as GoalPageProps[]
export default _.sortBy(pages, page => page.goalNum)