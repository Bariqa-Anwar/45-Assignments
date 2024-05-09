/*Q 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information
and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the 
information was stored correctly.*/

function car_details (manufacturer:string, model:string, ...items:[string,any][]) {
    let car : {
        manufacturer_name:string, model_name:string, item:[string,any][]} = {
        manufacturer_name : manufacturer,
        model_name : model,
        item : items
    }
console.log(`\nManufacturer: ${manufacturer}`);
console.log(`Model: ${model}`);
items.forEach(([key,value])=>console.log(`${key}---->${value}`));
    return car;

}

car_details("Toyota","Corolla",["color","blue"],["year",2019]);
car_details("Suzuki","Cultus",["Torque","67HP"],["year",2023],["Capacity",4]);
car_details("Suzuki","Baleno",["Torque","77HP"],["year",2022],["Color","Red"]);
