"use strict";
/*Q 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks and mototrcycles using enums,
and show one example. */
var vehiclesType;
(function (vehiclesType) {
    vehiclesType[vehiclesType["Cars"] = 0] = "Cars";
    vehiclesType[vehiclesType["Trucks"] = 1] = "Trucks";
    vehiclesType[vehiclesType["mototrcycles"] = 2] = "mototrcycles";
})(vehiclesType || (vehiclesType = {}));
;
console.log(vehiclesType.Trucks);
