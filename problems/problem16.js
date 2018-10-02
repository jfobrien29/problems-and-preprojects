// Problem 16
/*

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

    record(order_id): adds the order_id to the log
    get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.

- data structure needs to only store N ids
- If greater than N ids remove/overwrite an id
- Ability to add an order id to the data structure
- Ability to retrieve ith last element from the log

- Simple linked list implementation O(N) space, O(1) Add, O(N) retrieval
- Initialize array of size N, O(N) space, O(1) Add, O(1) retrieval

*/
/*

ex: N = 3;
backIndex = -1;
array = [0, 0, 0];

record(551);
backIndex = 0, array = [551, 0, 0];

record(771);
backIndex = 1, array = [551, 771, 0];

record(991);
backIndex = 2, array = [551, 771, 991];

record(352);
backIndex = 0, array = [352, 771, 991];

record(444);
backIndex = 1, array = [352, 444, 991];

retrieve(1) = 444; (array[1]) : backIndex - (0)
retrieve(2) = 444; (array[0]) : backIndex - (1)
retrieve(3) = 444; (array[2]) : (backIndex - (2)) + n
*/

class LogCache {
    constructor(N) {
        this.orderLog = [];
        for (let i = 0; i < N; i++) {
            this.orderLog.push(-1);
        }
        this.backIndex = 0;
        this.N = N;
    }

    record(order_id) {
        this.orderLog[this.backIndex] = order_id;
        this.backIndex = (this.backIndex+1) % N;
    }

    // Assume input i is in bounds 1 <= i <= N
    get_last(i) {
        if (i > this.backIndex) {
            return this.orderLog[this.backIndex + this.N - i];
        }
        else {
            return this.orderLog[this.backIndex - i];
        }
    }
}

const N = 4;
const logCache = new LogCache(N);
logCache.record(100);
logCache.record(200);
logCache.record(300);
logCache.record(400);

console.log(logCache.get_last(4))
console.log(logCache.get_last(3))
console.log(logCache.get_last(2))
console.log(logCache.get_last(1))

logCache.record(500);
logCache.record(600);

console.log()
console.log(logCache.get_last(4))
console.log(logCache.get_last(3))
console.log(logCache.get_last(2))
console.log(logCache.get_last(1))