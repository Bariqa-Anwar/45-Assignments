/*Q12:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.”*/

//storing the examples in an array 

let fav_transportation : string[] = ["'Corolla'" , "'Bugatti'" , "'Ferrari'" , "'Land cruiser'"];

// Statement in a variable

let statement : string = "I would like to own a";

for (let i = 0; i < fav_transportation.length; i++) {
    console.log( statement + fav_transportation[i]);   
}
//This programme will print a series of statements