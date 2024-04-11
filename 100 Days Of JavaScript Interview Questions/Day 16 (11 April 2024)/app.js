// write a program in JavaScript in which find out the minimum index of array in an array

let arr = [-439, -4, 45, 23, -78, 54, -21, 543, 82];

let min_num = 0;

function find_Min(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min_num) {
      min_num = arr[i];
    }
  }
  return min_num;
}

console.log(find_Min(arr));
