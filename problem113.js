

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