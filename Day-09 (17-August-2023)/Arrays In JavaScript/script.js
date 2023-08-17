// // Traversal Function In JavaScript:
// // Traversal means in JavaScript is to access any number in our data set

// array = [9, 6, 3, 5];

// console.log(array[3]); // This is traversal of an array . Because we are accessing it's value
// console.log(array.length);

// // After it we have loops in our array to access our array elements
// // 1. For In
// // 2. For Of
// // 3. For Each

// for (let elements in array) {
//   console.log(elements); // will display the index of array elements
// }

// for (let elements of array) {
//   console.log(elements); // will display the element inside your array elements
// }

// // Revision of For Each Loop in JavaScript

// array_data = ["Owais", "Nadeem", "Ali", 89, 56, 43];

// // function add(a, b) {
// //   return a + b;
// // }

// // console.log("The sum of two Numbers is : ", add(5, 8));

// array_data.forEach((element, index, array) => {
//   console.log(
//     "The element is : " +
//       element +
//       " The index is " +
//       index +
//       " Array is " +
//       array
//   );
// });

// -------------------------------------------- \\

// Array Methods and further important questions for interview:

// array = ["Owais", "Nadeem", "ali", "4", "5", "2"];

// Array Methods (Index)
// 1. IndexOf() // It is an array method which is used in searching of any data from our array

// console.log(array.indexOf("ali", 0)); // If the desired element is not present inside our array , then it will print (-1) in our console (otherwise it will print that on which index , our searched or desired data element is present)

// 2. LastIndexOf() // It is an array method which is used in searching of any data from our array from the backward/ending position

// console.log(array.lastIndexOf("4", 14));

// 3. Includes() // It will check either the desired or searched numbers are present in our array or not (If Yes then it will return 1 , otherwise It will return 0)

// console.log(array.includes("Owais")); // It search for item in forward form

// 4. Find() // It will find the data element in our array and will print the very first element which is present in our array (not wait till the perfect statement)

// prices = [280, 230, 180, 322, 331, 187, 243, 956, 889, 23];

// 5. FindIndex() // It will find the data element in our array and will print the very (index) of very first element which is present in our array (not wait till the perfect statement)
// console.log(prices.find((prices) => prices < 8)); // prices.find((prices) => prices < 80) (This is the arrow function of ES6 JS) // Find function in JS , will return us undefined , if the desired condition will not meet.

// console.log(prices.findIndex((prices) => prices < 8)); // prices.find((prices) => prices < 80) (This is the arrow function of ES6 JS) // FindIndex function in JS , will return us -1 , if the desired condition will not meet.
// -------------------------------------------- \\

// Array (Filter Methods)
// prices = [280, 230, 180, 322, 331, 187, 243, 956, 889, 23];
// console.log(prices.filter((prices) => prices < 450));

// -------------------------------------------- \\
// Sorting & Comparing of An Array

// array_for_sorting = [4, 8, 2, 6, 9];
// console.log(array_for_sorting.sort());

// array_for_sorting = ["jan", "Feb", "December ", "June"];
// console.log(array_for_sorting.sort()); // Sort method provides an incorrect result to us , because of some issues of sorting because:

// array = [553, 534, 953, 932, 864, 52340]; // (Now, it is just sorting according to the first number of our array data element)
// console.log(array.sort());

array = [553, 534, 953, 932, 864, 52340];

// console.log(array);
// console.log(array.length);
// console.log(array.push(89));
// console.log(array.push(89));
// console.log(array);

// Another, Java Script Array method is push("Data element you wanna push") // It adds a new data element in the (end) of our array

// console.log(array.push("Owais", "Ali", "Nadeem"));

// console.log(array);
// console.log(array.length);

// Another, Java Script Array method is unshift("Data element you wanna push") // It adds a new data element in the (start) of our array

console.log(array.push("Owais", "Ali", "Nadeem"));

array.unshift("Faraz", "Ghaalib");

console.log(array);
