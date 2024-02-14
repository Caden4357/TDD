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