module.exports = (separator, source) =>
  (function splitter (next, results = []) {
    const splitIndex = next.indexOf(separator)
    return (
      splitIndex !== -1
      ? splitter(
        next.slice(splitIndex + 1),
        results.concat(next.slice(0, splitIndex))
      )
      : results.concat(next)
    )
  }(source))
