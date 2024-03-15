export function designerPDFViewer(h, word) {
    const alphabet = {};
    let tallest = 0;
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i);
        alphabet[letter] = i;
    }
    for (let char of word) {
        let heightOfChar = h[alphabet[char]];
        tallest = Math.max(tallest, heightOfChar);
    }
    return tallest * word.length;
}

// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?
export function utopiaTreeGrowth(n){
    let height = 1 
    for(let num = 1; num <= n; num++){
        if(num % 2 === 0){
            height += 1
        }
        else{
            height += height
        }
    }
    return height;
}

// https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time () to arrived late ().

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
export function angryProfessor(k, a) {
    let onTimeOrEarlyCount = 0;
    for (let arrivalTime of a) {
        if (arrivalTime <= 0) {
            onTimeOrEarlyCount++;
        }
    }
    console.log(onTimeOrEarlyCount);
    console.log(k);
    return onTimeOrEarlyCount < k ? 'YES' : 'NO';
}