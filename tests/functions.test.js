import { describe, it, expect } from 'vitest'
import fnlib from '../index.js'

describe('string encoding', () => {
    it('strToHex / hexToStr roundtrip', () => {
        expect(fnlib.hexToStr(fnlib.strToHex('foobar'))).toBe('foobar')
    })

    it('strToBinary / binaryToStr roundtrip', () => {
        expect(fnlib.binaryToStr(fnlib.strToBinary('foobar'))).toBe('foobar')
    })

    it('strToBase64 / base64ToStr roundtrip', () => {
        expect(fnlib.base64ToStr(fnlib.strToBase64('foobar'))).toBe('foobar')
        expect(fnlib.strToBase64('foobar')).toBe('Zm9vYmFy')
    })

    it('strToEscape / escapeToStr roundtrip', () => {
        const str = 'var x = foobar'
        expect(fnlib.escapeToStr(fnlib.strToEscape(str))).toBe(str)
        expect(fnlib.strToEscape(str)).toBe('var%20x%20%3D%20foobar')
    })
})

describe('string utils', () => {
    it('capitalizeFirstLetter', () => {
        expect(fnlib.capitalizeFirstLetter('foo')).toBe('Foo')
        expect(fnlib.capitalizeFirstLetter('bar')).toBe('Bar')
        expect(fnlib.capitalizeFirstLetter('F')).toBe('F')
    })
})

describe('number utils', () => {
    it('isEven', () => {
        expect(fnlib.isEven(2)).toBe(true)
        expect(fnlib.isEven(3)).toBe(false)
        expect(fnlib.isEven(0)).toBe(true)
        expect(fnlib.isEven('x')).toBe(false)
    })

    it('formatBytes', () => {
        expect(fnlib.formatBytes(0)).toBe('0 Bytes')
        expect(fnlib.formatBytes(1024)).toBe('1 KB')
        expect(fnlib.formatBytes(1024 * 1024)).toBe('1 MB')
    })

    it('numberToWords', () => {
        expect(fnlib.numberToWords(0)).toBe('zero')
        expect(fnlib.numberToWords(1)).toBe('one')
        expect(fnlib.numberToWords(42)).toBe('forty two')
        expect(fnlib.numberToWords(1000)).toBe('one thousand')
    })

    it('wordsToNumber', () => {
        expect(fnlib.wordsToNumber('zero')).toBe(0)
        expect(fnlib.wordsToNumber('one')).toBe(1)
        expect(fnlib.wordsToNumber('forty two')).toBe(42)
        expect(fnlib.wordsToNumber('one thousand')).toBe(1000)
    })

    it('numberToWords / wordsToNumber roundtrip', () => {
        const nums = [0, 1, 19, 42, 100, 999, 5356147]
        for (const n of nums)
            expect(fnlib.wordsToNumber(fnlib.numberToWords(n))).toBe(n)
    })
})

describe('date utils', () => {
    it('isLeapYear', () => {
        expect(fnlib.isLeapYear(2000)).toBe(true)
        expect(fnlib.isLeapYear(1900)).toBe(false)
        expect(fnlib.isLeapYear(2024)).toBe(true)
        expect(fnlib.isLeapYear(2001)).toBe(false)
    })

    it('getTimeSince returns non-negative total', () => {
        const start = new Date(Date.now() - 5000)
        const result = fnlib.getTimeSince(start)
        expect(result.total).toBeGreaterThanOrEqual(5000)
        expect(result).toHaveProperty('seconds')
        expect(result).toHaveProperty('minutes')
        expect(result).toHaveProperty('hours')
        expect(result).toHaveProperty('days')
        expect(result).toHaveProperty('years')
    })

    it('getTimeRemaining returns positive total for future date', () => {
        const end = new Date(Date.now() + 5000)
        const result = fnlib.getTimeRemaining(end)
        expect(result.total).toBeGreaterThan(0)
        expect(result.minutes).toBe(0)
        expect(result.hours).toBe(0)
    })

    it('getTimeDrift', () => {
        const result = fnlib.getTimeDrift('1/1/2000', '1/1/2001')
        expect(result.years).toBe(1)
        expect(result.total).toBeGreaterThan(0)
    })

    it('getAge', () => {
        expect(fnlib.getAge('1/1/1980', '1/1/2000')).toBe(20)
        expect(fnlib.getAge('6/15/1990', '6/14/2020')).toBe(29)
    })

    it('getTimeZones returns a non-empty array of strings', () => {
        const zones = fnlib.getTimeZones()
        expect(Array.isArray(zones)).toBe(true)
        expect(zones.length).toBeGreaterThan(0)
        expect(typeof zones[0]).toBe('string')
    })
})

describe('random utils', () => {
    it('randomStr returns correct length', () => {
        expect(fnlib.randomStr(12)).toHaveLength(12)
        expect(fnlib.randomStr(0)).toHaveLength(0)
    })

    it('randomHex returns correct length', () => {
        expect(fnlib.randomHex(32)).toHaveLength(32)
    })

    it('randomBase64 returns correct length', () => {
        expect(fnlib.randomBase64(24)).toHaveLength(24)
    })

    it('randomUUID returns a valid v4 UUID', () => {
        const uuid = fnlib.randomUUID()
        expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
    })

    it('sleep resolves after delay', async () => {
        const start = Date.now()
        await fnlib.sleep(100)
        expect(Date.now() - start).toBeGreaterThanOrEqual(90)
    })
})
