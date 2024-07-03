/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

// Solution 1
function grow(x) {
    let result = 1;
    for (let i = 0; i < x.length; i++) {
        result *= x[i];
    }
    return result;
}

console.log(grow([1, 2, 3, 4, 5, 0]));

// using reduce
function grow2(x) {
    return x.reduce((a,b) => a * b);
}

console.log(grow([1, 2, 3, 4, 5, 0]));

// single liner reduce
const grow3 = (x => x.reduce((a, b) => a * b));

console.log(grow([1, 2, 3, 4, 5, 0]));