function wordsToNumber(words) {
    const units = {
        zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
        ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
        seventeen: 17, eighteen: 18, nineteen: 19
    }
    
    const tens = {
        twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90
    }
    
    const scales = {
        thousand: 1000, million: 1000000, billion: 1000000000, trillion: 1000000000000
    }
  
    // Helper function to convert a group of words to a number
    function convertGroup(group) {
        let result = 0
        let tempResult = 0
        // let currentScale = 1;
  
        for (let i = 0; i < group.length; i++) {
            const word = group[i]
            if (units[word]) 
                tempResult += units[word]
            else if (tens[word]) 
                tempResult += tens[word]
            else if (word === 'hundred') 
                tempResult *= 100
            else {
                const scale = scales[word]
                if (scale) {
                    // currentScale = scale;
                    result += tempResult * scale
                    tempResult = 0
                }
            }
        }
  
        return result + tempResult
    }
  
    // Splitting the input words into groups based on scales
    const wordGroups = words.split(',').map(group => group.trim().split(' '))
  
    // Converting each group to a number and summing them
    let total = 0
    for (let i = 0; i < wordGroups.length; i++) {
        const group = wordGroups[i]
        total += convertGroup(group)
    }
  
    return total
}
  
// Example usage
// const words = 'five million three hundred fifty six thousand one hundred forty seven'
// const number = wordsToNumber(words)
// console.log(number)

export default wordsToNumber
  