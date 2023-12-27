// Sync Programming in JavaScript

// Explanation:
// The exlaination of this Sync Programming in JavaScript is stated as the completion of execution of your program from top to bottom

// JavaScript code will always run from top to bottom and the code at the bottom will wait for the instructions to get completely executed.
// console.log("One ");
// console.log("Two ");
// console.log("Three ");

// ASync Programming in JavaScript

// Explanation:
// The exlaination of this ASync Programming in JavaScript is stated as the completion of execution of your program from top to bottom, but in this time any instruction or line of code which is taking a little bit more time (the code below that specific line , will not wait for that particular statement to get completed) . In Summary we can say that we can keep any program running in the background from top (for example), and the code which is below that line of code will complete it's execution and it will not wait for that above specific line of code to get completed

// JavaScript code will always run from top to bottom in Sync programming and the code at the bottom will wait for the instructions to get completely executed. Byt, in the Async programming approach the program will not wait for those lines of code at the top taking more time. It will keep running and will complete their execution
// console.log("One ");
// console.log("Two ");
// console.log("Three ");

// Now Let's talk a little bit about your Callback Functions SetTimeOut()

// function greet() {
//   let name = prompt("Enter Your Name");
//   console.log("Assalam o Alaikum", name);
// }

// setTimeout(greet, 6000); // timeout function , Means we can execute this specific program after a little buit delay from our end
// ("6000 is basically considered as the 6sec.");

// Shortcut method of writing the same above line of code by declaring the code in a single line

// console.log("One");
// console.log("Two");
// setTimeout(() => {
//     console.log("hello World");
// }, 6000); // Now I can say that I have declared this setTimeOut function in the same line , in a shortcut way, This program is just a specific function where we are letting our function to take it's time without any issue . But, In sync programming we are allowing the line of code below it , to run smoothly without waiting for it
// console.log("Three");
// console.log("Four");
// Now let's see what was happening in the above

// Call back Functions:
// Keep in mind that wehenever we call a function , into another function is basically considered as the callback fucntion.

// function sum(a, b) {
//   console.log("second");
//   return a + b;
// }

// function calculator(a, b, sumFunc) {
//   console.log("first");
//   return sumFunc(a, b);
// }

// let answer = calculator(4, 8, sum);
// console.log(answer);

// ShortCut method of writing the same code in a shorter way:

// function calculator(a, b, SumCallBack) {
//   console.log("first");
//   SumCallBack(a, b);
// }

// calculator(9, 8, (a, b) => {
//   console.log("second");
//   console.log(a + b);
// });

// let's revise a little bit about your setTimeout once again
// let hello = () => {
// console.log("Hello I have been called");
// };

// This "hello function" is a function and also called here as a callback in the set time out , because the definition of callback function is that If we call a function in another function is called as callback function

// "If we call a function in another function, it is called a callback function."
// setTimeout(hello, 4500);

// Callback Hell Complete Explanation:
// The nested call backs stacked below each other and forming a pyramid is actually calleda as the callback HTMLElement. It is really hard to understand and manage , that's why we always avoid using it

// To get rid of thsi call back hell problem we use promises concept in JavaScript

// Promise is an eventual completion of task. It is an object in JavaScript. This is actually a solution to our call back hell problem

// let promise = new Promise((resolve, reject) => {

// }); This is the syntax of promises in JavaScript

// MCQ's Question:
// Promise has basically three total states:
// 1) Pending State
// 2) Fulfilled State
// 3) Rejected State

// let promise = new Promise((resolve, reject) => {
//   console.log("Hello");
//   resolve("Hello ! I am Resolved");
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("Hello");
//   resolve("Hello ! I am Resolved");
// });
// let promise = new Promise((resolve, reject) => {
//   console.log("Hello");
//   reject("Rejected :(");
// });

// Detailed Explanation of Promises , to understand it better in our JavaScript

// let promise = new Promise((resolve, reject) => {
//   console.log("Hello I am inside the promise");
//   alert("I am an alert");

//   setTimeout(() => {
//     resolve("Promise has been resolved !!! ");
//     console.log(promise);
//   }, 4000);
// });

// Promise is a "Promise of code execution in JavaScript"

// The promise will must be fulfilled ((either it will be rejected or resolved)-> This is the basic explanation of promise fulfil)

// A little bit revision of our SetTimeOut function
// console.log("I am 1st");

// setTimeout(() => {
//   console.log("I am 2nd and I ran after a delay of 4sec");
// }, 4000);

// console.log("I am 3rd");
// console.log("I am 4th");
// console.log("I am 5th");

// Sync And Async Await
