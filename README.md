# recursive-buffer-split

Like String.prototype.split() for Buffers. Uses recursion.

## usage
 
``` javascript
import recursiveSplit from `recursive-buffer-split`

const buff = Buffer.from(`the humans are dead`)

recursiveSplit(Buffer.from(` `), buff)
// [ <Buffer 74 68 65>,
//   <Buffer 68 75 6d 61 6e 73>,
//   <Buffer 61 72 65>,
//   <Buffer 64 65 61 64> ]
```
