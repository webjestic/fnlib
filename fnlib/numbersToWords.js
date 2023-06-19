
function numberToWords(number) {
    const units = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]
    
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]
    
    const scales = [
        '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion',
        'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion'
    ]
  
    if (number === 0) 
        return 'zero'
    
  
    // Splitting the number into groups of three digits
    const chunks = []
    while (number > 0) {
        chunks.push(number % 1000)
        number = Math.floor(number / 1000)
    }
  
    // Helper function to convert a three-digit chunk to words
    function convertChunk(chunk) {
        const words = []
  
        // Extracting the hundreds digit
        const hundredsDigit = Math.floor(chunk / 100)
        if (hundredsDigit > 0) {
            words.push(units[hundredsDigit])
            words.push('hundred')
        }
  
        // Extracting the last two digits
        const lastTwoDigits = chunk % 100
        if (lastTwoDigits < 20) 
            words.push(units[lastTwoDigits])
        else {
            const tensDigit = Math.floor(lastTwoDigits / 10)
            const unitsDigit = lastTwoDigits % 10
            words.push(tens[tensDigit])
            words.push(units[unitsDigit])
        }
  
        return words.filter(Boolean).join(' ')
    }
  
    // Combining the words for each chunk with its corresponding scale
    const wordChunks = chunks.map((chunk, index) => {
        const chunkWords = convertChunk(chunk)
        const scale = scales[index]
        return chunkWords + (chunkWords && scale ? ' ' + scale : '')
    })
  
    // Joining the words for each chunk
    return wordChunks.reverse().join(', ')
}
  
// Example usage
// const number = 5356147
// const words = numberToWords(number)
// console.log(words)

export default numberToWords
  