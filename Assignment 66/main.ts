/*Q 66: Logical And Verification: Create a function that checks two Boolean (true or false) values. It should say true if both
are true, using the && operator. For instance, checkBothTrue(true, false) should be false.*/

function checkBothTrue (value1:boolean, value2:boolean): boolean  {
    return value1 && value2
};
console.log(checkBothTrue(true, false));