// // Arrays are the collection of items which are used to store same or different data type values

// let arr = [45, "Owais", 42, true, null];

// console.log(arr);

// // property vs methods :
// // property is what which gives us some value , while object performs some task

// console.log(typeof arr); // array is our object data type
// // In an array the values are stored in a linear fashion
// // If you will print some thing that does not exist in array index , it will return undefined
// // Strings are not changable , while we can change our arrays
// console.log(arr.length);

// let arr = [45, "Owais", 42, true, null, 56, 3.5, 678.896, "03343", "Hamza"];

// i = 0;
// index = arr.length;

// for (let i = 0; i < index; i++) {
//   console.log(
//     "The " +
//       "iteration # " +
//       i +
//       " is saying that ... " +
//       "value of index at " +
//       i +
//       " and the value is : " +
//       arr[i]
//   );
// }

// We can also used "for of" and "for-in"loop . In arrays we commonly used our for of loop

// let arr = [45, "Owais", 42, true, null, 56, 3.5, 678.896, "03343", "Hamza"];

// for (let elem of arr) {
//   console.log(elem);
// }

// let cities = ["Karachi", "Hyderadabad", "Faisalabad", "Lahore", "Jehlum"];

// for (let city of cities) {
//   console.log(city);
// }

// We will use the looping methods in arrays so frequently when we will deal with our arrays

// Practice question # 01

// find the average percentage of the class when the marks of the students are given to u in the form of an array

// let marks = [67, 96, 92, 65, 78, 89];

// average_percentage =
//   (marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5]) /
//   marks.length;

// console.log("The average of the class is = " + average_percentage); It is a non tech person approach.

// Now we wil use for of loop in our array to solve the same question

// let marks = [67, 96, 92, 65, 78, 89];

// sum = 0;

// for (let score of marks) {
//   sum = sum + score;
// }

// let avg = sum / marks.length;

// console.log(`The average percentage of the class is = ${avg}`); // `${element}` is called string template in our JS

// Practice Question # 02

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let arr = [560, 780, 456, 56000, 3400, 250, 200];

// let idx = 0;

// for (price of arr) {
//   let offer = price / 10;
//   arr[idx] = price - offer;
//   console.log(
//     `The price of value (After 10% Off offer is) at index ${idx} = ` + arr[idx]
//   );
//   idx += 1;
// }

let prices = [500, 750, 450, 560, 300, 250, 200];

for (let i = 0; i < prices.length; i++) {
  off = prices[i] / 10;
  prices[i] -= off;
}

console.log(prices);
