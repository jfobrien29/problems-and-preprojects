const input1 = '()())()';
const input2 = ')(';
const input3 = '))))()))(';



function minimumValidRemoval(parenthesesInput) {
    let parentheseToRemove = 0;
    let currentOffSet = 0;

    for (let i = 0; i < parenthesesInput.length; i++) {
        const currentParenthese = parenthesesInput.charAt(i);

        if (currentParenthese == '(') {
            currentOffSet++;
        }
        else if (currentOffSet == 0) {
            parentheseToRemove++;
        }
        else {
            currentOffSet--;
        }
    }

    return parentheseToRemove + currentOffSet;
}


console.log(minimumValidRemoval(input1));
console.log(minimumValidRemoval(input2));
console.log(minimumValidRemoval(input3));

