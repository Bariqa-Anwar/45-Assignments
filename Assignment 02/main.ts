/*Q: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
 uppercase, and titlecase.*/

//Storing a person's name in a variable;

let personname:string = "baRaIqa";

// Printing the person's name in uppercase;

console.log(personname.toUpperCase());

// In lowercase

console.log(personname.toLowerCase());

//In Title case

console.log(personname.charAt(0).toUpperCase()+personname.slice(1).toLowerCase());
