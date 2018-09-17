

const input = 'hello world here';


function reverseWords(inputString) {
    let wordArray = inputString.split(' ');
    reverseArray = [];
    for (const word of wordArray) {
        reverseArray.unshift(word);
    }
    return reverseArray.join(' ');
}

console.log(reverseWords(input));


function reverseWordsInPlace(inputString) { 
    // Reverse all characters in the string
    for (let i = 0; i < inputString.length/2; i++) {
        let temp = inputString.charAt(i);
        inputString[i] = inputString.charAt(inputString.length - 1 - i);
        inputString[inputString.length - 1 - i] = temp;
    }

    inputString[0] = 'F';
    return inputString;
}

console.log(reverseWordsInPlace(input));
