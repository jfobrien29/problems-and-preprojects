

function flipsToConvert(a, b) {
    let bits = a^b;
    let count = 0;
    while (bits != 0) {
        count += bits & 1;
        bits = bits >>> 1;
    }
    return count;
}

console.log(flipsToConvert(29, 15));

console.log(flipsToConvert(-1, 15));