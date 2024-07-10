"use strict";
/*Q 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that
check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favorite_fruits = ["'Mango'", "'Apple'", "'Guava'"];
if (favorite_fruits.includes("'Mango'")) {
    console.log("I really like Mangoes.");
}
if (favorite_fruits.includes("'Apple'")) {
    console.log("I really like Apples");
}
if (favorite_fruits.includes("'Guava'")) {
    console.log("I really like Guava.");
}
if (favorite_fruits.includes("'Pear'")) {
    console.log("I dont like Pears");
}
if (favorite_fruits.includes("'Orange'")) {
    console.log("I dont like oranges that much.");
}
;
