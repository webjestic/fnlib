
function base64ToStr(str) {
    return Buffer.from(str, 'base64').toString('utf8')
}


export default base64ToStr