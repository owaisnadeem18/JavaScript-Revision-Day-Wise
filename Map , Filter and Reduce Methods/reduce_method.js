// Reducing Method in an Array:
// Perform some operations on an array and reduces the array to a single value. It returns that single value. It also does not modify the new array

// let nums = [4, 8, 2, 5, 9, 3];

// let reduced_array = nums.reduce((prev, curr) => {
//   console.log(
//     ` The Previous value was ${prev} and the current value is  ${curr} `
//   );
//   return prev + curr;
// });

// console.log(reduced_array);

// Reduce Method More practice Questions:

// Let's print the smallest number in an array , using reduce method of array
// let nums = [7, 4, 2, 90, 45, 984, 89, 23, 90, 234];

// let nums_smallest = nums.reduce((prev, curr_val) => {
//   return prev < curr_val ? prev : curr_val;
// });

// console.log(nums);
// console.log(
//   `The smallest number among these array values are ${nums_smallest}`
// );

// // Let's print the smallest number in an array , using reduce method of array
// let num = [7, 4, 2, 90, 45, 984, 89, 23, 90, 234];

// let nums_greatest = num.reduce((prev, curr_val) => {
//   return prev > curr_val ? prev : curr_val;
// });

// console.log(
//   `The greatest number among these array values are ${nums_greatest}`
// );

// X--------------------------------- Reducing Method of an Array ------------------------------X

// Some Practice questions to understand it better

// Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array

// let entered_number = prompt("Enter a number = ");

// let array_ = [];
// for (let i = 1; i <= entered_number; i++) {
//   console.log(`The entered number by the user is ${entered_number}`);
//   array_[i - 1] = i;
// }

// console.log(array_);

// let a = prompt("Enter a number from your choice = ");

// let arr_ = [];

// for (let i = 1; i <= a; i++) {
//   console.log("The number entered by the user is = " + a);
//   arr_[i - 1] = i;
// }

// console.log(arr_);

// Use the reduce method to calculate sum of all numbers in the array.

// let a = prompt("Enter a number from your choice = ");

// let arr_ = [];

// for (let i = 1; i <= a; i++) {
//   console.log("The number entered by the user is = " + a);
//   arr_[i - 1] = i;
// }

// console.log(arr_);

// let funcSum = arr_.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(funcSum);

let ask = prompt("Enter a number = ");

let arr = [];

for (let i = 1; i <= ask; i++) {
  arr[i - 1] = i;
}

console.log(arr);

// Use the reduce method to calculate product of all numbers in the array

let Find_Product = arr.reduce((prev, curr) => {
  return prev * curr;
});

console.log(`The product of elements of array [${arr}] is = ${Find_Product} `);
