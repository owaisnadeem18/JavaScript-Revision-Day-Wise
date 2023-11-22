// 1. Push() Method

// let cities = ["Karachi", "Lahore", "Islamabad", "Multan", "Hyderabad"];

// console.log(cities);

// cities.push("Mirpur Khas", "Shukkur", "Faisalabad"); // It adds a new value to my existing array at the end and print the same array after modifying it

// console.log(cities);

// 2. Pop() Method

// let cities = ["Karachi", "Lahore", "Islamabad", "Multan", "Hyderabad"];

// popped = cities.pop(); // It removes the last value from my existing array at the end and print the same array after modifying it

// console.log(popped); // which number is popped
// console.log(cities); // printing of array after popping out last value index

// 3. toString() Method
// It is used to change the int array elements into a string

// let int_arrays = [45, 98, 75, 23, 75, 93, 33];

// // console.log(int_arrays[0]);

// string_converted = int_arrays.toString();

// console.log(string_converted);
// console.log(typeof string_converted);

// 4. Concat() Method in an Array
// It is used to combine two different arrays together

// 5. Shift() Method in an Array
// It is used to delete the first index element from our array

// let arr1 = ["Owais", "Hamza", "Hammad", "Ali", "Saim", "Ayub"];
// let arr2 = ["Owais", "Hamza", "Hammad", "Ali"];
// console.log(arr1);

// let new_arr = arr1.shift(arr2);

// console.log(new_arr);

// console.log(arr1); // changes are made in the original array

// 6. Unshift() Method in an Array
// It is used to add something in the first index element of our array
// let arr1 = ["Owais", "Hamza"];
// let arr2 = ["Owais", "Hamza", "Hammad", "Ali"];

// let new_arr = arr1.unshift(23, 78);

// console.log(new_arr);

// console.log(arr1); // changes are made in the original array

// 7. Slice() Method in JavaScript
// It is used to print some chunk of our array . It modifies our original array

// let arr2 = ["Owais", "Hamza", "Hammad", "Ali"];

// let new_arr = arr2.slice(2, 4);

// console.log(new_arr);

// console.log(arr2); // changes are not made in the original array

// 8. Splice() Method in JavaScript
// It is used to print some chunk of our array . It modifies our original array

let arr2 = ["Owais", "Hamza", "Hammad", "Ali", "Faiq", "Shahzaib"];

// splice("from where u want to start changing" , "How much number indexes do u want to delete" , "What replacement do u want to use here")

let new_arr = arr2.splice(2, 2, 78, 90);

console.log(new_arr);

console.log(arr2); // changes are made in the original array
