module.exports = function split (separator, source) {
  const splitter = (source, nextSplit, results = []) => {
    return (
      nextSplit === -1
      ? results.length > 0 ? results : results.concat(source)
      : undefined
    )
  }
  return splitter(source, source.indexOf(separator))
}
