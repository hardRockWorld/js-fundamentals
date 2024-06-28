// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

/* 
Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// my - solution;
function descendingOrder(n) {
  return n < 0
    ? "Enter a positive number"
    : parseInt(
        Array.from(String(n), Number)
          .sort((a, b) => b - a)
          .join("")
      );
}

console.log(descendingOrder(267452));

// other-solutions
function descendingOrder1(n) {
  return n < 0
    ? "Enter a positive number"
    : parseInt(n.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder1(128986));
