// 100 Days of JavaScript Interview Questions

// Day 02

// The requirement of the question is that , we have to create a function named as GenerateHash taht generates a hastag in the start of any string , and removes all the spaces from the string and concateneate all of them after making their first element as the capital letter

// let str = "I am doing programming in JavaScript";

// function Generate_Hash(a) {
//   if (a.length >= 280 || a.trim().length >= 280) {
//     return false;
//   } else {
//     let str = a.split(" ");
//     str = str.map((a) => a.replace(a[0], a[0].toUpperCase()));
//     str = `#${str.join("")}`;

//     return str;
//   }
// }

// // calling the function:
// let x = Generate_Hash(str);
// console.log(x);

// second way of solving the same question

let str = "I am Muhammad owais Nadeem";

function Generate_Hash(str) {
  if (str.length >= 280 || str.trim().length > 280) {
    return false;
  } else {
    str = str.split(" ");
    str = str.map((a) => a.charAt(0).toUpperCase() + a.slice(1));
    str = "#" + str.join("");
    return str;
  }
}

let x = Generate_Hash(str);
console.log(x);
