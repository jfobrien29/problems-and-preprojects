/*
Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.
*/


function findSingleValue(arr){

    const map = {};
    for (let val of arr) {
        if(map.hasOwnProperty(val)) {
            map[val] += 1
        }
        else {
            map[val] = 1
        }
    }

    for (let key in map) {
        if (map[key] == 1) {
            return key;
        }
    }
    
    return null;
}

console.log(findSingleValue([1, 2, 1, 1]));
console.log(findSingleValue([6, 1, 3, 3, 3, 6, 6]));
console.log(findSingleValue([13, 19, 13, 13]));



function findSingleValue2(arr){

    let possibleIndex = 0;

    for (let val of arr) {
        
    }

}







