/*Q 91: Create an array of your three favorite fruits and add a New fruit to the End of the array.*/

// //Aarray of three favorite fruits
// let favoriteFruits: string[] = ["Mango" , "Guava" , "Orange"];

// //This method will add a new fruit at the end of the array
// favoriteFruits.push("Banana");

// console.log(favoriteFruits);
// //Output will be: ["Mango" , "Guava" , "Orange" , "Banana"]




/*Q 92: Write a function to remove the last element from an array and return the removed element.*/

// //Function to remove the last element from an array
// function removeLastElement ( arr: string[]) {

//     return arr.pop();//removes the last element from an array
// }

// //Array of the fruits 
// let favoriteFruits: string[] = ["Mango" , "Guava" , "Orange" , "Banana"];

// console.log(removeLastElement(favoriteFruits));




/*Q 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".*/

// //Array of fruits
// function replaceBananaWithMango (fruits: string[]):void {

//     //this will find the index of banana
//     let index = fruits.indexOf("Banana");

//     //This will replace banana with mango
//     if (index !== -1){
//         fruits[index] = "Mango";
//     }
// }
// let fruits: string[] = ["Cherry" , "Banana" , "Guava"];

// replaceBananaWithMango(fruits);
// console.log(fruits);




/*Q 94: Use the .Map method to create a new array that contains the length of each word from an array of words.*/

// //Array of words
// let words:string[] =["Hello" ,"World" , "TypeScript" , "JavaScript"];

// //Using .map method to create a new array
// let lengths:number[] = words.map(words => words.length);

// //Each number in the array represents the length of the corresponding word in original array
// console.log(lengths);




/*Q 95: Write a function that uses the .filter method to return an array of numbers greater than 10.*/

// //function that uses the .filter method to return an array of numbers greater than 10
// function filterGreaterThan10 (numbers : number[]): number [] {

//     //filtering an array of numbers
//     return numbers.filter( number => number > 10);   
// }
// let numbers: number[] = [2, 8, 9, 11,15, 20, 25];

// console.log(filterGreaterThan10(numbers));
// //output: [ 11, 15, 20, 25 ]




/*Q 96: Demonstrate how to use the .reduce method to calculate the sum of all numbers in an array.*/

// function calculateSum (numbers:number[]) :number {

//     return numbers.reduce((accumulator, current) => accumulator + current, 0);
// }
// let numbers: number[] = [1, 2, 3, 4, 5];

// console.log(calculateSum(numbers));




/*Q 97: Write a function that returns the current date in the formatb"DD-MM-YYYY".*/

// function getCurrentDateFormatted ():string {
//     const now = new Date();
//     const day = String(now.getDate()).padStart(2,'0');
//     const month = String(now.getMonth()+ 1).padStart(2, '0');
//     const year = now.getFullYear();
//     return `${day}-${month}-${year}`;
// }
// console.log(getCurrentDateFormatted());




/*Q 98: Create a JavaScript Snippet that calculates and logs how many days are left until New year.*/

// function daysUntilNewYear (){
//     const today = new Date();
//     const newYear = new Date(today.getFullYear() + 1, 0, 1);
//     const diff = newYear.getTime() - today.getTime();
//     const days = Math.ceil(diff / (1000 * 60 * 60 *24));
//     return days;
// }

// console.log(daysUntilNewYear() + " days until New Year.");




/*Q 99: Generate a date object representing your next birthday and log it to the console.*/

// function getNextBirthday (month: number, day: number):Date {
//     const today = new Date();
//     let year = today.getFullYear();
//     const birthday = new Date(year, month - 1, day);
//     if (birthday < today) {
//         birthday.setFullYear(year + 1);
//     }
//     return birthday;
// }
// const nextBirthday = getNextBirthday(24,3);

// console.log("Next Birthday on: ", nextBirthday.toLocaleDateString());





/*Q 100: Use JavaScript Math object to find the Square root of 144.*/

// const SquareRoot:number = Math.sqrt(144);

// console.log(SquareRoot);