// Write a program in such a way through which, we can find the sum of array elements

let arr = [5, 9, 3, 2, 8];

function find_Sum(array) {
  let sum = array.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(`The sum of the array elements is `, find_Sum(arr));
