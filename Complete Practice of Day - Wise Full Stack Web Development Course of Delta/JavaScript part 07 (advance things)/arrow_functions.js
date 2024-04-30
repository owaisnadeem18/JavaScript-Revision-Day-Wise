// This is an arrow function , here in this topic we have to discuss some following things

let a = +prompt("Enter a number to get the cube ");

// let Cube_func = (num) => {
//   return num ** 3;
// };

// short hand way of writing this function
let Cube_func = (a) => a ** 3;

if (isNaN(a)) {
  alert("Invalid Input");
} else {
  console.log(`The cube of ${a} is ${Cube_func(a)}`);
}
