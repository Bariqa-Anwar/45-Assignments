"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop
a name from your list, print a message to that person letting them know you’re sorry you can’t invite
them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure
you actually have an empty list at the end of your program.*/
//Starting with exercise 16
let my_guests = ["'Aunty,'", "'Uncle,'", "'Nephew,'", "'Buddy,'"];
let message = "Assalam-O-Alaikum";
//  for (let i = 0; i < my_guests.length; i++) {
//     console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');   
// }
//Guest who was absent
let absent_guest = "Uncle";
//Replacing the guest from a new guest
let new_guest = " Colleague";
my_guests[1] = new_guest;
//Second set of invitation
// for (let i = 0; i < my_guests.length; i++) {
//     console.log( message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
// }
//Message for absent guest
//console.log(`My ${absent_guest} is not coming for the dinner`);
//Adding new guests in the biginning, in the middle and in the end of guests list
my_guests.unshift("'Areeb'");
my_guests.splice(3, 0, " 'Minha' ");
my_guests.push(" 'Ali' ");
// for (let i = 0; i < my_guests.length; i++) {
//      console.log( message + my_guests[i] + ',\nI have just found a bigger Dinner table. Please cherish my evening and this Dinner with your presence\nThankyou\n');
//  };
//now for exercise 17//
console.log(`Hey everyone, feeling very sorry to inform you all that unfortunately i just found that my Dinner table
wont arrive on time. I have less space, suitable for just 2 people.`);
//deleting guests names 
while (my_guests.length > 2) {
    let remove_guests = my_guests.pop();
    console.log(`Sorry ${remove_guests}} you are not invited today for the Dinner. Please dont mind.`);
}
;
for (let i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\n You are still invited for Dinner.\nThankyou\n');
}
;
//now for empty list
my_guests.splice(0, 2);
console.log(my_guests);
