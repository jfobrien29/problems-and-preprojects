// Problem 60 daily coding problem
// To test run $ node problem60.js

function canSumPartition(arr) {

	let sum = 0;
	arr.forEach((elm) => {
		sum += elm;
	});
	const target = sum/2;	

	const sets = powerSet(arr);

	for (const set of sets) {
		if (findSum(set) == target) {
			return true;
		}
	}

	return false;
}

function powerSet(s) {
	if (s.length === 0) {
		return [[]];
	}

	let removeVal = s[0];
	let newSet = s.slice(1);
	const result = powerSet(newSet);


	const combo = result.map((arr) => {
		return arr.concat(removeVal);
	});

	return result.concat(combo);
}

function findSum(arr) {
	let sum = 0;
	arr.forEach((elm) => {
		sum += elm;
	});

	return sum;
}

// const arr = [10, 5, 15];
// const arr2 = [15, 5, 20, 10, 35, 15, 10];
// const arr3 = [15, 5, 20, 10, 35];

// console.log('Expect true: ', canSumPartition(arr));
// console.log('Expect true: ', canSumPartition(arr2));
// console.log('Expect false: ', canSumPartition(arr3));


console.time('powerSet');

powerSet([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]);

console.timeEnd('powerSet');