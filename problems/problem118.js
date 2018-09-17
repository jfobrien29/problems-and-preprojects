// COMPLETED!

const input1 = [-9, -2, 0, 2, 3];
const input2 = [-9, -2, -1, 0, 4];
const input3 = [1, 2, 2, 3, 3, 3];

function squareAndSortArray1(inputArray) {
    const squaredArray = inputArray.map(x => x*x);   // n time
    return squaredArray.sort((a, b) => {             // nlgn
        return a - b;
    })
}
 
console.log(squareAndSortArray1(input1));
console.log(squareAndSortArray1(input2));
console.log(squareAndSortArray1(input3));


function squareAndSortArray2(inputArray) {
    // find positive portion of array ie point when inputArray[i] >= 0;
    // O(n) time
    let postiveIndex = 0;
    let negativeIndex = 0;
    for (const i in inputArray) {
        if (inputArray[i] >= 0) {
            postiveIndex = i;
            negativeIndex = i-1;
            break;
        }
    }

    // square elements in the array
    const squaredArray = inputArray.map(x => x*x);   // O(n) time

    // merge two sides of the array together (as in merge sort) // O(n) time
    const outputArray = [];
    for(let i = 0; i < squaredArray.length; i++) {
        if (negativeIndex < 0) {
            outputArray[i] = squaredArray[postiveIndex];
            postiveIndex++;
        }
        else if (postiveIndex >= squaredArray.length) {
            outputArray[i] = squaredArray[negativeIndex];
            negativeIndex--;
        }
        else {
            if (squaredArray[postiveIndex] < squaredArray[negativeIndex]) {
                outputArray[i] = squaredArray[postiveIndex];
                postiveIndex++;
            }
            else {
                outputArray[i] = squaredArray[negativeIndex];
                negativeIndex--;
            }
        }
    }

    return outputArray;
}

console.log()
console.log(squareAndSortArray2(input1));
console.log(squareAndSortArray2(input2));
console.log(squareAndSortArray2(input3));