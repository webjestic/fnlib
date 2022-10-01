# fnlib

Simple library of JavaScript Node functions.

## Install

`npm i fnlib`

---
## functions

### `strToHex`
### `strToHex`
```JavaScript
import fnlib from 'fnlib'

console.log ('Hex:', fnlib.strToHex('foobar') )
// Hex:  66 6f 6f 62 61 72

console.log ('Hex:', fnlib.hexToStr( fnlib.strToHex('foobar') ))
// Hex:  foobar
```

### `strToBinary`
### `binaryToStr`
```JavaScript
import fnlib from 'fnlib'

console.log ('Binary: ', fnlib.strToBinary('foobar') )
// Binary:  1100110 1101111 1101111 1100010 1100001 1110010

console.log ('Binary: ', fnlib.binaryToStr( fnlib.strToBinary('foobar') ))
// Binary:  foobar
```

### `strToBase64`
### `base64ToStr`
```JavaScript
import fnlib from 'fnlib'

console.log ('Base64: ', fnlib.strToBase64('foobar') )
// Base64:  Zm9vYmFy

console.log ('Base64: ', fnlib.base64ToStr( fnlib.strToBase64('foobar')) )
// Base64:  foobar
```

### `strToEscape`
### `escapeToStr`
```JavaScript
import fnlib from 'fnlib'

console.log ('Escape: ', fnlib.strToEscape('var x = foobar') )
// Escape:  var%20x%20%3D%20foobar

console.log ('Escape: ', fnlib.escapeToStr( fnlib.strToEscape('var x = foobar') ))
// Escape:  var x = foobar
```

### `capitalizeFirstLetter`
```JavaScript
import fnlib from 'fnlib'

console.log('First Name:,' fnlib.capitalizeFirstLetter('foo') )
// Foo

console.log('Last Name :,'fnlib.capitalizeFirstLetter('bar') )
// Bar
```

### `formatBytes`
```JavaScript
import fnlib from 'fnlib'
import os from 'os'

console.log('Memory:', fnlib.formatBytes( os.totalmem() ))
// Memory: 32 GB
```

### `sleep`
```JavaScript
import fnlib from 'fnlib'

await sleep(5000)
```

### `getTimeRemaining`
### `getTimeSince`
```JavaScript
import fnlib from 'fnlib'

const startTime = new Date(Date.now())
await sleep(2000)
console.log( fnlib.getTimeSince(startTime) )
// { total: 2000, years: 0, days: 0, hours: 0, minutes: 0, seconds: 2 }

const endTime = new Date(Date.now() + 1000 * 60 )
console.log( fnlib.getTimeRemaining( endTime) )
// { total: 60000, years: 0, days: 0, hours: 0, minutes: 1, seconds: 0 }
```

