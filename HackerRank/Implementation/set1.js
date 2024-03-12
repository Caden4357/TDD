function hurdleRace(k, height) {
    console.log(k, height);
    let max = 0;
    for(let hurdle of height){
        if(hurdle > k && (hurdle-k) > 1 ){
            console.log(k, hurdle);
            max = Math.max(max, hurdle)
        }
    }
    return max === 0 ? 0 : max - k;

}
console.log(hurdleRace(4, [1, 6, 3, 5, 2])) // 2
console.log(hurdleRace(7, [2, 5, 4, 5, 2])) // 0;

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesOnSamsHouse = 0
    let orangesOnSamsHouse = 0
    for(let i = 0; i < apples.length; i++){
        // we need to add a to each item in the array 
        if((apples[i] + a) >= s && (apples[i] + a) <= t){
            applesOnSamsHouse++
        }
    }
    for(let i = 0; i < oranges.length; i++){
        // we need to add a to each item in the array 
        if((oranges[i] + b) >= s && (oranges[i] + b) <= t){
            orangesOnSamsHouse++
        }
    }
    console.log(applesOnSamsHouse);
    console.log(orangesOnSamsHouse);

}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // 1 1


export const getMoneySpent = (keyboards, drives, b) => {
    let maxToBeSpent = -1
    const arrayToStartWith = keyboards.length > drives.length ? keyboards : drives
    const smallerArray = keyboards.length < drives.length ? keyboards : drives
    for (let i = 0; i < arrayToStartWith.length; i++) {
        for (let j = 0; j < smallerArray.length; j++) {
            let total = arrayToStartWith[i] + smallerArray[j]
            if (total <= b && total > maxToBeSpent) {
                maxToBeSpent = total
            }
        }
    }
    return maxToBeSpent
}
// loop through arrays adding each keyboard and drive together 
// if the combo is less than the budget check to see the difference between the combo and the budget 
// keep track of that difference in a variable if the difference is less than the stored one replace it were looking for the closest we can get the the budget 
// if(cat1Distance === cat2Distance){
//     return 'Mouse C'
// }
// ! Cats and mouse 
// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
// figure out how far away x & y are from y 
//    x   z  y
// -1-2-3-4-5-6-7-8-9-0-
//  find the difference between x-z
export const catAndMouse = (x, y, z) => {
    // Getting cats distance from mouse ensuring the number is positive
    let firstCatsDistance = x <= z ? z - x : x - z
    let secondCatsDistance = y <= z ? z - y : y - z

    if (firstCatsDistance === secondCatsDistance) {
        return 'Mouse C'
    }
    else {
        return firstCatsDistance < secondCatsDistance ? 'Cat A' : 'Cat B'
    }
}

// ! Udemy JS algos and data structures computer science master class 
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// export const sameFrequency = (num1, num2) => {
//     num1 = num1.toString()
//     num2 = num2.toString()
//     let num1Map = {}
//     let num2Map = {}
//     if(num1.length !== num2.length){
//         return false
//     }
//     for(let i = 0; i < num1.length; i++){
//         console.log(num1[i]);
//         if(num1Map[num1[i]]){
//             num1Map[num1[i]]++
//         }else{
//             num1Map[num1[i]] = 1
//         }
//         if(num2Map[num2[i]]){
//             num2Map[num2[i]]++
//         }else{
//             num2Map[num2[i]] = 1
//         }
//     }
//     return JSON.stringify(num1Map) === JSON.stringify(num2Map)
// }

// ! CHATGPT 

// The sameFrequency function you've provided checks if two numbers have the same frequency of digits. While your implementation works, there are several ways to refactor it for improved readability, efficiency, and maintainability. Here are some suggestions:

// Use a Single Loop and Map
// Instead of converting the numbers to strings twice and then creating two separate maps, you can create a single map for the first number to count the frequency of each digit and then decrement the count as you check the second number. This approach reduces space complexity and improves readability.

// Early Return on Length Mismatch
// You've already implemented an early return if the lengths of the numbers (as strings) do not match, which is great for efficiency.

// Avoid JSON.stringify for Object Comparison
// Using JSON.stringify to compare the objects works but is not the most efficient or reliable method for comparing maps because it depends on the order of keys. Instead, you can iterate over the keys of the first map and directly compare values.

// Here's how you might refactor the code:

// javascript
export const sameFrequency = (num1, num2) => {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    let countNum1 = {};

    for (let digit of str1) {
        countNum1[digit] = (countNum1[digit] || 0) + 1;
    }

    for (let digit of str2) {
        if (!countNum1[digit]) {
            return false;
        }
        countNum1[digit] -= 1;
    }
    return true;
};

// ** Picking Numbers HackerRank
// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.
// a = [1,1,2,2,4,4,5,5,5] the longest subarray that matches the criteria is -> [4,4,5,5,5]
// seems like it doesnt have to be in consecutive order for example:
// [4, 6, 5, 3, 3, 1] -> 3 because the longest array of ints meeting the criteria is [4,3,3] -> 4-3 = 0; 3-3 = 0
// var that holds the length of the subarray since thats what we return 
// its essentially counting how many numbers together all have a difference of either 0 or 1

// counter = 0 -> 1 -> 2
// [4,6,5,3,3,1]
// instead of all this I could go through and do a frequency counter on the array. Then a loop through the frequency counter to see how many I have of that number that number +1 and that number -1 whatever I have more of I add to the amount of number I am on and compare that to the counter of longest subarray if its bigger replace if smaller or same size move on
// 
const pickingNumbers = (arr) => {
    const frequencyCounter = {}
    let count = 2
    for (let num of arr) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
    }
    for(let key in frequencyCounter){
        let keyAsNumber = parseInt(key);
        if(frequencyCounter[keyAsNumber+1] && frequencyCounter[keyAsNumber-1]){
            let higherVal = Math.max(frequencyCounter[keyAsNumber+1], frequencyCounter[keyAsNumber-1])
            if((frequencyCounter[key] + higherVal) > count){
                count = (frequencyCounter[key] + higherVal)
            }
        }
        else if(frequencyCounter[keyAsNumber+1]){
            if((frequencyCounter[key] + frequencyCounter[keyAsNumber+1]) > count){
                count = (frequencyCounter[key] + frequencyCounter[keyAsNumber+1])
            }
        }
        else if(frequencyCounter[keyAsNumber-1]){
            if((frequencyCounter[key] + frequencyCounter[keyAsNumber-1]) > count){
                count = (frequencyCounter[key] + frequencyCounter[keyAsNumber-1])
            }
        }else if(frequencyCounter[key] > count) {
            count = frequencyCounter[key]
        }
    }
    return count
}
console.log(pickingNumbers([7, 12, 13, 19, 17, 7, 3, 18, 9, 18, 13, 12, 3, 13, 7, 9, 18, 9, 18, 9, 13, 18, 13, 13, 18, 18, 17, 17, 13, 3, 12, 13, 19, 17, 19, 12, 18, 13, 7, 3, 3, 12, 7, 13, 7, 3, 17, 9, 13, 13, 13, 12, 18, 18, 9, 7, 19, 17, 13, 18, 19, 9, 18, 18, 18, 19, 17, 7, 12, 3, 13, 19, 12, 3, 9, 17, 13, 19, 12, 18, 13, 18, 18, 18, 17, 13, 3, 18, 19, 7, 12, 9, 18, 3, 13, 13, 9, 7]));


const pickingNumbersRefactored = (a) => {
    const frequencyCounter = {};
    let maxSubarrayLength = 0; // More descriptive variable name for what we're tracking

    // Build the frequency counter
    for (let num of a) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }

    // Iterate over the frequency counter to find the max length of a subarray
    for (let key in frequencyCounter) {
        let keyAsNumber = parseInt(key);
        let currentCount = frequencyCounter[key];
        let nextCount = frequencyCounter[keyAsNumber + 1] || 0; // Directly handle undefined cases
        let prevCount = frequencyCounter[keyAsNumber - 1] || 0;

        // Max of current and one adjacent (either next or previous)
        let maxAdjacentSum = Math.max(currentCount + nextCount, currentCount + prevCount);

        // Update maxSubarrayLength if this combination is larger
        maxSubarrayLength = Math.max(maxSubarrayLength, maxAdjacentSum);
    }

    return maxSubarrayLength;
}
console.log(pickingNumbersRefactored([7, 12, 13, 19, 17, 7, 3, 18, 9, 18, 13, 12, 3, 13, 7, 9, 18, 9, 18, 9, 13, 18, 13, 13, 18, 18, 17, 17, 13, 3, 12, 13, 19, 17, 19, 12, 18, 13, 7, 3, 3, 12, 7, 13, 7, 3, 17, 9, 13, 13, 13, 12, 18, 18, 9, 7, 19, 17, 13, 18, 19, 9, 18, 18, 18, 19, 17, 7, 12, 3, 13, 19, 12, 3, 9, 17, 13, 19, 12, 18, 13, 18, 18, 18, 17, 13, 3, 18, 19, 7, 12, 9, 18, 3, 13, 13, 9, 7]));