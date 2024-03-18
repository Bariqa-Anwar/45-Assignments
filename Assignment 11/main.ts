/*Q: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same,
  but each message should be personalized with the person’s name.*/

//Using the Arrays from Assignment 10 but now printing the messages.

let friend_names:string[] = ["Bariqa" , "Maria" , "Nida" , "Bushra" , "Rooman" , "Muskan"];


for (let i = 0; i < friend_names.length; i++) 
{
console.log(`Salam ${friend_names[i]}, Hope you are doing well.`);
} 