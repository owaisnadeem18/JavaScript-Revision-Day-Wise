// Day # 10 (05th April 2024).
// 100 Days JavaScript Challenge.

// Write a javaScript program in which find that either two array elements are equal and also their length is same or not . Create a function named as IsArrayEqual().

let arr1 = [4, 89, 2, 3, 9];
let arr2 = [4, 89, 2, 3, 9];

let IsArrayEqual = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    return arr1.every((a, b) => a === arr2[b]);
  }
};

console.log(
  `Array 01 is = ${arr1} & Array 02 is = ${arr2} . ${
    IsArrayEqual(arr1, arr2)
      ? "The Arrays are equal"
      : "The Arrays are NOT equal"
  }`
);
