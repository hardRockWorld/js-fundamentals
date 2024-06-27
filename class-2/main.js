// Looping a triangle
// write a loop that makes 7 calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let tag = "#";

for (let i = 0; i < 7; i++) {
  console.log(tag);
  tag += "#";
}

// another way to solve using while loop

let tag2 = "#";

while (tag2.length <= 7) {
  console.log(tag2);
  tag2 += "#";
}
