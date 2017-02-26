function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
export default requireAll(require.context("../posts", true, /.md$/));  
