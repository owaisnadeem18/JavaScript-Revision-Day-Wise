// Reduce method in JavaScript is used in JavaScript to perform a single operation on the array elements which we have in our array

let arr = [3, 5, 2, 1, 7, 9, 3, 25];

let result = arr.reduce((accum, curr) => {
  return accum + curr;
});

console.log(result);
