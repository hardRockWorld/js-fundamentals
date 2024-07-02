/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// my-solution
function disemvowel(str) {
  return str
    .split("")
    .filter((char) => !/[aeiou]/i.test(char))
    .join("");
}

function disemvowel2(str) {
  return str
    .split("")
    .filter((char) => {
      return (
        char !== "a" &&
        char !== "A" &&
        char !== "e" &&
        char !== "E" &&
        char !== "i" &&
        char !== "I" &&
        char !== "o" &&
        char !== "O" &&
        char !== "u" &&
        char !== "U"
      );
    })
    .join("");
}

console.log(
  disemvowel2("No offense but,\nYour writing is among the worst I've ever read")
);

// or

const vowels = "aeiou";

function disemvowel3(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

console.log(
  disemvowel3("No offense but,\nYour writing is among the worst I've ever read")
);
