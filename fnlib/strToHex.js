

export default function strToHex(str) {
    return str.split('').map(function (char) {
        return Buffer.from(char, 'utf8').toString('hex')
    }).join(' ')
}
