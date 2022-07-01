function strToBase64(str) {
    return Buffer.from(str).toString('base64')
}

export default strToBase64