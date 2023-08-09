// X---------------------- Day - 03 (09/August/2023) ----------------------X

// Interview Question # 03
//             What is the difference b/w "==" & "==="
// Answer # 03:
//             "==" only checks the value (not datatype) , while "===" not only checks the value but also data type:
// For Example:
// a = 2;
// b = "2";

// console.log(a == b); // will return True
// console.log(a === b); // will return False (Because dataTypes of both of them , are not same)

// IF-Else Conditions:
// a = 6;
// b = 89;

// if (a < b) {
//   console.log("b is greator than a");
// } else {
//   console.log("a is greator than b");
// }

// What are False values in JavaScript:
// "0" , "Undefined" , "NaN" , "" , "false**" are considered as the false values in javaScript

// Conditional Ternary Operator:
//                              The conditinal ternary oeprator is the only operator which takes 03 operands

// An example to check it

// var age = 34;

// console.log(
//   age >= "18" ? "You are eligible to drive" : "You are eligible to drive"
// );

// After it, we have another concept in JavaScript which is (Switch Case) Statement
// The purpose of using switch case statement is this that if we want to get rid of our else - if ladder , then we can use the function of sitch case in javaScript

// Example Code:
//

// age = 34 ;

// switch (true) {
//   case age >= 18:
//     console.log("You can drive");
//     break;
//   case age < 18:
//     console.log("You can not drive");
//     break;
//   default:
//     console.log("Please Enter a valid age ");
//     break;
// }
