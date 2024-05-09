/*Q:16 More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest
to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
/* Q: 15*/
// Firstly repeating the previous exercise
var my_guests = ["'Aunty,'", "'Uncle,'", "'Nephew,'", "'Buddy,'"];
var message = "Assalam-O-Alaikum";
for (var i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Guest who was absent
var absent_guest = "Uncle";
//Replacing the guest from a new guest
var new_guest = " Colleague";
my_guests[1] = new_guest;
//Second set of invitation
for (var i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Message for absent guest
console.log("My ".concat(absent_guest, " is not coming for the dinner"));
my_guests.unshift("'Areeb'");
my_guests.splice(3, 0, " 'Minha' ");
my_guests.push(" 'Ali' ");
for (var i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI have just found a bigger Dinner table. Please cherish my evening and this Dinner with your presence\nThankyou\n');
}
;
