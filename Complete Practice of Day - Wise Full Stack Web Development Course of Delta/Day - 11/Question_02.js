// Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

let arr = [7, 9, 0, -2];

// n = +prompt("Enter the number of times (n) = ")
n = 3;

let new_arr = [];

for (let x = arr.length - 1; x >= arr.length - n; x--) {
  new_arr.unshift(arr[x]);
}

console.log(new_arr);
