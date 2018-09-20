// Problem 9
/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/


// base case [2, 3]
// answer 3, pick largest

// [1, 3, 1]
// answer 1

// [1, 2, 2]
// answer 3

function largestSum(arr) {
    let max1 = recurisiveLargestSum(0, arr, 0);
    let max2 = recurisiveLargestSum(1, arr, 0);

    if (max1 > max2) {
        return max1;
    }
    else {
        return max2;
    }
}

function recurisiveLargestSum(i, arr, max) {
    if (i >= arr.length) {
        return max;
    }

    max += arr[i];
    let max1 = recurisiveLargestSum(i+2, arr, max);
    let max2 = recurisiveLargestSum(i+3, arr, max);
    if (max1 > max2) {
        return max1;
    }
    else {
        return max2;
    }
}

console.log(largestSum([2, 4, 6, 2, 5]));
console.log(largestSum([1, 1, 1, 1, 1]));

