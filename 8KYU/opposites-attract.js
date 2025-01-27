/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

 */

// Solution
function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0) ? true : false;
}

console.log(lovefunc(2, 2));
console.log(lovefunc(2, 3));
console.log(lovefunc(3, 3));


// simplify a bit
function lovefunc1(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}

console.log(lovefunc1(2, 2));
console.log(lovefunc1(2, 3));
console.log(lovefunc1(3, 3));

// more simplify
function lovefunc2(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc2(2, 2));
console.log(lovefunc2(2, 3));
console.log(lovefunc2(3, 2));