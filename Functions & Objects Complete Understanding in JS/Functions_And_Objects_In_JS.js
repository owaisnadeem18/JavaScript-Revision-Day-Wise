// There are two types of functions in Our JavaScript

// 1. JavaScript Built-in Functions
// 2. JavaScript User-defined Functions

// function print_name() {
//   console.log("My name is Owais Nadeem");
// }

// print_name(); // invoking or calling a function
// function printMessage(msg){ // this msg is an input parameter
//   console.log(msg);
// }

// printMessage("Hy ! How are u ?"); // This text inside function call of printMessage() is called as argument in our function
// printMessage("Hy ! I am doing good , what about you ?");  // This text inside function call of printMessage() is called as argument in our function
// printMessage("Keep coding and keep growing ");  // This text inside function call of printMessage() is called as argument in our function

// Write a function of sum in our JavaScript

// function sum(a, b) {
//   // (a , b) are the parameters
//   let c = a + b; // All these variables are local , inside your JavaScript function
//   return c;
// }

// console.log(sum(4, 7)); // (a , b) are the arguments
// console.log(sum(14, 72)); // (a , b) are the arguments
// console.log(sum(19, 3)); // (a , b) are the arguments

// Arrow Function In Modern JavaScript

// We have to write an addition and multiplication Formula of Numbers Using Modern JavaScript Arrow Fucntions

// Addition Formula
// const SumArrow = (a, b) => {
//   // a , b are the parameters here for you
//   console.log(a + b);
// };

// SumArrow(4, 8);

// Multiplication Formula
// const multArrow = (c, d) => {
//   console.log(c * d);
// };

// multArrow(4, 9);

// For Division

// const DivisionArrow = (c, d) => {
//   let Division = c / d;
//   if (d == 0) {
//     console.log("0 can't be divided by any number");
//   } else {
//     console.log(Division);
//     return Division;
//   }
// };

// DivisionArrow(30, 10);
// We sue arrow fucntion when we haev not too much long tasks to perform in our JavaScript

// If we have to print a single line using our code then we can also use a shortcut method of
// const print_Func = () => console.log("Hellow World !!! ");

// For Each Loop : To passing a value of a function to the (For Each Loop)

// let sumFunc = (a, b) => {
//   console.log(`The Value of 'a' is = ${a}`);
//   console.log(`The Value of 'b' is = ${b}`);
//   console.log(`The sum of two numbers ${a} and ${b} is = ${a + b}`);
//   //   return a + b;
// };

// // console.log(sumFunc(4, 8));
// sumFunc(5, 8);

// let arr = [5, 9, 3];

// let functArrow = (arr) => {
//   return arr * arr;
// };

// console.log(functArrow(arr));

// // now let's suppose that I pass this value to my ForEach Loop
// // let arr.forEach(element => {

// // });

// For Each Loop:
// We use for Each loop on an array , when we are required to perform each and everytask indivsually on array elements

// let numArray = [9, 5, 3, 5, 2];

// numArray.forEach(function Acces_Num_Array(val) {
//   console.log(val);
// });

// Or
// numArray.forEach((check_It) => {
//   console.log(check_It);
// });

// For Example , I want to check data types of indivsual elements of my array

// numArray.forEach((check_It) => {
//   console.log(check_It);
//   console.log(typeof check_It.toString());
// });

// Callbacks of For Each Loop
// For Each Method could only be used for our arrays

// Let's revise the syntax of our ForEach Loop

// anyArray = ["ex...1", "ex...2", "ex...3", "ex...4", "ex...5"];

// anyArray.forEach("your Complete function")
// for example:

// anyArray.forEach(function (func_To_Print_Indivisual_Array_elements) {
//   console.log(func_To_Print_Indivisual_Array_elements);
// });

// cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// cities.forEach((check, index, arr) => {
//   console.log(check, index, arr);
// });

// Question: Given an array of numbers, use the splice method to remove the element at index 2 and replace it with the number 99.

let numbersArray = [10, 20, 30, 40, 50];

function remove_number(numbersArray) {
  return numbersArray.splice(2, 1, 99);
}

let print = remove_number(numbersArray);

console.log(numbersArray);
