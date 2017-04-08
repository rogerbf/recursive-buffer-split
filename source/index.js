module.exports = function split (separator, source, results = []) {
  const splitIndex = source.indexOf(separator)
  return (
    splitIndex === -1
    ? results.concat(source)
    : split(
      separator,
      source.slice(splitIndex + 1),
      results.concat(source.slice(0, splitIndex))
    )
  )
}
