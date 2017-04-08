import split from './index'

it(`is a function`, () => {
  expect(typeof (split)).toEqual(`function`)
})

it(`returns array containing unchanged buffer`, () => {
  const source = Buffer.from(`nospace`)
  const actual = split(Buffer.from(` `), source)
  const expected = [ source ]
  expect(actual).toEqual(expected)
})

it(`splits a buffer with another buffer`, () => {
  const actual = split(Buffer.from(` `), Buffer.from(`när det blåser på månen`))
  const expected = [
    Buffer.from(`när`),
    Buffer.from(`det`),
    Buffer.from(`blåser`),
    Buffer.from(`på`),
    Buffer.from(`månen`)
  ]
  expect(actual).toEqual(expected)
})

it(`returns the expected output when buffer ends with separator`, () => {
  const actual = split(
    Buffer.from(` `),
    Buffer.from(`nostromo `)
  )
  const expected = [
    Buffer.from(`nostromo`),
    Buffer.from(``)
  ]
  expect(actual).toEqual(expected)
})
