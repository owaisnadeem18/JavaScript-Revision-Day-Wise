// // Day 11
// // JavaScript Interview Questions.

// let num = 4531;
// let sum = 0;

// let SumOfDigits = (number) => {
//   num = number.toString();
//   num = num.split("");

//   for (let i = 0; i < num.length; i++) {
//     sum += parseInt(num[i]);
//   }
//   return sum;
// };

// console.log(
//   `The number was : ${num} & the sum of it's digits are ${SumOfDigits(num)} `
// );

// 2nd Method of Solving the question using reduce method of array

let num = 45921;

let numb;

let SumOfDigits = (number) => {
  let arr = Array.from(String(number), Number);
  arr = arr.reduce((a, b) => (a += b), 0);
  return arr;
};

console.log(`The sum of digits ${45921} is = ${SumOfDigits(num)}`);
