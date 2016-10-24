function recursiveSplit (delimiter, buff, results = []) {
  if (
    delimiter.constructor.name !== `Buffer` ||
    buff.constructor.name !== `Buffer`
  ) { throw new TypeError(`Expected buffer`) }

  const delimiterIndex = buff.indexOf(delimiter)

  if (delimiterIndex >= 0) {
    return recursiveSplit(
      delimiter,
      buff.slice(delimiterIndex + delimiter.length),
      [ ...results, buff.slice(0, delimiterIndex) ]
    )
  } else {
    return [ ...results, buff ]
  }
}

module.exports = recursiveSplit
