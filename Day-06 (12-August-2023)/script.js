// Difference Between var , let and const:

// "01". 'Var' Variable
// var a = 89;
// var a = 78;
// console.log(a);
// console.log(a); (Answer of variable 'a' can be modified or updated)

// "02". 'Let' Variable
// let a = 90;
// let a = 89; It will throw an error "Identifier 'a' has already been declared"
// console.log(a);

// "03". 'Const' Variable
// const a = 45;
// a = 90; (It will throw an error) -> Assignment to constant variable.
// console.log(a);

// 2. Template Literals
// `${variable_Name}` // The Name of your JavaScript variable will get visible to u

// 3. Default Function
// For Example:
// function add(a, b) {
//   return a + b;
// }
// add(5); // If you'll just pass one argument instead of passing two arguments (as requirement) then we'll get the result as NaN

// 4. Arrow Function in JavaScript:
// const sum = () => {
//   let a = 8;
//   let b = 9;
//   return "The sum of two numbers is : ", a + b;
// };

// let a = sum();
// console.log(a);

// Arrays

// Collection of same or different data types in a same variable is called as array

// Traversal in Array :
// It means that checking out the value of any number stored in your respective array
// array = ["Owais", "Nadeem", "Ali ", "Hamza"];

// console.log(array[0]); // will start from 0 index
// a = array.length;
// console.log(a);
// console.log(array[array.length - 1]);

// For In Loop Using Arrays

// First we have to use normal for loop
// for (let b = 0; b < array.length; b++) {
//   console.log(array[b]);
// } // Before modern JavaScript we were using this method to print our data elements in an array

// But , now we have Two more loops named as For in and For of loop in ES6 (Modern JavaScript)

// for (let elements in array) {
//   console.log(elements); // It(For In Loop) just prints the index of our array elements
// }

// for (let elements in array) {
//   console.log(elements); // It(For of Loop) just prints the elements inside the index of our array
// }
