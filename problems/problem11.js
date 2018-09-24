// Problem 11
/* 
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

// Initial thought, solve using a tree (trie?)
// Preprocess array such that we form a tree for each prefix
class Trie {
    constructor() {
        this.trie = {};
    }

    insertStrings(queryStrings) {
        this.trie.words = queryStrings;

        for (let queryString of queryStrings) {
            let curentBranch = this.trie;
            for (let c of queryString) {
                if (curentBranch.hasOwnProperty(c)) {
                    curentBranch = curentBranch[c];
                    curentBranch.words.push(queryString);
                }
                else {
                    curentBranch[c] = {};
                    curentBranch = curentBranch[c];
                    curentBranch.words = [queryString];
                }
            }
        }
    }

    retrieveStrings(s) {
        let curentBranch = this.trie;
        for (let c of s) {
            if (curentBranch.hasOwnProperty(c)) {
                curentBranch = curentBranch[c];
            }
            else {
                return [];
            }
        }

        return curentBranch.words;
    }
}

function autocomplete(s, queryStrings) {
    let trie = new Trie();
    trie.insertStrings(queryStrings);
    
    return trie.retrieveStrings(s);
}



console.log(autocomplete('a', ['ant', 'apple']));
console.log(autocomplete('de', ['dog', 'deer', 'deal']));