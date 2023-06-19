

function isEven(num) {
    if (isNaN(num)) return false
    else return num % 2 === 0
}

export default isEven