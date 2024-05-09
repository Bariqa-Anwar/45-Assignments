"use strict";
/*Q:24 More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to

• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
//     "String equality tests"
let program = "typescript";
console.log("Testing string equality");
console.log(program == "typescript"); // true
console.log(program == "Typescript"); // false
//Test 2: Lower case
console.log("Testing with Lowercase");
console.log("TYPESCRIPT".toLowerCase() == "typescript"); // true
// Test 3: Numerical tests
console.log("Testing the numericals");
//less than //true
console.log(2 < 4);
//greater than //false
console.log(2 > 4);
// equality // true
console.log(2 == 2);
// inequality // false
console.log(2 !== 2);
//less than equal to // true
console.log(2 <= 4);
//greater than equal to //false
console.log(2 >= 4);
//Test 4:  Using 'and' and  'or' operators
console.log("Tests using and/or operators");
console.log(true && false);
console.log(true || false);
let berries = ["blueberry", "rassberry", "strawberry"];
//Test 5: Item is in a array (true)
console.log("Is 'strawberry' in berries?");
console.log(berries.includes("strawberry"));
//Test 6: Item is not in a array (true)
console.log("Is 'blackberry' not in berries?");
console.log(!berries.includes("blackberry"));
