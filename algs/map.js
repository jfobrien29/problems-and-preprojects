

// testing map()


const array = [1, 2, 3, 4, 5];

const val = array.reduce(function(accumulator, num) {
    return accumulator + num;
}, 0);

console.log(val);