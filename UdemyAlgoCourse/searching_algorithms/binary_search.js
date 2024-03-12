// ! Only works on sorted arrays 
function binarySearchNums(arr, val){
    let left = 0;
    let right = arr.length-1
    while(left<=right){
        let middleIdx = Math.floor((left+right)/2)
        let middle = arr[middleIdx]
        if(middle === val){
            return middleIdx
        }
        if(middle < val){
            left = middleIdx+1
        }
        else{
            right = middleIdx-1
        }
    }
    return -1
}
console.log(binarySearchNums([1,3,4,6,8,9,11,12,15,16,17,18,19], 15)); // 8
