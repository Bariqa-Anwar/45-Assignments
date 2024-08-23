"use strict";
/*Q 121: Implement a for loop that counts 1 to 10 but skips number 5 using the continue statement.*/
// for (let i = 1; i <= 10; i++) {
//     if( i === 5){
//         continue;                //skip the rest of the loop for i = 5
//     }
//     console.log(i);   
// }
// //It demonstrate that how to use Continue to skip the specific Iteration
/*Q 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.*/
// //Initializes the counter at 10
// let counter: number = 10;
// //This while loop counts down from 10 to 1 andd stops at 5
// while (counter > 0 ) {
//     if (counter === 5){
//         break;
//         //Exits the loop when counter reaches 5
//     }
//     console.log(counter);
//     counter--;
//     //Decrements the counter
// }
/*Q 123: Create a loop that iterates through a string and stops when it finds the first vowel.*/
// function logUntilVowel ( str: string):void {
//     const vowels = "aeiouAEIOU";
//     for (const char of str){
//         if(vowels.includes(char)){
//             console.log(`First Vowel found: ${char}`);
//             break;
//         }
//         console.log(char);
//     }
// }
// logUntilVowel("syzygy");
/*Q 124:Create a function inside an object that return's the objects own name property using the this. keyword.*/
// let person = {
//     name: "John",
//     getName: function() {
//         return this.name
//     },
// };
// console.log(person.getName());
/*Q 125: Modify a method in an object to use the this keyword to access another property in the same object.*/
// let square = {
//         length: 3,
//         width: 6,
//         calculateArea: function () {
//             return this.length * this.width
//         }, 
// };       
// console.log(square.calculateArea());
/*Q 126: Explain how the this keyword changes its value when used inside a nested function within a method.*/
// const myObject = {
//     property: "Value",
//     outerFunc: function (){
//         console.log(this.property);
//         const innerFunc = () => {
//            console.log(this.property);
//         };
//         innerFunc();
//     },
// }
// myObject.outerFunc();
/*Q 127: Convert a traditional function expression to an arrow function.*/
// const traditionalFunction = function (a:number, b:number) {
//     return a + b;
// }
// const arrowFunction = (a:number, b:number) => a + b;
// console.log(traditionalFunction(6, 4));
// console.log(arrowFunction(6, 4));
/*Q 128: Create an Arrow function that takes multiple parameters and returns the product of all parameters.*/
// const multipleParameters = (...numbers: number[]) =>
//     numbers.reduce((total, number) => total * number, 1);
// console.log(multipleParameters(5, 3, 10));
/*Q 129: Explain how 'this' behaves differently in arrow functions compared to traditional functions.*/
// const traditionalVsArrow = {
//     value: "traditionalVsArrow value",
//  traditionalFunction: function () {
//         console.log("Traditional Function: ", this.value);
//     },
//     arrowFunction: () => {
//         console.log("Arrow Function:", this.value)
//     },
// };
// traditionalVsArrow.traditionalFunction();
// traditionalVsArrow.arrowFunction();
/*Q 130: Explain how to export a function from one JavaScript file and import it into another file.*/
// import { addition } from "./add";
// console.log(addition(4, 5));
/*Q 131: Create two modules; One that exports a class and another that imports the class and creates an instance.*/
// import { Person } from "./add";
// const john = new Person ("john");
// john.greet();
/*Q 132: Discuss the difference between default and named export in JavaScript.*/
// import { utilOne, utilTwo } from "./utils.js"
// import Calculator from "./add";
/*Q 133: Write a JavaScript object and convert it into a JSON string.*/
let myObject = {
    name: "Breeks",
    city: "A.W.Town",
    age: 23,
};
let jsonString = JSON.stringify(myObject);
console.log(jsonString);
