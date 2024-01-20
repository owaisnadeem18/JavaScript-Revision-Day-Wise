// Interview Question:
// How we can get a dynamic object

// Let's see an example:

// let myName = "Owais";

// let bioData = {
//   [myName]: "Owais", // we can use [] this kind of braces , if we ever want to get the dynamic object in JavaScript
//   myAge: 22,
// };

// console.log(bioData);

// If we have same key and value in our JavaScript , then we are not required to write both of them

let myName = "Owais";
let myAge = 22;

const obj = {
  myName,
  myAge,
};

console.log(obj); // This is a new property which also has been introduced in our ecma script JS 2016
