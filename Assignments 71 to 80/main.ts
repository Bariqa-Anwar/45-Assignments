/*Q 71: Compare "let" and "const": Create two examples where let allows reassignment but const does not. Try to reassign a const
-declared variable and catch the error.*/

 //Using 'let' for a variable that can be reassigned
//let age = 23;
//age = 24;                //Works fine cause let allows reassignment

//console.log(age);        // Will show 24

// Trying to reassign a const-declared variable
//const name = "John";
// try { name = "liza"}    // this line will cause an error
// catch error { 
 // console.log("Error: can't reassign a const-declared variable.");
//}                      // This example shows that const variable prevents changing the variable once its set;




/*Q 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both 'let and const'.
Shows how variables declared inside the block are not accessible outside of it.*/

// // Demonstrating block scope
// {
//   let blockLet = "Visible inside the block.";
  
//   let blockconst = "Also only visible inside the block.";

//   console.log(blockLet);                  // works fine here
//   console.log(blockconst);                // works fine here also
// }

// try {
//  // console.log(blockLet);                 // this will fail
// }  catch (error) {
//   console.log("blockLet is not accessible outside the block");
// }

// try{
//   // console.log(blockconst);
// }   catch (error) {
//   console.log("blockconst is also not accessible outside the block");
// };            // This shows that 'let' and 'const' keep variable safe in the block where they are defined




/*Q 73: Assigning and Updating Variables: Create a function where you declare a variable using 'let' and assign an initial value
within the same function and log both the initial and updated values.*/

// //This function shows how to assign and update variable values
// function updateVariable () {
//   let number = 5;

//   console.log("Initial value:", number);            // logs initial value

//   number = 15;                       
//   console.log("Updated value:", number);   // this will log updated value
// }
// updateVariable();                         // We assign a value to a variable and then updated it, showing how values can change.  




/*Q 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables 'a = 5' and 'b = 10',
then swap their values so that 'a' becomes '10' and 'b' becomes '5'.  */

// function swapValues () {                             // this function swap the values of two variables
  
//   let a = 5, b = 10;

// console.log("Before swap:a = ", a, "b =", b);        //logs the values before swap

// let tempValues = a;                                  // temporarily stores value of a 
// a = b;                                               // sets a to b's value
// b = tempValues;                                      // sets b to a's original value stored in temp

// console.log("After Swap:a =", a, "b =", b);          // logs the values after swap
// }
// swapValues();




/*Q 75: Compound Assignment Operators: Use compound assignment operators to simplify arithemetic operations. Start with 'x = 4' 
and perform a series of operations (addition, subtraction, multiplication and division) on x using compound operators.*/
// This function uses compound assignment operators for different operations

// function useCompoundOperators () {
//   let x = 4;         // starting with x = 4
//   console.log("Initial Value of x is:", x);

//   x += 2;          // adds 2 to x
//   console.log("After Addition:", x);

//   x -= 3;           // subtracts 3 from x
//   console.log("After Subtraction:", x);

//   x *= 4;          // multiplies x by 5
//   console.log("After Multiplication:", x);

//   x /= 2;           // divides x by 2
//   console.log("After Division:", x);
// }
// useCompoundOperators();     // we simplify arithemetic operstions on x by using compound assignment operators, like a shortcut




/*Q 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together and returns
the result. Show how you can call this function and log the result.*/

// // this function adds two numbers and give the result

// function addNumbers ( num1: number, num2: number):number {
//     return num1 + num2;
// }

// console.log(addNumbers(4, 5));         // calling function with two numbers and logging the result. The output will be '9'.




/*Q 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameters and say hello.
If no name is given, it should greet an anonymous user.*/

// // This function greets a user by name, or greets an anonymous user if no name is provided

// function greetUser ( name:string = "Anonymous") {

//     console.log(`Hello, ${name}!`);
// }

// //Trying the function with name and without name

// greetUser("Yusuf");             // Output here will be with name Yusuf
// greetUser();                    //Output here will be anonymous




/*Q 78: Function Expression VS Function Declaration: Compare function expressions and declarations by creating one of each that
performs the same task, such as squaring a number.*/

//                    // Function declaration for squaring a number

//        function squareDeclaration ( number: number): Number  {
//          return number * number;
//        }            
//                    // function expression for squaring a number

//     const squareExpression = function (number: number): Number {
//        return number * number;
//     }           
// console.log(squareDeclaration (5));

// console.log(squareExpression(5)); 

// // both functions give the same results, just showing the different ways to create functions that do the same thing.




/*Q 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for 'make, model and year'.
Then, show how you can access the 'model' property of the car.*/

// //This sets up an object for a car with specific properties

// let car = {
//     make: "suzuki",
//     model: "Swift",
//     year: 2022
// };

// //Here's how we can access the model property of the car by (.notation).

// console.log(car.model);





/*Q 80: Updating Object Properties: Add a property named 'color' to the existing car object and then update the 'year' property
to '2021'. Show how to perform these operations.*/

// //This is our car object property

// let car = {
//          make: "suzuki",
//          model: "Swift",
//          year: 2022,
//          color: "Black"                   //Adding a new property here in the object to prevent error
//         };

// // Here we are updating the 'year' and adding a 'color' property 

// car.color =  "Black";

// car.year = 2021;

// //Now showing the updated properties of the car object

// console.log(car);