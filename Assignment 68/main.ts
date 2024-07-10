/*Q 68: Multiplying Decimals: Create a function that accepts two decimal numbers and return their product. Round the result to
two decimal places.*/

function multiplyingDecimals ( num1: number, num2: number): number {
    return Math.round((num1 * num2)) * 100 / 100;
}

console.log(multiplyingDecimals(0.1, 0.2));