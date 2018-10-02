function bitswap(b) {
    return (b & 0b10101010) >> 1 | (b & 0b01010101) << 1;
}
function printBinaryString(b) {
    let binaryString = ''
    for (let i = 7; i >= 0; i--){
        binaryString += b >> i & 1;
    }

    console.log(binaryString);
}

let binaryNum = 0b11011010;

printBinaryString(binaryNum);
printBinaryString(bitswap(binaryNum));