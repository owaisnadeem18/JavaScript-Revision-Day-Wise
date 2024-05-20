// How to remove duplciated from the array

let arr = [5, 9, 2, 7, 2, 5, 8, 7, 4, 5, 9, 4, 2, 8, 7];

let removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates(arr));
