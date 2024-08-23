/*Q 101: Generate a random integer between 1 and 10.*/

// //This function generates a random integer between 1 and 10

// function getsRandomInteger () :number {
//     return Math.floor(Math.random() * 10) + 1;
// }
// console.log(getsRandomInteger());

// //Outputs random integer between 1 and 10
// //This function shows random numbers within our range by combining Math.floor() and Math.random() method 




/*Q 102: Calculate and log the absolute difference between the number -5 and 5.*/

// //This function calculates the difference between the number -5 and 5
// function absoluteValue ():number {
//     return Math.abs(-5 - 5);
// }
// console.log(absoluteValue());
// //This line shows the absolute value of the difference between -5 and 5, ignoring the sign 


 

/*Q 103: Write a function that returns a random boolean value, true or false.*/

// //This function returns a random boolean value
// function randomBooleanValue () :boolean {
//     return Math.random() > 0.5;
// }
// console.log(randomBooleanValue());
// //Outputs either true or false randomly




/*Q 104: Create a function that generates a random hexadecimal color code.*/

// //This function generates a random hexadecimal color code
// function getRandomHexColor () :string {

//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');

//     return color;        //Returns the random color code
// }
// console.log(getRandomHexColor());
// //Outputs a Random number, convert it to hexadecimal and ensure it's 6 characters long.




/*Q 105: Stimulate a dice roll using JavaScript and return a random integer between 1 and 6.*/

//This function Stimulate a dice roll using JavaScript and return a random integer between 1 and 6

// function rollDice ():number {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(rollDice());
// //Outputs: a random number betwen 1 and 6




/*Q 106: Determine if a given year is a leap year using comparison operators.*/

// function isLeapYear (year:number): boolean {
    
//     if (year % 400 === 0) {
//         return true;
// //Divisible by 4,then its a leap year
//     }
//         else if( year % 100 === 0){
//         return false;                         
// //Divisible by 100 but not by 400 then its not a leap year
//     }
//     else if (year % 4 === 0){
//         return true;                             
// //Divisible by 4 but not by 100 then its a leap year
//     }
//     else{
//         return false;
// //Not divisible by 4 not a Leap year        
//     }
// };    
// const year = 2024;
// const result = isLeapYear(year);
// console.log(`${year} is a Leap Year: ${result}`); // Output: 2024 is a Leap Year: true



    
/*Q 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.*/

// //This function checks using logical operators that if a number is divisible by both 2 and 3
// function isNumberDivisibleByTwoAndThree (number:number) {
//     return number % 2 === 0 && number % 3 === 0;
// }
// console.log(isNumberDivisibleByTwoAndThree(12)); //Output: True
// console.log(isNumberDivisibleByTwoAndThree(14)); //Output: False




/*Q 108: Compare two Strings to check if they are identical, ignoring case sensitivity.*/

// function compareTwoStrings ( str1:string, str2:string) {
//     return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(compareTwoStrings ("hello","Hello"));
// console.log(compareTwoStrings ("world" , "Word"));




/*Q 109: Write an if statement that logs "Good Morning" if the current time is before 12pm.*/
   
// const currentTime = new Date();
    
// if (currentTime.getHours() < 12) {
//         console.log("Good Morning");
//     }




/*Q 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.*/

// //This function assign grades from A to F based on a student's score
// function assignGrades ( score:number) {
    
//     if ( score >= 90 ) {
//         return "A";
//     } else if ( score >= 80){
//         return "B";
//     } else if ( score >= 70){
//         return "C";
//     } else if ( score >= 60) {
//          return "D";
//     } else {
//         return "F";
//     }
// }
// console.log(assignGrades(85));   //Output: B grade
// console.log(assignGrades(55));   //Output: F grade