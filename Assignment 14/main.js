"use strict";
/*Q14:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program
stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.my_guests = void 0;
//Repeating the previous exercise
let my_guests = ["'Aunty,'", "'Uncle,'", "'Nephew,'", "'Buddy,'"];
exports.my_guests = my_guests;
let message = "Assalam-O-Alaikum";
for (let i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Guest who was absent
let absent_guest = "Uncle";
//Replacing the guest from a new guest
let new_guest = "Colleague";
my_guests[1] = new_guest;
//Second set of invitation
for (let i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Message for absent guest
console.log(`My ${absent_guest} is not coming for the dinner`);
