/*
This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
*/

function powerSets(arr) {
    if (arr.length === 0) {
        return [[]];
    }

    const firstElm = arr[0];
    const subPowerSet = powerSets(arr.slice(1));
    
    const subPowerSetWithFirst = subPowerSet.map((elm) => {
        return elm.concat(firstElm);
    });

    return subPowerSet.concat(subPowerSetWithFirst);
}

console.log(powerSets(['A', 'B', 'C', 'D']));
