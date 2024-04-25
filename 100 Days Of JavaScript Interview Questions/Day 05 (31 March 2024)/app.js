// Write a function to sort the array elements in the ascending order using a function SortAscending()

let arr = [78, 45, 90, 23, 13, 87, 45, 233, 823, 23, 15, 913, 423];

let funcSort = (arr) => {
  b = arr.sort((a, b) => a - b);
  return b;
};

console.log(funcSort(arr));
