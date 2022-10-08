
import crypto from 'crypto'

export function randomBase64(length) {
    const randbytes = crypto.randomBytes(length).toString('base64')
    if (randbytes.length > length)
        return randbytes.substring(0, length)
    return randbytes
}

export function randomHex(length) {
    const randbytes = crypto.randomBytes(length).toString('hex')
    if (randbytes.length > length)
        return randbytes.substring(0, length)
    return randbytes
}

export function randomUUID() {
    return crypto.randomUUID()
}