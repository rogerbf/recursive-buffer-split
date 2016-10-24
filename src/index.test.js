const test = require(`tape`)
const recursiveSplit = require(`./index.js`)

test(`recursiveSplit`, assert => {
  assert.test(`is a function`, assert => {
    assert.ok(typeof(recursiveSplit) === `function`)
    assert.end()
  })

  assert.test(`return empty buffer`, assert => {
    const expected = [ Buffer.alloc(0) ]
    const actual = recursiveSplit(Buffer.alloc(0), Buffer.alloc(0))
    assert.looseEqual(actual, expected)
    assert.end()
  })

  assert.test(`return input`, assert => {
    const expected = [ Buffer.from(`hello`) ]
    const actual = recursiveSplit(Buffer.from(`w`), Buffer.from(`hello`))
    assert.looseEqual(actual, expected)
    assert.end()
  })

  assert.test(`hello world`, assert => {
    const expected = [ Buffer.from(`hello`), Buffer.from(`world`) ]
    const actual = recursiveSplit(Buffer.from(`\n\n`), Buffer.from(`hello\n\nworld`))
    assert.looseEqual(actual, expected)
    assert.end()
  })

  assert.test(`two empty`, assert => {
    const expected = [ Buffer.alloc(0), Buffer.alloc(0) ]
    const actual = recursiveSplit(Buffer.from(`\n\n`), Buffer.from(`\n\n`))
    assert.looseEqual(actual, expected)
    assert.end()
  })

  assert.test(`start empty`, assert => {
    const expected = [ Buffer.alloc(0), Buffer.from(`hello`) ]
    const actual = recursiveSplit(Buffer.from(`\n\n`), Buffer.from(`\n\nhello`))
    assert.looseEqual(actual, expected)
    assert.end()
  })

  assert.test(`end empty`, assert => {
    const expected = [ Buffer.from(`hello`), Buffer.alloc(0) ]
    const actual = recursiveSplit(Buffer.from(`\n\n`), Buffer.from(`hello\n\n`))
    assert.looseEqual(actual, expected)
    assert.end()
  })

  assert.test(`throws`, assert => {
    assert.throws(() => recursiveSplit())
    assert.throws(() => recursiveSplit(Buffer.alloc(0)))
    assert.throws(() => recursiveSplit(` `, Buffer.from(`hello world`)))
    assert.throws(() => recursiveSplit(Buffer.from(`\n`), ` `))
    assert.end()
  })

  assert.end()
})
