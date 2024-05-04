// Write a JavaScript function calculate_Median() that takes an array

let arr = [3, 8, 5, 3, 1, 1, 3, 6];

let calculate_Median = (array) => {
  console.log(array.sort((a, b) => a - b));

  sorted_arr = array.sort((a, b) => a - b);

  let arr_length = arr.length;

  //   find the mid index number

  let mid = Math.floor(arr_length / 2);

  //   If the numbers are in odd numbers:

  if (arr_length % 2 == 0) {
    return (sorted_arr[mid] + sorted_arr[mid - 1]) / 2;
  } else {
    return sorted_arr[mid];
  }
};

console.log(`The median of Array : ${arr} is ${calculate_Median(arr)}`);
