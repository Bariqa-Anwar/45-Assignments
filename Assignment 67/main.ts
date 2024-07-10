/*Q 67: Arithmetic with mixed Types: Write a function that takes two parameters: a number and a string that represents
a number (e.g, "5"). Return their sum as a number.*/

function addNumberAndString ( number1: number, numberString: string) : number{
    return number1 + Number(numberString);
}

console.log(addNumberAndString(10, "5"));