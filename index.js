
import capitalizeFirstLetter from './modules/capitalizeFirstLetter.js'
import strToHex from './modules/strToHex.js'
import hexToStr from './modules/hexToStr.js'
import strToBinary from './modules/strToBinary.js'
import binaryToStr from './modules/binaryToStr.js'
import strToBase64 from './modules/strToBase64.js'
import base64ToStr from './modules/base64ToStr.js'
import strToEscape from './modules/strToEscape.js'
import escapeToStr from './modules/escapeToStr.js'

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
    escapeToStr
}
