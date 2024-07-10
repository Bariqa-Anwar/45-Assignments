/*Q 70: Understanding let in Loops: Write a function that uses a loop with the 'let' keyword to print numbers from 1 to 5.
Explain how the 'let' keyword affects the visibility of the loop variable.*/


//This function will print numbers(1 - 10) with 'let' by using a loop

function printNumbersWithLet () {

    for (let i = 1; i <=10; i++) {       // Uses let for loop varible 'i'
       
        console.log(i);                 // Logs numbers 1 through 10
    
    }                                  //"i" Here is not accessible here, outside the loop, because its defined with "let"

};

printNumbersWithLet();

// This shows that "let" limits "i" to the loop, preventing errors;
