"use strict";
/*Q 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including
properties unique to each shape.*/
let circle = {
    kind: "circle",
    radius: 5,
};
let rectangle = {
    kind: "rectangle",
    width: 15,
    height: 25
};
let Square = {
    kind: "Square",
    width: 6,
    height: 12,
};
console.log(circle);
console.log(rectangle);
console.log(Square);
