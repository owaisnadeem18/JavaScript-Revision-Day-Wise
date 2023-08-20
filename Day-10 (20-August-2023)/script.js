// We have three arraymethods in JavaScript as 1.Push() , 2.Pop() & 3.Shift()
// For Example:

// 1. Push() method from array in JavaScript

// array = [67, 45, 54, 21];
// console.log(array.length);
// console.log(array);
// console.log(array.push(67)); // Push() method adds a number in the end of an array
// console.log(array);
// console.log(array.length);

// 2. Pop() method from array in JavaScript

// array = [67, 45, 64, 23, 78, 54, 21];
// console.log(array);
// console.log(array.pop()); // removes the last number from our array
// console.log(array);

// 3. Shift() method from array in JavaScript

// array = [90691, 45, 54, 21];
// console.log(array.length);
// console.log(array);
// console.log(array.shift()); // Shift() method works same like pop() . But, It removes 1st number in the start of an array
// console.log(array);
// console.log(array.length);

// ----------------------------------------------------------------------------------------------- \\

// Splice Method (Most Important JavaScript Array Method)
// array = [90691, 45, 54, 21];
// let newArray = array.splice(1, 1, 450);
// console.log(newArray);
// console.log(array);

// Now , we have coding challenge in it . Where we will see some exciting kind of questions

// Task lists
// Add a new month "December" in the array of months + replace (march) with (March) , delete april from your existing array . ****** Solve all problems using just one array method ******

// 1. Add December

// months = ["Jan", "feb", "march", "april"];
// const addDecember = months.splice(4, 0, "December");
// console.log(months);

// 2. Replace march with March

// const march = months.splice(2, 1, "March");
// console.log(months);

// 3. Delete "april" from our existing array

// const delApril = months.splice(3, 1);
// console.log(months);

// X---------------- End of Day-10 (20-August-2023) till Array methods (.splice) ------------------X
