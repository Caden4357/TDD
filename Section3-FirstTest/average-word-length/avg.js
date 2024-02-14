export const getAvgWordLength = (sentence) => {
    const splitString = sentence.split(' ')
    if(sentence.length === 0){
        return 0
    }
    if(splitString.length === 1){
        return splitString[0].length
    }
    let wordLength = 0
    for(let word of splitString){
        wordLength += word.length
    }
    return Math.ceil(wordLength/splitString.length)
}