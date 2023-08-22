// Map() , Filter() , Reduce()

// ---------------------------------- 1.Map() -------------------------------------

// let array = [8, 5, 2, 6, 7, 3, 8, 5, 1098];

// let newArr = array.map((currElem, index, Arr) => {
//   return currElem > 4;
// });

// console.log(newArr);
// console.log(array);

// practice Question to Understand map() method a little more

// numbers = [8, 4, 2, 5, 6, 7, 3, 9];
// sorted_numbers = numbers.sort();

// console.log(sorted_numbers);

// // We have to find the squares of these numbers

// // let square_of_Numbers = sorted_numbers.map((currElem, index, arr) => {
// //   return console.log(
// //     ` The square of number ${currElem} at Index: ${index} is ${
// //       currElem * currElem
// //     } `
// //   );
// // });

// // Now , We have to find the square root of some following numbers

// numbers = [64, 81, 25, 121, 100];

// let newNumbers = numbers.map((currElem, index, arr) => {
//   return Math.sqrt(currElem);
//   //   return console.log(Math.sqrt(currElem)); // In this way we can find the square root of any number
// });

// // Now we have to multiply each number by 02 and only return those numbers which are greator than 10

// console.log(newNumbers);

// let newNumbers1 = newNumbers
//   .map((currElem, index, arr) => {
//     return currElem * 2;
//   })
//   .filter((currElem) => {
//     // this method is called chaining style of map() method . We've firt mutiplied squared root elements with (2) and then print those elements which are greator than 20
//     return currElem > 20;
//   });

// console.log(newNumbers1);

// --------------------------------- 2.Filter() ------------------------------------

// Filter method in an array is just used to search out for something according to our requirement from any array & The 'filter' method is used to create a new array containing all elements from the original array that meet a specific condition. It doesn't modify the original array;

// Number = [5, 6, 3, 5, 85, 45, 42, 6, 4, 1, 10, 16];

// console.log("The list of even numers are as follows ");
// let evenNumbers = Number.filter((currElem) => {
//   return currElem % 2 == 0;
// });
// console.log(evenNumbers);

// console.log("The list of Odd numers are as follows ");
// let OddNumbers = Number.filter((currElem) => {
//   return currElem % 2 != 0;
// });

// console.log(OddNumbers);

// --------------------------------- 3.Reduce() ------------------------------------

// Reduce method is used to find out average , sum and multiplied result of numbers

// Reduce() method consists of following four parameters
// 1. Accumulator (The box which keeps the combined result)
// 2. Current Element
// 3. Index
// 4. Array

// array = [6, 3, 6];

// let newArray = array.reduce((accumulator, currElem, Index, Arr) => {
//   return (accumulator *= currElem); // multiplies all the numbers present in our array through functionality of accumulator
// });

// console.log(newArray);
