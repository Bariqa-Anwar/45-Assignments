/*Q 111: Use an if-else chain to categorize a person's age group (child, teenager,adult).*/

// //This function categorizes a person's age group into 4 stages
// function categorizeAge(age:number) {
//     if (age < 13) {
//         return 'Child.';
        
//     } else if(age < 20){
//         return 'Teenager.';
    
//     } else {
//         return 'Adult';
//     };
// }
// console.log(categorizeAge(12));       //Outputs: Child
// console.log(categorizeAge(18));       //Outputs: Teenager
// console.log(categorizeAge(25));       //Outputs: Adult




/*Q 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.*/

// //Creates a new Map to store countries and their capitals

// let countries = new Map<string , string>();
// countries.set("Pakistan" , "Islamabad");
// countries.set("Turkey" , "Anycra");
// countries.set("Palestine" , "Jerusalem");

//console.log(countries);

// /*Outputs:Map(3) {
//     'Pakistan' => 'Islamabad',
//     'Turkey' => 'Anycra',
//     'Palestine' => 'Jerusalem'
//   }*/




/*Q 113: Write a function that checks if a Map contains a key for "Canada"and logs the Capital if it exists.*/

// function logCanadaCapital(map: Map<string, string>): void {
//     const country = "Canada";
//     if (map.has(country)) {
//         console.log(`The capital of ${country} is ${map.get(country)}`);
//     } else {
//         console.log(`${country} is not in the map.`);
//     }
// }

// // Example usage:
// const countryCapitals = new Map<string, string>();
// countryCapitals.set("Turkey", "Ankara");
// countryCapitals.set("Pakistan", "Islamabad");
// countryCapitals.set("Palestine", "Jerusalem");
// countryCapitals.set("Canada" , "Ottawa");

// logCanadaCapital(countryCapitals); // Output: Canada is not in the Map




/*Q 114: Iterate over a Map of student IDs and names, and ;log each pair to the console.*/

// //Creates a Map to store student IDs  (Keys) and names (values) 
// let students = new Map<number , string>();

// students.set(63 , "'Liza'");
// students.set(21 , "'Ali'");
// students.set(45 , "'Maaz'");

// //Iterate over a Map and logs student IDs and names
// students.forEach((name , id) => {
//     console.log(`Student ID: ${id} <===> Name: ${name}`);
// });




/*Q 115: Use a switch statement to log the days of the week based on a number (1 - 7).*/

// function logDaysOfTheWeek (dayNumber: number): void {
//    switch (dayNumber) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;  
//     case 7:
//         console.log("Saturday");
//         default:
//         console.log("Day's Number Invalid");
//         break;
//    } 
// }
// logDaysOfTheWeek(2);




/*Q 116: Create a switch case that matches several cases to the same code block, representing seasons.*/

//function logSeason (month: number): void {
    //     switch (month) {
    //         case 1:
    //         case 2: 
    //         case 3:
    //             console.log("Its Summer Season");
    //         break;
    //         case 4:
    //         case 5:
    //         case 6:
    //             console.log("Its Winter Season");
    //         break;
    //         case 7:
    //         case 8:
    //         case 9:
    //             console.log("Its Autumn Season");
    //         break;
    //         case 10:
    //         case 11:
    //         case 12:
    //             console.log("Its the spring");
    //         break;
    //         default:
    //             console.log("Invalid Month");
    //         break;
    //     }
    // }
    // logSeason(5);      //Outputs: Its Winter Season
    



/*Q 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match*/

// function evaluatesGrades (grades: string):void {
//     switch (grades) {
//         case "A":
//             console.log("Marvellous");
//             break;
//         case "B":
//             console.log("Good");
//             break;
//         case "C":
//             console.log("Fair");
//             break;
//         case "D":
//             console.log("Poor");
//             break;
//         default:
//             console.log("Invalid Grade");
//             break;
//     }
// }
// evaluatesGrades("E");    //Outputs: Invalid Grade




/*Q 118: Write a loop that logs numbers from 1 to 10 to the console.*/

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// };
//  // Each Iteration increases the value of i by 1, logging it until it reaches 10




/*Q 119: Create a While loop that logs "Hello World" 5 times.*/

// let number = 1;

// while (number < 6) {
//     console.log("Hello World");
//     number++
// }




/*Q 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.*/

// let favMovies: string [] = ["The Darkest Hour" , "John Wick" , "Twilight"];

// for (const movie of favMovies) {
//     console.log(movie); 
// }