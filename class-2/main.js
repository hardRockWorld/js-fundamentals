// 1. Looping a triangle
// write a loop that makes 7 calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let tag = "#";

for (let i = 1; i <= 7; i++) {
  console.log(tag);
  tag += "#";
}

// another way to solve using while loop

let tag2 = "#";

while (tag2.length <= 7) {
  console.log(tag2);
  tag2 += "#";
}

// 2. Chessboard
// write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// passing the string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// hint: when you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

let size = 8;
let board = "";

for (let row = 1; row <= size; row++) {
  for (let col = 1; col <= size; col++) {
    if ((row + col) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// 3. Return Minimum of Two Numbers
// we have introduced the standard function (Math.min) that returns its smallest argument. we can build something like that now. write a function min that takes 2 args and returns their minimum.

const returnMin = (num1, num2) => {
  return num1 < num2 ? num1 : num2;
};

console.log(returnMin(10, 23));
console.log(returnMin(12, 12));
console.log(returnMin(26, 5));

// 4. Recursion
// We've seen that the % (modulo/remainder operator) can be used to test whether a number is even or odd by using %2, to see whether it is divisible by 2 or not. There is another way to define whether a positive whole number is even or odd.

// hint:
// zero is even
// one is odd
// two is even
// for any other number N, it's evenness is same as N-2

// Define a recursive function isEven corresponding to this above description. The function should accept a single parameter (a positive, whole number) and return a boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Why not? Write out the steps you'd need to take to make it work.

// my-solution

function isEven(num) {
  if (num >= 0) {
    // check if the number is 0, then return true by default else do something for other numbers
    if (num === 0) {
      return true;
    } else if (num === 1) {
      return false;
    } else {
      return isEven(num - 2);
    }
  } else {
    return "negative value";
  }
}

console.log(isEven(50) ? "50 is Even" : " 50 is Odd");
console.log(isEven(75) ? "75 is Even" : "75 is Odd");

// check it on -1?
console.log(
  typeof isEven(-1) === "string"
    ? "-1 is negative value"
    : isEven(-1)
    ? "-1 is Even"
    : "-1 is Odd"
);
// result: throws error => maximum call stack size exceeded, but why?
// because: since, we gave the -1 as parameter, then the 2 checks fail, for 0,1 and then it moves to the 3rd check where it meets the isEven recursive function which calculates the number -2
// so, we get like this: isEven(-1 - 2), which is equals to : isEven(-3), therefore, again the number becomes -3, instead of -1. which always increases to -5, -7, -9, etc due to recursion. So, it does not end the function, gets into a never ending function call, and only stops when the memory taps out.

// 5. Bean Counting
// You can get the Nth character, or letter, from a string by writing "String"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has the position 0, which causes the last character to be found at position string.length - 1. In other words, a two-character string has length 2, and it's characters have position 0 and 1.

// Write a function countBs which takes a string as it's only arg, and returns a number that indicates how many uppercase or lowercase "B"/"b" characters are there in the string.

// my-solution

const countBs = (myStr) => {
  let count = 0;

  for (let i = 0; i <= myStr.length - 1; i++) {
    if (myStr[i] === "B" || myStr[i] === "b") {
      count++;
    }
  }
  return count;
};

console.log(
  countBs(
    "This is my favorite book shop, and I like this business. Big Business Man!"
  )
);

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.

// my-solution

const countChar = (myStr, myChar) => {
  let count = 0;
  for (let i = 0; i <= myStr.length - 1; i++) {
    if (myStr[i] === myChar) {
      count++;
    }
  }
  return count;
};

console.log(
  countChar(
    "This is my favorite book shop, and I like this business. Big Business Man!",
    "B"
  )
);
