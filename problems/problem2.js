/*
Given an array of integers, return a new array such that each element at index i of the new array
 is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

let input = [1, 2, 3, 4, 5];

// Division allowed!
let totalValue = input.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
});

const newOutput = input.map(function(value) {
    return totalValue / value;
});

console.log("With division:    " + newOutput);


// Division not allowed!
let otherOutput = [];
for (let i = 0; i < input.length; i++) {
    let val = input[i];
    input.splice(i,1);
    otherOutput.push(input.reduce(function(accumulator, currentValue) {
        return accumulator * currentValue;
    }));
    input.splice(i,0, val);
}

console.log("Without division: " + otherOutput);