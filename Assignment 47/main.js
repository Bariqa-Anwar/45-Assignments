"use strict";
/* Q 47: Advanced Array Destructing: Given an array of objects representing different laptops, each with properties
'make, model and year, use array destructing to assign the first and second laptops to variables. Then, log these variables*/
let laptops = [
    {
        make: "Dell",
        model: "XPS 15",
        year: "2021"
    },
    {
        make: "HP",
        model: "spectre x360",
        year: "2021"
    },
    {
        make: "Lenovo",
        model: "CORE i5",
        year: "2009"
    }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
