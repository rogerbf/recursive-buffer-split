# recursive-buffer-split

Like String.prototype.split() for Buffers. Uses recursion.

``` javascript
const recursiveSplit = require(`recursive-buffer-split`)

const buff = Buffer(`the humans are dead`)

recursiveSplit(Buffer(` `), buff)
// [ <Buffer 74 68 65>,
//   <Buffer 68 75 6d 61 6e 73>,
//   <Buffer 61 72 65>,
//   <Buffer 64 65 61 64> ]
```
