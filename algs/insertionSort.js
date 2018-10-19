
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        let j = i - 1;

        while (j > -1 && arr[j] > val) {            
            arr[j+1] = arr[j];
            arr[j] = val;
            j--;
        }
    }

    return arr;
}

console.log(insertionSort([1,2,9,5,1,6,3,1,8,1]))

function selectionSort(arr) {
    for (let i = 0; i<arr.length; i++) {
        
        let min = i;
        for (let j = i+1; j<arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        
        if (min != i) {
            swap(arr, i, min);
        }
    }

    return arr;
}

function swap(arr, i, j) {
    arr[i] = arr[i] - arr[j];
    arr[j] = arr[i] + arr[j];
    arr[i] = arr[j] - arr[i];
}

console.log(selectionSort([1,2,9,5,1,6,3,1,8,1]))
