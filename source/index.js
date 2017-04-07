module.exports = function split (separator, source) {
  const splitter = (
    source,
    nextSplit = source.indexOf(separator),
    results = []
  ) =>
    nextSplit < 0
    ? results.concat(source)
    : splitter(
        source.slice(nextSplit + 1),
        source.slice(nextSplit + 1).indexOf(separator),
        results.concat(source.slice(0, nextSplit))
    )

  return splitter(source)
}
