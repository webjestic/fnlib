
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
import { getTimeRemaining, getTimeSince, isLeapYear, getTimeZones, getTimeDrift } from './fnlib/timeDiff.js'

import { randomBase64, randomHex, randomUUID } from './fnlib/randomKey.js'
import randomStr from './fnlib/randomStr.js'

import getAge from './fnlib/getAge.js'
import isEven from './fnlib/isEven.js'

import wordsToNumber from './fnlib/wordsToNumbers.js'
import numberToWords from './fnlib/numbersToWords.js'

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
    getTimeSince,
    isLeapYear,
    getTimeZones,
    getTimeDrift,

    randomBase64,
    randomHex,
    randomUUID,
    randomStr,

    getAge,
    isEven,

    wordsToNumber,
    numberToWords
}
