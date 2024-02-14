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
