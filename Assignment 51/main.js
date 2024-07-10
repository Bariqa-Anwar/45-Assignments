"use strict";
/*Q 51: Refactoring to Arrow Function: Take a simple function that calculates the area of ractangle and refactor it into an
arrow function.*/
function calculateArea(width, height) {
    return width * height;
}
let calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(4, 8));
