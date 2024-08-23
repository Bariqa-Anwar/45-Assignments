/*Q 141: Discuss the significance of the await reserved word in asynchronous JavaScript.*/

// async function fetchData() {
//     const data = await fetchData();
//     console.log(data);
// }

// console.log(
//     "The 'await' keyword allows asynchronous, promise based behaviour to be written in a cleaner, more linear fashion."
// );





/*Q 142: Create a Promise that resolves with "Hello World!" after 2 seconds.*/

// const helloPromise = new Promise<string>((resolve) => {

//     setTimeout(() => {
//         resolve ("Hello , World!");
//     }, 2000);
// });
// helloPromise.then((message) => console.log(message));





/*Q 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.*/

// const conditionalPromise = new Promise<string>((resolve, reject)=> {
    
//     const success = Math.random() > 0.5;

//     if (success){
//         resolve("Success!");
//     } else {
//         reject(new Error ("Failure"))
//     }
// });

// conditionalPromise
// .then((result) => console.log(result));

// .catch((error) => console.log(error.message));





/*Q 144: Explain the use of the Promise.all() method with an example.*/

// const promise1 = Promise.resolve(3);
// const promise2 = 42;

// const promise3 = new Promise<string>((resolve) => {
//     setTimeout(resolve, 100, "foo");
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });





/*Q 145: Create a function that accepts a callback and invoke it with some arguments.*/

// function executeCallback (
//     callback: (arg1: number , arg2: number) => void,
//     arg1: number,
//     arg2: number
// ): void {
//     callback(arg1, arg2);
// }
// const add = (a:number, b:number) => {
//     console.log(a + b);  
// };
// executeCallback(add, 5, 8);





/*Q 146: Show an example of a callback function used to filter an array of numbers.*/

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNumbers: number[] = numbers.filter((number) => number > 5);

// console.log(filteredNumbers);





/*Q 147: Explain how to handle errors in a callback pattern.*/

// function fetchData(
//     callback: (error: Error | null, data?: string) => void
// ):void {
//     const error = new Error("Failed to fetch data");
//     const data ="Some data";

//     if (Math.random() > 0.5){
//         callback(null, data);
//     } else{
//         callback (error);
//     }
// }
// fetchData((error, data) => {
//     if(error){
//         console.error(error.message);
//     } else {
//         console.log(data);
//     }
// });






/*Q 148: Demonstrate the use of the setTimeout() function to execute code after a delay.*/

// setTimeout(() => {
//     console.log("This message is shown after a 2-second delay.");
// }, 2000);





/*Q 149: Explain the concept of the event loop in JavaScript with an example.*/

// console.log("Start");

// setTimeout(() => {
//     console.log("Callback executed");
// }, 0);
// console.log("End");






/*Q 150: Describe how asynchronous callbacks differ from synchronous code execution.*/

// //Synchronous example
// console.log("Before synchronous operation");

// for (let i = 0; i < 1e9; i++){}
// console.log("After synchronous operation ");

// //Asynchronous example
// console.log("Before asynchronous operation");
// setTimeout(() => {

//     console.log("Asynchronous operation completed");
// }, 1000);

// console.log("After asynchronous operation setup");