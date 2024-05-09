/*Q12:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.”*/
//storing the examples of some favorite transportation in an array 
var fav_transportation = ["'Corolla'", "'Bugatti'", "'Ferrari'", "'Land cruiser'"];
// Statement in a variable
var statement = "I would like to own a";
for (var i = 0; i < fav_transportation.length; i++) {
    console.log(statement + fav_transportation[i]);
}
//This programme will show the series of statemants by using "Loop"
