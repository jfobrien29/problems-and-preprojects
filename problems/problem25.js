// problem 25
/*
This problem was asked by Facebook.

Implement regular expression matching with the following special characters:

    . (period) which matches any single character
    * (asterisk) which matches zero or more of the preceding element

That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.

For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.

Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.
*/

// chat  -> .*at
// keep pointer in the reg exp for current char, iterate through
// at the same time iterate through the the given string
// if encounter *, enter while loop until next char = char after *
// once complete, exit loop.

// Note . matches ANY character
// * means 0->infinite

// .*at  ->   at, chat, gfsagfatgfdsat, atatat
// .at

// Input: string of arbitrary size, valid regex
// Output: true or false

function firstMatches(s, r) {
    return s[0] === r[0] || (r[0] === '.' && s.length > 0);
}

function match(s, r) {
    if (s.length === 0) {
        return r.length === 0;
    }

    // If not followed by *
    if (s.length == 1 || r[1] != '*') {
        if (firstMatches(s, r)) {
            return match(s.slice(1), r.slice(1));
        }
        else {
            return false;
        }
    }
    else { // if followed by a *
        // first try 0 chars
        if (match(s, r.slice(2))) {
            return true;
        }

        i = 0;
        while (firstMatches(s.slice(i), r) ) {
            if (match(s.slice(i+1), r.slice[2])) {
                return true
            }
            i++;
        }
    }
}

// console.log(match('at', 'at'));
// console.log(match('chat', '.*at'));

// console.log(stringMatchesRegex('at1', 'at'));
// console.log(stringMatchesRegex('at', 'at1'));
// console.log(stringMatchesRegex('cat', '.at'));

let sentence = 'hello world this is jack!'
console.log(sentence.split(' ').reverse().join(' '));