
export default function base64ToStr(str) {
    return Buffer.from(str, 'base64').toString('utf8')
}
