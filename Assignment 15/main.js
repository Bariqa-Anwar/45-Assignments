"use strict";
/* Q: 15*/
// Firstly repeating the previous exercise
let my_guests = ["'Aunty,'", "'Uncle,'", "'Nephew,'", "'Buddy,'"];
let message = " Assalam-O-Alaikum ";
for (let i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Guest who was absent
let absent_guest = "Uncle";
//Replacing the guest from a new guest
let new_guest = " Colleague ";
my_guests[1] = new_guest;
//Second set of invitation
for (let i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Message for absent guest
console.log(`My ${absent_guest} is not coming for the dinner`);
