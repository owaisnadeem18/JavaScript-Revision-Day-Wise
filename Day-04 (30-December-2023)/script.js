// <============================ OOP In JavaScript ============================>

// Objects in JavaScript : If you want to save some data of different things together is called as Objects in JavaScript programming

// Objects Syntax
// Key Data Value pair is stated as object literals.

// let My_BioData = {
//   // What if we want to write an object inside the object ?
//   Object_inside_Object: {
//     MyNick_Name: "Wasi",
//     Favourite_Food: "Paye",
//   },
//   My_Age: 22,
//   My_Name: "Owais Nadeem",
//   My_Hobby: "Coding",
//   getData: () => {
//     console.log(`My Name is ${My_BioData.My_Name}`);
//     console.log(`My Age is ${My_BioData.My_Age}`);
//     console.log(`My Hobby is ${My_BioData.My_Hobby}`);
//   },
// };

// // My_BioData.getData();

// console.log(My_BioData.Object_inside_Object.MyNick_Name);

// Next We have a 'this' object , it contains the current context. This is the definition of our 'this' object

// console.log(this);
// window(this.alert("Hello")) // "It will show the alert message of hello to us".

// An Important Interview Question:

// 'This' object

// function Greet() {
//   console.log(this);
// }

// Greet();

// It will show us the current context as 'window' keyword

// Another Example for our JavaScript 'this' object keyword

// myNames = "Owais";

// function myName() {
//   console.log(this.myNames);
// }
// myName();

// Another Example for our JavaScript 'this' object keyword
// let obj = {
//   myAge: 22,
//   myName() {
//     // console.log(this.myAge);
//     console.log(this);
//   },
// };

// console.log(obj.myName);

// obj.myName();

// Now, it's time to see another important Interview Question:

// const object = {
//   myName: "Owais",
//   Greet: () => {
//     // console.log("Hello, I am owais");
//     console.log(this);
//   },
// };

// // console.log(obj.myName);
// object.Greet();

// This is a disadvantage of our ecma script'16 fat arrow function that we are unable to access and use our 'this' object in it

// X============================ OOP In JavaScript ============================X
