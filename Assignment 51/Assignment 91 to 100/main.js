/*Q 91: Create an Array of your three favorite fruits and add a new fruit to the end of the array.*/
// //Array for favorite fruits in a variable
// let favorite_fruits: string[] = ["Mango" , "Banana" , "Apple"];
// // Adding a new fruit  at the end of the Array by using (.push) method
// favorite_fruits.push("Orange");
// console.log(favorite_fruits);
// //Output: [mango, banana, apple, orange]
/*Q 92: Write a function to remove the last element from an array and return the removed element.*/
// let fruits: string[] = ["Mango" , "Banana" , "Apple" , "Orange"]; //Array of favorite fruits
// //This function will remove and return the last element in the array
// function removeLastElement (fruits: string[]) {        
//     return fruits.pop(); 
// }
// console.log(removeLastElement(fruits));
// //Output will be (orange) that is removed and return
// console.log(fruits); // This will give the three fruits Array
/*Q 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".*/
// //This function finds "Banana" in the fruits array and replace it with "Mango"
// function replaceBananaWithMango ( fruits:string[]) :void {
//     const index = fruits.indexOf("Banana")
// if (index !== -1)                                   //checks if banana is not equal to -1 that means banana is found
// fruits[index] = "Mango";                           // print the mango by replacing banana
// }
// const my_fruits: string[] = ["Apple" , "Guava" , "Banana" , "Orange"];
// replaceBananaWithMango(my_fruits);                       //output: orange
// console.log(my_fruits);                                  //output2: array with mango and without banana
/*Q 94: Use the .map method to create a new array that contains the length of each word from an array of words. */
// let words: string[] = ["Typescript" , "Javascript" , "Python" , "CSS"];      //Array of words
// const lengths: number[] = words.map(words => words.length);            //The .map method will sum each of the characters in a word
// console.log(lengths);                                 
// //Output: (10 for "typescript", 10 for "JavaScript", 6 for "Python" and 3 for "CSS")
/*Q 95: Write a function that uses .filter method to return an array of numbers greater than 10.*/
// //Filtering an array of numbers
// const numbers: number[] = [5, 10, 15, 20,25];   
// //This function filters an array, keeping only numbers greater than 10
// function filterGreaterThan ( numbers: number[]): number[] {
//     return numbers.filter( number => number > 10);
// }
// console.log(filterGreaterThan(numbers));
// //Outputs: [15, 20, 25] new array of numbers by .filter method (greater than 10)
/*Q 96: Demonstrate how to use the .reduce mothod to calculate the sum of all numbers in an array.*/
// //Variable to store numbers
// const numbers: number[] = [1, 2, 3, 4, 5];
// //This function calculates the sum of all numbers in an array
// function calculateSum ( numbers: number[]):number {
//     return numbers.reduce((accumulator,  current) => accumulator + current);
// }
// console.log(calculateSum(numbers));          //Output: 15 (The sum of all numbers (1, 2, 3, 4, 5))
/*Q 97: Write a function that returns the current date in the format"DD-MM-YYY".*/
// //This function formats the current date as DD-MM-YYY
//  function getDateFormatted () {
//     const now   = new Date();
//     const day   = String(now.getDate()).padStart(2, '0');          //Ensures the date is 2 digits
//     const month = String(now.getMonth() + 1).padStart(2, '0');   //Adds 1 because months are 0-indexed
//     const year  = String(now.getFullYear());
//     return `${day}-${month}-${year}`;
//  }
//  console.log(getDateFormatted());           //output: Neatly prints Today's Date Format(DD-MM-YYY)
/*Q 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.*/
// //Calculates how many days are left until new year's day
// function daysUntilNewYear ():Number {
//     let today = new Date();                 //Stores todays date
//     let newYear = new Date(today.getFullYear() +1, 0, 1);     //January 1st of next year
//     let diff = newYear.getTime() - today.getTime();           //Difference in milliseconds
//     let days = Math.ceil(diff/(1000 * 60 * 60 * 24));
//     return days; 
// }
// console.log(daysUntilNewYear() + "\nDays until New Year.\n");   //Logs how many days are left until new year
/*Q 99: Generate a date object representing your next Birthday and log it to the console.*/
// //Generates a Date object for the next occurence of a specific birthday
// function getNextBirthday ( month:number, day:number):Date {
//     const today = new Date();
//     let year = today.getFullYear();
//     const Birthday = new Date(year, month - 1, day);     //months are 0-indexed
//     if (Birthday < today) {
//         Birthday.setFullYear(year + 1);
//     }
//     return Birthday;
// }
// const nextBirthday = getNextBirthday(3, 24);
// console.log("Next Birthday on:" , nextBirthday.toLocaleDateString());
/*Q 100: Use the JavaScript Math object to find the square root of 144.*/
//Find the square root of 144 by using Math.sqrt()
var squareRoot = Math.sqrt(144);
//Prints output: 12 
console.log(squareRoot);
