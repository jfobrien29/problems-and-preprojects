// Problem 136
/*

Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

[[1, 0, 0, 0],
 [1, 0, 1, 1],
 [1, 0, 1, 1],
 [0, 1, 0, 0]]

Return 4.

- NxM matix, not a square
- Niave approach, for each one encountered, check if next level of 1's explored
-  

*/

function FindLargestRectangleArea(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let largestArea = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++){
            largestArea = Math.max(largestArea, largestRectangle(i, j, matrix));
        }
    }

    return largestArea;
}

function largestRectangle(i_init, j_init, matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let largestArea = 0;
    let longestRow = m - j_init;
    let i = i_init;
    let j = j_init;

    while (i < n) {
        j = j_init;
        if (matrix[i][j] === 0) {
            return largestArea;
        }

        while (j < j_init + longestRow) {
            if (matrix[i][j] === 0) {
                longestRow = j - j_init;
                break;
            }
            j++;
        }
        let area2 = (i-i_init + 1)*longestRow;
        largestArea = Math.max(largestArea, area2);
        i++;
    }

    // console.log(i, largestArea)
    return largestArea;
}

let matrix1 = 
[[1, 1, 1, 0],
[1, 1, 1, 0]];

let matrix2 = 
[[0, 1, 1, 0],
[1, 1, 1, 0]];

let matrix3 = 
[[0, 0, 1, 1],
[0, 1, 1, 1]];

let matrix4 = 
[[1, 1, 1, 1],
[0, 1, 1, 0]];

let matrix5 = 
[[1, 1, 1, 1],
[0, 1, 1, 1],
[1, 0, 1, 1],
[1, 1, 1, 1],
[0, 1, 1, 1]];

// console.log(FindLargestRectangleArea(matrix1)); // 6
// console.log(FindLargestRectangleArea(matrix2)); // 4
// console.log(FindLargestRectangleArea(matrix3)); // 4
// console.log(FindLargestRectangleArea(matrix4)); // 4
// console.log(FindLargestRectangleArea(matrix5)); // 10


console.log(Number.max);
let arr = (new Array(20)).fill(0);
console.log(arr)