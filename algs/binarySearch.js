// Javascript BinarySearch Implementation


function binarySearch(arr, val) {

    let middle = arr.length / 2;

    while (arr[middle] != val) {
        if (arr[middle] < val) {
            middle = middle - middle/2;
        }
        else {
            middle = middle + middle/2
        }
    }
    
    return arr[middle];
}