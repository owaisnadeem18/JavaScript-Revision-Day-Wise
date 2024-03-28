// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]

let arr = [4, 9, 6, 2, 8, 78, -5, -43];

let new_arr = [];
let n = 0;

for (let x = 0; x < arr.length; x++) {
  if (arr[x] > 0) {
    new_arr.push(arr[x]);
    n++;
  }
}

console.log(new_arr, " and the quantity of positive numbers is (n) = ", n);
