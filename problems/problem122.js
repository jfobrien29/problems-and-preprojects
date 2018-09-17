

// Given a string can delete at most k, return whether you can make a palindrome

// Similar to "edit distance" problem, execpt don't know center.

// Niave (most brute force I can think of) remove all combinations of letters until a palindrome is formed


/*
Example: 

s = abbac, k = 1
// iterate from both sides,
    // if characters are identical, continue
    // if not, recursively move forward 1 character in each direction and decrease k
*/




function canMakePalindrome(s, k) {
    let front = 0;
    let back = s.length-1;

    return isStillValid(front, back, k, s)
}

function isStillValid(front, back, k, s) {
    if (back < front) {
        return true;
    }

    if (s.charAt(front) === s.charAt(back)) {
        return isStillValid(front + 1, back -1, k, s);
    }
    else if (k == 0){
        return false
    }
    else {
        return isStillValid(front + 1, back, k - 1, s) || 
            isStillValid(front, back - 1, k - 1, s)
    }
}


console.log(canMakePalindrome('waterrfetawx', 2)); // true
console.log(canMakePalindrome('waterrfetawx', 1)); // false

console.log(canMakePalindrome('abbac', 0)); // false
console.log(canMakePalindrome('abbac', 1)); // true
console.log(canMakePalindrome('abbac', 2)); // true
console.log(canMakePalindrome('12abba', 2)); // true
