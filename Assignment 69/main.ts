/*Q 69: Divivding and finding Reminder: Write a function that divides two numbers and returns both the quotient and the
reminder. Use an object to return both values.*/

function divideAndReminder ( divident :number, divisor :number):{ quotient :Number; remainder :number} {
   
    let quotient = Math.floor(divident / divisor);

    let remainder = divident % divisor;

    return {quotient, remainder};
    
}

console.log(divideAndReminder(15, 2 ));