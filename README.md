# recursive-buffer-split

Recursively split a buffer without intermediate string conversion.

## usage

``` javascript
const split = require(`recursive-buffer-split`)

split(Buffer.from(` `), Buffer.from(`the humans are dead`))
// [ <Buffer 74 68 65>,
//   <Buffer 68 75 6d 61 6e 73>,
//   <Buffer 61 72 65>,
//   <Buffer 64 65 61 64> ]
```
