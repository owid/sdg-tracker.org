function requireAll(requireContext) {
  return requireContext.keys().map(key => {
    var obj = requireContext(key)
    obj.slug = key.split('/')[1]
    return obj
  });
}
export default requireAll(require.context("../posts", true, /.md$/));
