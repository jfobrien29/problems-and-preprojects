/*
This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
*/

function EditDistance(s1, s2) {
    return EditDistanceRecursion(s1, s2, 0);
}

function EditDistanceRecursion(s1, s2, dist) {
    if (s1.length == 0 && s2.length == 0) {
        return dist;
    }
    else if (s1.length == 0) {
        return dist + s2.length;
    }
    else if (s2.length == 0) {
        return dist + s1.length;
    }
    
    if (s1[0] === s2[0]) { 
        return EditDistanceRecursion(s1.slice(1), s2.slice(1), dist);
    }
    else {
        let replaceChar = EditDistanceRecursion(s1.slice(1), s2.slice(1), dist + 1);
        let insertChar = EditDistanceRecursion(s1.slice(1), s2, dist + 1);
        let deleteChar = EditDistanceRecursion(s1, s2.slice(1), dist + 1);
        return Math.min(replaceChar, insertChar, deleteChar);
    }
}

// console.log(EditDistance('kittens are', 'kittens arent'));
// console.log((new Array(10)).fill(new Array(6).fill(-1)));
let m = new Map()
m.set('a', 1)
m.set('b', 2)
m.set('c', 3)

// for (let [key, value] of m.entries()) {
//     console.log(`key ${key}, value ${value}`);
// }

// console.log(m.size);

let arr = ['a', 'b', 'c', 'd'];
for (let [i, value] of arr.entries()) {
    console.log(`key ${i}, value ${value}`);
}

console.log();