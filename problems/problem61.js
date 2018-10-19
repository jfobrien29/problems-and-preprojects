function pow(x, y) {
    const memo = new Map();
    if (y < 0) {
        y *= -1;
        x = 1/x;
    }

    return powRecursive(x, y, memo);
}

function powRecursive(x, y, memo) {
    if (y == 0) {
        return 1;
    }
    else if (y == 1) {
        return x;
    }
    else if (memo.has(y)) {
        return memo.get(y);
    }
    console.log(y)
    const product = powRecursive(x, Math.floor(y/2), memo) * powRecursive(x, Math.ceil(y/2), memo);
    memo.set(y, product);
    return product;
}

console.log(pow(2, 100));