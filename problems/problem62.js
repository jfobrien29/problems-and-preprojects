function WaysToCorner(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        matrix[i][0] = 1;
    }

    for (let j = 0; j < m; j++) {
        matrix[0][j] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
        }
    }

    return matrix[n-1][m-1];
}

let arr = (new Array(5)).fill(new Array(5).fill(0));
console.log(WaysToCorner(arr));