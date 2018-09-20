// Problem 42 daily coding problem

// array, k



function subsetAddsToK(arr, k) {

	const sets = powerSet(arr);

	for (const set of sets) {
		if (findSum(set) == k) {
			return set;
		}
	}

	return null;
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

const arr = [12, 1, 61, 5, 9, 2];

console.log(subsetAddsToK(arr, 24));
