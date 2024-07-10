/*Q 51: Refactoring to Arrow Function: Take a simple function that calculates the area of ractangle and refactor it into an
arrow function.*/

function calculateArea ( width: number, height: number): number {
    return width * height;
}

let calculateAreaArrow = (width: number, height: number): number => width * height;

console.log(calculateAreaArrow( 4 , 8));