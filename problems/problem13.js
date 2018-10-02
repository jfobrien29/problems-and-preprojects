// Problem 13
/*
This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/


// s = 'abcba' k = 2, return 'bcb'


function largestSubstringWithKDistinctChar(s, k) {
    let currentLargestSubstring = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            let substring = s.slice(i, j);
            if (containsKDistinctChars(substring, k) && currentLargestSubstring.length < substring.length) {
                currentLargestSubstring = substring;
            } 

            console.log(substring);
        } 
    }

    return currentLargestSubstring;
}

function containsKDistinctChars(s, k) {
    const lettersMap = {};
    let count = 0;
    for (let c of s) {
        if (!lettersMap.hasOwnProperty(c)) {
            lettersMap[c] = true;
            count++;
        }
    }

    return count <= k;
}

console.log(largestSubstringWithKDistinctChar('abcba', 2));