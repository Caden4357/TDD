export const getMoneySpent = (keyboards, drives, b) => {
    let maxToBeSpent = -1
    const arrayToStartWith = keyboards.length > drives.length? keyboards: drives
    const smallerArray = keyboards.length < drives.length? keyboards: drives
    for(let i = 0; i < arrayToStartWith.length; i++){
        for (let j = 0; j < smallerArray.length; j++){
            let total = arrayToStartWith[i] + smallerArray[j]
            if(total <= b && total > maxToBeSpent){
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
export const catAndMouse = (x,y,z) => {
    // Getting cats distance from mouse ensuring the number is positive
    let firstCatsDistance = x <= z? z-x:x-z
    let secondCatsDistance = y <= z? z-y:y-z

    if(firstCatsDistance === secondCatsDistance){
        return 'Mouse C'
    }
    else{
        return firstCatsDistance < secondCatsDistance? 'Cat A':'Cat B'
    }
}

// ! Udemy JS algos and data structures computer science master class 
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
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
}