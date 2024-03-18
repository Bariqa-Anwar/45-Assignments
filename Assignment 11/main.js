//Using the Arrays from Assignment 10 but now printing the messages instead of just names of friends from the list.
var friend_names = ["Bariqa", "Maria", "Nida", "Bushra", "Rooman", "Muskan"];
//This programme prints a message to all of the friends.
// for (let i = 0; i < friend_names.length; i++)
// {
// {console.log(`Salam ${friend_names[i]}, Hope you are you doing well.`)};
// }
for (var i = 0; i < friend_names.length; i++) {
    console.log("Salam ".concat(friend_names[i], ", Hope you are doing well."));
}
