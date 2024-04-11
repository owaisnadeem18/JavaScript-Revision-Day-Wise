// Qs5. Find the largest number in an array with only positive numbers.

let arr = [45, 89, 23, 63, 92, 31, 52, 193, 23, -56, -43, -87, -45];

let largest_num = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest_num) {
    largest_num = arr[i];
  }
}

console.log("The largest number in this array is : ", largest_num);
