// There was an update in ECMA Script 2018 i.e ES9

// If we have two objects , like obj1 and obj2 and let's suppose that if we are using some technique to copy the complete object key value pairs into another than we will call this approach as (Object Destructuring)

// let obj1 = {
//   My_name: "owais",
//   My_Age: 22,
//   My_Hobby: "Coding",
// };

// let obj2 = {
//   ...obj1,
// };

// console.log(obj1);
// console.log(obj2); // This is actually called as object Destructuring

// ----------------------------------- //

// There was an update in ECMA Script 2019 i.e ES10

// An Example:

// let arr = [
//   ["zone_1"],
//   ["zone_2"],
//   ["zone_3"],
//   ["zone_4"],
//   ["zone_5"],
//   ["zone_6"],
//   ["zone_7", ["zone_7", "zone_8"]],
// ];

// let flatArr = arr.reduce((accum, currValue) => {
//     return accum.concat(currValue);
// });

// console.log(flatArr); // It was unable to flatten 2D Array in my output . That's why to address this issue , we have EcmaScript 2019 feature of flatten array elements even if they are in 2D

// Array Flatten Property

// console.log(arr.flat(Infinity)); // This awesome method has resolved my flatten issue in JavaScript

// In ES2017 ES8 , we have a method which can convert an object entities into an array , but if we do not want to convert it into an array , then we have a property as follows.

// let obj = {
//   My_name: "owais",
//   My_Age: 22,
//   My_Hobby: "Coding",
// };

// const ArrObj = Object.entries(obj);
// console.log(ArrObj); // It will convert my object entities into an array
// console.log(Object.fromEntries(ArrObj)); // It will keep my object entities into an object and It will not change it

// There was an update in ECMA Script 2020 i.e ES11

// let a_big_num = Number.MAX_SAFE_INTEGER;
// console.log(a_big_num);
// console.log(a_big_num + 13); // It is an able to tackle a very big int number

// // According to the update of ES11 . I can solve this issue thorugh the technique of:

// let new_Num = 9007199254740991n;
// add_number = 456n;

// add = new_Num + add_number;
// console.log(add); // Now , I can see that the problem has been resolved . Means Now I can add big int numbers using the above mentioned technique

// console.log(typeof add);

// Another last feature:
// const foo = null ?? "default !!!";
// console.log(foo);

// Let's talk about a method of ES2014

// "use strict"; // It will restrict you to declare your variable before initializing it , But, ES2014 allowed us to declare variables without initializing it

// x = 3.4;
// console.log(x);
