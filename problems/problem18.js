// Problem 18
/*
This problem was asked by Google.

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

    10 = max(10, 5, 2)
    7 = max(5, 2, 7)
    8 = max(2, 7, 8)
    8 = max(7, 8, 7)

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

- Have given array of length n
- Create data structure of size k to calculate max of each sub array (O(k) space)
- Need to insert value, find max in O(1) time in order to solve in O(n) time
- Create index to current value 

*/ 

// function findMaxOfSubArraysLengthK(arr, k) {
//     for (let i = 0; i < arr.length - k + 1; i++) {
//         const subArray = arr.slice(i,k+i);
//         console.log(Math.max(...subArray));
//     }
// }

// findMaxOfSubArraysLengthK([10, 5, 2, 7, 8, 7], 3);
