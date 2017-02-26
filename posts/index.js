import * as _ from 'lodash'

function requireAll(requireContext) {
  return requireContext.keys().map(key => {
    var obj = requireContext(key)
    obj.slug = key.split('/')[1]
    return obj
  })
}
const posts = requireAll(require.context("../posts", true, /.md$/))
export default _.sortBy(posts, post => -post.date)