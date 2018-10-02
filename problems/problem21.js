// Problem 21

function createArrayOfZeros(n) {
    let arr = [];
    for (let i = 0; i < 72; i++) {
        arr.push(0);
    }

    return arr;
}

function findNumberOfRoomsNeeded(intervals) {
    let overlapArray = createArrayOfZeros(72);

    for (let interval of intervals) {
        let start = Math.floor(interval[0]/10);
        let end = Math.floor(interval[1]/10);

        for(let i = start; i < end; i++) {
            overlapArray[i]++;
        }
    }

    return overlapArray.reduce((max, curr) => Math.max(max, curr));
}



// console.log(findNumberOfRoomsNeeded(interval1));
// console.log(findNumberOfRoomsNeeded(interval2));


// let interval1 = [[30, 75], [0, 50], [60, 150]];
// let interval2 = [[30, 75], [0, 50], [60, 150], [30, 50]];

// let k = {
//     1 : 6,
//     2 : 4,
//     3 : 3
// }

// console.log(4 in k);

// let arr = new Array(72).fill(1);
// console.log(arr.reduce((max, curr)=>{return Math.min(max, curr)}));

let arr = [1, 2, 3, 4, 5];

arr2 = arr.reduce(
    (acc, val, i) => { 
        acc.push((i > 0) ? val + acc[i-1] : val)
        return acc; 
    },
    []
);

console.log(arr2);

let test = {
    h : '1',
    d : 'j',
    j : 'j'
}

Object.keys(test).forEach((key) => console.log(key));