/*Q 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/

let mixedArray = [3, "Laptops", 4, "Languages", true, "Code"];

let stringsArray = mixedArray.filter( item => typeof item === "string");

console.log( stringsArray);
