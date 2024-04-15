// Here is a question for us , in which it is stated that , we have to check either the string entered bt the user is starting with any spcific word or not

// 1st method (using built-in technique)

// let str = prompt("Please enter a string").toLowerCase();

// let checkStr = (a) => {
//   if (a.startsWith("hello")) {
//     return "This string is true ";
//   } else {
//     return "This string is not true ";
//   }
// };

// console.log(checkStr(str));

// 2nd method (using default technique)

let str = prompt("Enter a string to check with substring ");

substring = "beloran12".toLowerCase();

let startsWith = (a, b) => {
  return str.toLowerCase().slice(0, substring.length) == substring;
};

console.log(startsWith(str, substring));
