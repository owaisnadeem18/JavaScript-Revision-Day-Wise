/* Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6 */

let str = prompt("Enter any string or number: ");

let count = 0;

string = str.split("");

for (let i = 0; i < string.length; i++) {
  count = count + 1;
}

console.log(count);
