/*Q 55: Double Numbers in an Array: Make a list of numbers. Then use a trick to make a new list where each number is twice its
original value.*/
var numbers = [6, 7, 8, 9, 10];
var doubledNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubledNumbers);
