/* Q: 15*/
// Firstly repeating the previous exercise
let my_guests: string[] = ["'Aunty,'" , "'Uncle,'" , "'Nephew,'" , "'Buddy,'"];
let message: string = " Assalam-O-Alaikum ";
 for (let i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');   
}
//Guest who was absent
let absent_guest: string = "Uncle";

//Replacing the guest from a new guest
let new_guest: string = " Colleague ";
my_guests [1] = new_guest;

//Second set of invitation
for (let i = 0; i < my_guests.length; i++) {
    console.log( message + my_guests[i] + ',\nI am inviting you for a Dinner.\nThankyou\n');
}
//Message for absent guest
console.log(`My ${absent_guest} is not coming for the dinner`);
