// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let number = +prompt("Enter any number ");

if (isNaN(number)) {
  alert("Please Enter a number ");
}

num = number.toString();
console.log(typeof num);
let total = 0;

for (let i = 0; i < num.length; i++) {
  total += +num[i];
}

console.log(total);
