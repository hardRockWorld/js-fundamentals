/* 
    Write a program that asks the user for a number, then shows the multiplication table for this number.
*/

// let number = prompt("What times table do you want?", 0);

// for (let i = 1; i <= 10; i++) {
//   let times = number * i;
//   console.log(`${number} * ${i} = ${times}`);
// }

// While you are done, improve the program so that it takes value between 2 and 9 (use the previous exercise as a blueprint)
// let userInput = 0;

// while (userInput < 2 || userInput > 9) {
//   userInput = prompt("Enter a number between 2 and 9", 0);
// }

// for (let i = 1; i <= 10; i++) {
//   let times = userInput * i;
//   console.log(`${userInput} * ${i} = ${times}`);
// }

// Neither 'yes' nor 'no'.
// Write a program that plays, "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
// let userAnswer = "";

// while (userAnswer !== "yes" && userAnswer !== "no") {
//   userAnswer = prompt("Enter 'yes' or 'no'");
// }

// Write a program that shows all the numbers between 1 to 100 with the following exceptions: It shows the "Fizz" instead if the number is divisible by 3. It shows "Buzz" instead if the number is divisible by 5 and not 3.
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//  When the above program is done, improve it so that the program shows "Fizz-Buzz" instead for numbers divisible by 3 and 5.

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz-Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
