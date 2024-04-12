// // Day 17
// // Question: Write a JavaScript program in which convert a string into camel case and snake case

// // 1. camelCase

// let str = "Owais Nadeem";
// let words = str.trim().split(" ");

// words = words.map((curr, index) => {
//   if (index === 0) {
//     return curr.toLowerCase();
//   } else {
//     return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
//   }
// });

// console.log(words.join(""));

// for the snake case
let str = "Owais Nadeem";
let snakeCaseString = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char === " ") {
    snakeCaseString += "_";
  } else {
    snakeCaseString += char.toLowerCase();
  }
}

console.log("Snake Case:", snakeCaseString);
