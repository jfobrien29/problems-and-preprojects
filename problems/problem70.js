

function nthPerfectNumber(n) {
    if (n <= 0 ) { return null; }
    if (n == 1 ) { return 19; }
    n--;
    const numArray = [1, 9];

    while (n > 0) {
        findNextNumber(numArray);
        n--;
    }

    return parseInt(numArray.join(''));
}

function findNextNumber(numArray) {
    let subtractIndex = numArray.length - 1;
    while (numArray[subtractIndex] == 0) {
        subtractIndex--;
    }
    numArray[subtractIndex]--;

    addIndex = subtractIndex-1;
    if (numArray[addIndex] == 9) {
        numArray[addIndex] = 0;
        numArray.unshift(1);
        numArray[numArray.length - 1] = 9;
    }
    else {
        numArray[addIndex] += 1;
    }
}


for (let i=0; i< 25; i++){
    console.log(nthPerfectNumber(i))
}