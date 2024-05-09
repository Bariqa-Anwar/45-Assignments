/*Q:23 Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car: string = 'subaru';

//Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

//Test 2: Strict equality comparison (True)
console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru');

//Test 3: Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru');

//Test 4: Strict inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.")
console.log(car !== 'subaru');

//Test 5: Less than comparison (false)
console.log("Is car < 'subaru'? I predict False.")
console.log(car < 'subaru');

//Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predict False.")
console.log(car > 'subaru');

//Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.")
console.log(car <= 'subaru');

//Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.")
console.log(car >= 'subaru');

//Test 9: Checking truthiness (True)
console.log("Is car? I predict True.")
console.log(car); // (non empty string is true)

//Test 10: Checking falsiness (false)
console.log("Is car? I predict False.")
console.log(car); //(negation of a true value)







