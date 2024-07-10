/*Q 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties 
and values.*/

//     //This function shows every detail about an object

// function logObjectProperties (obj: object) {

//    for (let property in obj){

//     // Loops through each property in the object

//     console.log(`${property}: ${ [property]}`);
   
//     // shows the property name and its value

//    }
// }
//     // using the function with the previous car object
    
// logObjectProperties({ make: "Suzuki" , model: "Swift" , color: "Black" , year:2022});
//     // it tells each property stored about the car




/*Q 82: Find the length of a string: Write a function that takes a string as an argument and returns the number of characters
in the string.*/

//          //This function counts how many characters are in a string

// function stringLength ( name: string) : number {
    
//     return name.length;     // returns the number of characters in the string
// }
//         //Example : Measuring the length of a name

// console.log(stringLength("Bariqa"));         // Outputs : 6        




/*Q 83: Converting to Upper  and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase
and logs both.*/
//                    //Function that will take a string
// function convertCase ( str : string) {
//     let upperstr = str.toUpperCase();           //Converts to uppercase

//     let lowerstr = str.toLowerCase();           // Converts to lowercase

// console.log("Uppercase:", upperstr, "Lowercase:", lowerstr);
// }                                                // Example: Changing the case of "hello World"
// convertCase("Hello World");
//                                                  // Output will be Hello World in both upper and lower cases




/*Q 84: Replacing Text in a string: Write a function that takes a sentence and replaces all instances of the word "JavaScript"
 with "Typescript".*/
                            //This function swaps "Javascrit" with "Typescript" 

// function replaceJavaScriptWithTypescript ( sentence:string):string {
     
//     return sentence.replace(/JavaScript/g, "TypeScript");
// }                            // uses a regular expression with the 'g' flag for a global replacement

// //Example: Changing a programming language name in a sentence

// console.log(replaceJavaScriptWithTypescript("I love JavaScript, JavaScript is just amazing!"));

// //Outputs: "I love TypeScript, JavaScript is just amazing!"
// //Every "JavaScript" in the sentence changed to "TypeScript"




/*Q 85: Finding the Position of a Substring: Write a function that locates the first occurence of the word "code" within 
any given string and returns its position.*/

// //This function finds where "Typescript" first shows up in a text

// function findCodePosition ( str:string):number {

//     return str.indexOf("Typescript");

// }     // looks for word "Typescript" and tells where it is

// console.log(findCodePosition("I am learning to Code with Typescript."));

//      //Output: starts the position of "Typescript". It tells us the position number where the "code" is.




/*Q 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It
should return "true" if found, otherwise "false".*/

// //Creating a function that checks if the word "JavaScript" is present in a given string

// function hasJavaScript ( str: string): boolean {

//     return str.includes("JavaScript");         // The (.include) method checks "javascript" is present or not

// }                                              // if Yes then true will be print

// console.log(hasJavaScript("I really like coding in JavaScript!")); //Output will be true




/*Q 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.*/

//         //This function can take out first 10 characters from any text

// function extractFirstChars (str: string): string {

//     return str.substring(0, 10);     //gets characters from start to 10
// }
// console.log(extractFirstChars("I Love coding in JavaScript!"));   // shows first 10 characters in the output




/*Q 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number
rounded to the nearest integer.*/
                                  //This function rounds a decimal number to the nearest whole number
// function roundToNearestInteger ( num: number) :number {
    
//     return Math.round(num);        //Rounds the number
// }
// console.log(roundToNearestInteger(5.2));       // Output: 5

// console.log(roundToNearestInteger(2.9));        // Output: 3




/*Q 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts
it into an actual number type.*/
 
// //This function converts string to a number
// function convert_string_to_number ( str: string) :number {
 
//     return parseFloat(str);                  //Converts string to a number             
// }

// console.log(convert_string_to_number("123.45"));

// console.log(convert_string_to_number("98"));  //We're taking strings that look like numbers and turning them into actual numbers




/*Q 90: Checking if a value is NaN: Demonstrate how to check if a variable's value is NaN( Not a Number) and return 
a boolean result.*/
 
// //This function checks if a value is not a number (NaN)

// function isValueNaN ( value: any) :boolean {
//     return isNaN(value);
// }
// console.log(isValueNaN("Hello"));        //Output: True (because Hello is not a number

// console.log(isValueNaN(123));           //Output: False (because 123 is a number)