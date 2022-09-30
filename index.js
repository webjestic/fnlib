
import capitalizeFirstLetter from './fnlib/capitalizeFirstLetter.js'
import strToHex from './fnlib/strToHex.js'
import hexToStr from './fnlib/hexToStr.js'
import strToBinary from './fnlib/strToBinary.js'
import binaryToStr from './fnlib/binaryToStr.js'
import strToBase64 from './fnlib/strToBase64.js'
import base64ToStr from './fnlib/base64ToStr.js'
import strToEscape from './fnlib/strToEscape.js'
import escapeToStr from './fnlib/escapeToStr.js'

import formatBytes from './fnlib/formatBytes,js'
import sleep from './fnlib/sleep.js'
import { getTimeRemaining, getTimeSince } from './fnlib/timeDiff.js'

var myStr = "var x = 0"
console.log ('Binary: ', strToBinary(myStr) )
console.log ('Binary: ', binaryToStr(strToBinary(myStr)) )
console.log ('Hex: ', strToHex(myStr) )
console.log ('Hex: ', hexToStr(strToHex(myStr)) )
console.log ('Base64: ', strToBase64(myStr) )
console.log ('Base64: ', base64ToStr(strToBase64(myStr)) )
console.log ('Escape: ', strToEscape(myStr) )
console.log ('Escape: ', escapeToStr(strToEscape(myStr)) )


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
