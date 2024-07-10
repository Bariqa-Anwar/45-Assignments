/*Q:16 More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest
to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
/* Q: 15*/
// Firstly repeating the previous exercise
let myGuests: string[] = ["'Aunty,'" , "'Uncle,'" , "'Nephew,'" , "'Buddy,'"];
let my_message: string = "Assalam-O-Alaikum";
 for (let i = 0; i < myGuests.length; i++) {
    console.log(my_message + myGuests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');   
}
//Guest who was absent
let absentGuest: string = "Uncle";

//Replacing the guest from a new guest
let newGuest: string = " Colleague";
myGuests [1] = newGuest;

//Second set of invitation
for (let i = 0; i < myGuests.length; i++) {
    console.log( my_message + myGuests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Message for absent guest
console.log(`My ${absentGuest} is not coming for the dinner`);

//Adding new guests in the biginning, in the middle and in the end of guests list
myGuests.unshift("'Areeb'")
myGuests.splice(3,0," 'Minha' ")
myGuests.push(" 'Ali' ")

for (let i = 0; i < myGuests.length; i++) {
    console.log( my_message + myGuests[i] + ',\nI have just found a bigger Dinner table. Please cherish my evening and this Dinner with your presence\nThankyou\n');
};
