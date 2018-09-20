// Problem 7

/*
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/


function waysToDecode(encodedMessage) {
    return recursiveCount(0, encodedMessage)
}

function recursiveCount(i, encodedMessage) {
    if (encodedMessage.charAt(i) == '0') {
        return 0;
    }

    if (i >= encodedMessage.length - 1) {
        return 1;
    }

    // if a 1 diverge two ways
    // AKA count the number as its self and the number following 
    if (encodedMessage.charAt(i) == '1') {
        return recursiveCount(i+1, encodedMessage) + recursiveCount(i+2, encodedMessage);
    }
    else if (encodedMessage.charAt(i) == '2' && encodedMessage.charAt(i+1).match('[0-6]')) { 
        return recursiveCount(i+1, encodedMessage) + recursiveCount(i+2, encodedMessage);
    }
    else {
        return recursiveCount(i+1, encodedMessage);
    }
}

console.log(waysToDecode(''))
console.log(waysToDecode('111'))
console.log(waysToDecode('262'))
console.log(waysToDecode('272'))
console.log(waysToDecode('0272'))
console.log(waysToDecode('60272'))
console.log(waysToDecode('10272'))