/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

// Solution
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));

// solution 2

/*
The code Array.from({length: n}, (v, i) => i + 1).map(v => v * x) is a concise way to create an array of the first n multiples of a given number x.

The logic flow and data transformation can be summarized as follows:
Create an empty array with n slots.
Fill the array with values from 1 to n.
Transform each value in the array by multiplying it with x.
This code is a concise and efficient way to generate an array of multiples without using explicit loops or conditional statements. It leverages the power of array methods like Array.from and map to achieve the desired result in a functional programming style.
 */

function countBy2(x, n) {
    return Array.from({length: n}, (v, i) => i + 1).map(v => v * x);
}

console.log(countBy2(1, 10));
console.log(countBy2(2, 5));