

export default function binaryToStr(str) {
    var newBin = str.split(' ')
    var binCode = []
    for (var i = 0; i < newBin.length; i++) 
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
    
    return binCode.join('')
}
