// Practice questions

// 1.

// write a function which can find the square root of a number (function should be the smallest)

// let num = 225;

// let find_square_root = (a) => Math.sqrt(a);

// console.log(find_square_root(num));

// 2.

// write a function , which prints the word 'hello world' 5 times , with the break of 2 sec

// setTimeout(() => {
//   for (let i = 1; i <= 5; i++) {
//     console.log("Hello World");
//   }
// }, 2000); // I am sorry , we do not need to use the set time out , we need to use set interval and clear interval

let variable = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(variable);
  console.log("Rok diya hay may nay ");
}, 10000);
