/*
This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/


function isValidBraces(braces) {
    let stack = [];

    for (let b of braces) {
        if (['{','[','('].includes(b)) {
            stack.push(b);
        }
        else {
            if (stack.length === 0) {
                return false;
            }

            let peek = stack[stack.length-1];
            if (peek == '{' && b == '}' || peek == '[' && b == ']' || peek == '(' && b == ')') {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(isValidBraces('()(){}[]'))
console.log(isValidBraces('[{]}'))
console.log(isValidBraces('[({})[(){}[]]{{{}}}]'))