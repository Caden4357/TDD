// Bubble sort is not very common but its good to learn and understand
// its called bubble sort because the largest values bubble up to the top
// as you loop through the array, you compare each element to the next and swap them if the next element is smaller

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++){
//         for(let j = 1; j < arr.length; j++){
//             if(arr[j] < arr[j - 1]){
//                 swap(arr, j, j - 1);
//         }
//     }
//     }
//     return arr;
// }
// console.log(bubbleSort([37, 45, 29, 8])); // [ 8, 29, 37, 45 ]

// its not best to start from the beginning and go to the end because the end is already sorted and we will get undefined if we try to compare the last element to the next element
// so we start from the end and go to the beginning
// we can also add a noSwaps variable to break out of the loop if the array is already sorted

function bubbleSortOptimized(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 1; j < i; j++){
            if(arr[j] < arr[j - 1]){
                swap(arr, j, j - 1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
console.log(bubbleSortOptimized([37, 45, 29, 8])); // [ 8, 29, 37, 45 ]