
import capitalizeFirstLetter from './fnlib/capitalizeFirstLetter.js'
import strToHex from './fnlib/strToHex.js'
import hexToStr from './fnlib/hexToStr.js'
import strToBinary from './fnlib/strToBinary.js'
import binaryToStr from './fnlib/binaryToStr.js'
import strToBase64 from './fnlib/strToBase64.js'
import base64ToStr from './fnlib/base64ToStr.js'
import strToEscape from './fnlib/strToEscape.js'
import escapeToStr from './fnlib/escapeToStr.js'

import formatBytes from './fnlib/formatBytes.js'
import sleep from './fnlib/sleep.js'
import { getTimeRemaining, getTimeSince } from './fnlib/timeDiff.js'

// var myStr = 'var x = foobar'
// var myStr = 'foobar'
// console.log ('Binary: ', strToBinary(myStr) )
// console.log ('Binary: ', binaryToStr(strToBinary(myStr)) )
// console.log ('Hex: ', strToHex(myStr) )
// console.log ('Hex: ', hexToStr(strToHex(myStr)) )
// console.log ('Base64: ', strToBase64(myStr) )
// console.log ('Base64: ', base64ToStr(strToBase64(myStr)) )
// console.log ('Escape: ', strToEscape(myStr) )
// console.log ('Escape: ', escapeToStr(strToEscape(myStr)) )

// console.log( capitalizeFirstLetter('first') )
// console.log( capitalizeFirstLetter('last') )

// console.log('Memory:', formatBytes( os.totalmem() ))

// const startTime = new Date(Date.now())
// await sleep(2000)
// console.log( getTimeSince(startTime) )

// const endTime = new Date(Date.now() + 1000 * 60 /* 1 minute */ )
// console.log( getTimeRemaining( endTime) )


export default { 
    capitalizeFirstLetter,
    strToHex,
    hexToStr,
    strToBinary,
    binaryToStr,
    strToBase64,
    base64ToStr,
    strToEscape,
    escapeToStr,

    formatBytes,
    sleep,
    getTimeRemaining,
    getTimeSince
}
