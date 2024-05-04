// Removing the duplicate elements from the array

// Day 12 ( 07/April/2024 )

// create a function named removeDuplicates() , and then remove those elements of an array which are duplicate.

let arr = [3, 8, 5, 2, 3, 1, 45, 2, 8, 9, 9, 2, 5];

let removeDuplicates = (array) => {
  let arraySet = [...new Set(array)];
  return arraySet;
};

console.log(
  `Original Array was [${arr}] & the array without duplicates is = [${removeDuplicates(
    arr
  )}]`
);
