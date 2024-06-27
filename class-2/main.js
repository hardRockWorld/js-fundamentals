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
