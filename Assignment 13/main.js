"use strict";
/*Q:13 Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
// Making a list
let my_guests = ["'Aunty',", "'Uncle',", "'Nephew',", "'Buddy',"];
// Message that i would like
let message = "Assalam-o-Alaikum";
for (let i = 0; i < my_guests.length; i++) {
    console.log(message + my_guests[i] + ',\nI am inviting you for a dinner. \nThank you\n');
}
