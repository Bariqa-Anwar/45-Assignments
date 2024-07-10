"use strict";
/*Q 60: Self Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name
and age.*/
let userProfile = (function () {
    let name = "Maaz";
    let age = 29;
    return { displayInfo: function () {
            console.log(`Name: ${name} , Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
