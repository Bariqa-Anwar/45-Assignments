"use strict";
/*Q 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other
number you give them later.*/
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(2);
console.log(addFive(10));
console.log(addFive(28));
console.log(addFive(8));
