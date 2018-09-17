// Javascript MergeSort Implementation
// arr.slice(start, end) creates a new array from start to end exclusive!
// arr.concat returns new created array

// Split the array into halves and merge them recursively
function mergeSort(arr) {

    // BASE CASE
    // Will break all arrays down to size of 1 before merging
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);  // get the middle item of the array rounded down
    const left = arr.slice(0, middle);          // items on the left side
    const right = arr.slice(middle);            // items on the right side

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;


    // This while loop is the meat of the implementation
    // Assure both indexes are in range
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    // This is a sneaky hack, basically take what's left of arrays (only 1 will be full)
    // And append to result
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3, 12, 4];
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]