"use strict";
/* Q 54:Making Flexible Object Keys: Learn how to setup a list where you can change the name of each section based on
what you need at that moment, like adjusting labels based on user choices.*/
function createObjectWithDynamicKey(key, value) {
    let studentData = {};
    studentData[key] = value;
    return studentData;
}
let userPreference1 = createObjectWithDynamicKey("RollNO", "001");
let userPreference2 = createObjectWithDynamicKey("Name", "Bariqa");
let userPreference3 = createObjectWithDynamicKey("Standard", "8th");
console.log(userPreference1);
console.log(userPreference2);
console.log(userPreference3);
