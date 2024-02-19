const areThereDuplicates = (...args) => {
    const frequencyCounter = {};
    for(let num of args){
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }
    for(let key in frequencyCounter){
        if(frequencyCounter[key] > 1){
            return true
        }
    }
    return false
}
console.log(areThereDuplicates(1,2,3,4,5,6,2)); // true
console.log(areThereDuplicates('1', 'w', 'a', 'w')); // true
console.log(areThereDuplicates('1', 'w', 'a', 1)); // false

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
const averagePair = (arr, target) => {
    if(arr.length === 0) return false
    let left = 0;
    let right = arr.length - 1
    while(right > 1){
        let avg = (arr[left] + arr[right])/2
        if(avg === target)return true;
        else if(avg < target) left++;
        else right--
    }
    return false
}
console.log(averagePair([1,2,3], 2.5)); // true 
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([])); // false

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (str1, str2) => {
    let i = 0; 
    let j = 0;
    while(j < str2.length){
        if(str1[i] === str2[j]){
            i++;
        }
        if(i === str1.length){
            return true;
        }
        j++
    }
    return false
}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

const maxSubarraySum = (arr, num) => {
    if(num > arr.length) return null;
    let max = 0;
    let tempSum = 0;
    for(let i = 0; i < num; i++){
        max+=arr[i];
    }
    tempSum = max;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        max = Math.max(max, tempSum);
    }
    return max;
}
console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null
