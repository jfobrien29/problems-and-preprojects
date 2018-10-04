// Problem 29

function encode(s) {
    let encodedString = '';
    let index = 0;
    while (index < s.length) {
        let lastChar = s[index];
        let count = 0;
        while (s[index] == lastChar) {
            count++;
            index++
        }
        encodedString += lastChar + count
    }

    return encodedString;
}

console.log(encode('aaaaabb'))
console.log(encode('aabbccd'));

function decode(s) {
    let decodedString = '';
    for(let i = 0; i < s.length/2; i++) {
        char = s[i*2];
        num = Number(s[i*2+1]);
        decodedString += (new Array(num)).fill(char).join('');
    }
    return decodedString;
}

console.log(decode('d5'))
console.log(decode('d5a2X1'))


console.log(decode(encode('aabbccd')));
