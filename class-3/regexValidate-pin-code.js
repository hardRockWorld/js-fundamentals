/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// My solution

// using regex
function validatePin(pin) {
  if (pin.length === 4 || pin.length === 6) {
    return /^\d+$/.test(pin);
  } else {
    return false;
  }
}

// or
const validatePIN = (pin) => /^(\d{4}$|\d{6}$)/.test(pin);

// without regex:
function validatePin2(pin) {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  pin = pin.split("");

  if (
    pin.every((char) => digits.includes(char)) &&
    (pin.length === 4 || pin.length === 6)
  ) {
    return true;
  } else {
    return false;
  }
}

// or

function validatePIN(pin) {
  pin = pin.split("");
  const findNaN = pin.find((character) => !(parseInt(character) >= 0));
  if ((pin.length === 4 || pin.length === 6) && !findNaN) {
    return true;
  } else {
    return false;
  }
}
