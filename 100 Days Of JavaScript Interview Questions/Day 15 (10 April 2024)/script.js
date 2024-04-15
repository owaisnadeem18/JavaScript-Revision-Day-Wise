// Question statement:

// write a function to calculate the sum of the squares of all elements in an array. For example, given the array [ 1, 2, 3 ] , the fucntion should return 14 , because 1*1 + 2*2 + 3*3 = 1 + 4 + 9

// let arr = [2, 3, 4];

// let sum = 0;

// let funcDouble = (arr) => {
//   arr = arr.map((x) => x * x);

//   let sum = arr.reduce((previous, next) => previous + next);
//   return sum;
// };

// console.log(
//   `The sum of array [${arr}] after doubling it , is equal to =  ${funcDouble(
//     arr
//   )}`
// );

// short alternative method of solving the same question with one liner:

// let arr = [4, 5, 6];

// let addFunction = (arr) => {
//   return arr.reduce((accum, curr) => (accum = accum + curr * curr));
// };

// console.log(addFunction(arr));

// Another method of solving the same question using (for of loop technique)

// let arr = [2, 3, 4, 5];

// let sum = 0;

// function double(arr) {
//   for (let i of arr) {
//     sum += i * i;
//   }
//   return sum;
// }

// console.log(double(arr));
