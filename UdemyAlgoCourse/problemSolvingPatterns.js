const frequencyCounter = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }
    const frequency = {}
    const frequency2 = {}

    for(let num of arr1){
        frequency[num] = (frequency[num] || 0) + 1
    }
    for(let num of arr2){
        frequency2[num] = (frequency2[num] || 0) + 1
    }
    console.log(frequency, frequency2);
}
console.log(frequencyCounter([1,2,3,4,5], [1,2,3,5,2]));

// Anagram 
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false
    }
    const frequencyOfString1 = {}

    for (let char of str1){
        frequencyOfString1[char] = (frequencyOfString1[char] || 0) + 1
    }
    for (let char of str2){
        if(!frequencyOfString1[char]){
            return false
        }
        frequencyOfString1[char] -= 1
    }
    return true
} 
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true




