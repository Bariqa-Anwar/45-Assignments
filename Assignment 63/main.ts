/*Q 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including
properties unique to each shape.*/ 

type shape = {
    kind: "circle" | "rectangle" | "Square";
    radius?: number;    // for circle
    width?: number;      // for rectangle
    height?: number;     // for rectangle
};

let circle: shape = {
    kind: "circle",
    radius: 5,
};

let rectangle: shape = {
    kind: "rectangle",
    width: 15,
    height: 25
};

let Square: shape = {
    kind: "Square",
    width: 6,
    height: 12,
};
console.log(circle);
console.log(rectangle);
console.log(Square);
