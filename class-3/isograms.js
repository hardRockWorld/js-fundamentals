/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
  // convert string to lowercase
  str = str.toLowerCase();

  // create an empty set to store the unique chars of the string
  let uniqueChars = new Set();

  // iterate over each char in the string
  for (let char of str) {
    // if the char is not already in the set, add it to the set
    if (!uniqueChars.has(char) && char.match(/[a-z]/)) {
      uniqueChars.add(char);
    } else {
      // if the char is already in the set, return false
      return false;
    }
  }

  // after iteration over all the chars, check if the size of the set is equals to the length of the string
  return uniqueChars.size === str.length;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// or

function isIsogram2(str) {
  // Set is a collection of unique values, so we store the str-lowercase in a set to avoid duplicates
  return new Set(str.toLowerCase()).size == str.length;
}

console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2("aba"));
console.log(isIsogram2("moOse"));

// or

function isIsogram3(str) {
  return (
    str.length ===
    [...str.toLowerCase()]
      .map((c) => (new Set(str.toLowerCase()).has(c) ? 1 : 0))
      .reduce((a, b) => a + b, 0)
  );
}

console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2("aba"));
console.log(isIsogram2("moOse"));
