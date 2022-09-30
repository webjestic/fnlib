
export default function hexToStr(str) {
    var newHex = str.split(" ");
    var binCode = [];

    for (var i = 0; i < newHex.length; i++) {
        binCode.push( Buffer.from(newHex[i], 'hex').toString('utf8') )
    }
    return binCode.join("")
}

