// 2. Filter Method In An Array:
// This method is used to filter out something from your array and it does not modify your original array . But it creates a new array which is the copy of original array

// Filtering out Even numbers from your array:

// let nums = [9, 4, 2, 8, 5, 45, 89, 67, 56, 44, 32, 60, 24, 432];

// let filtered = nums.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(filtered);

// X--------------------------------- Filtering Method of an Array ------------------------------X

// Practice Questions to revise your all concepts in Filter Method.

// We are given array of marks of students. Filter our of the marks of students that scored 90+

let arr = [90, 59, 95, 86, 78, 40, 68];

let arr_filtered = arr.filter((val) => {
  console.log(`Total Marks of the students given to us are =  ${arr}`);
  return val >= 90;
});

console.log(arr_filtered);
