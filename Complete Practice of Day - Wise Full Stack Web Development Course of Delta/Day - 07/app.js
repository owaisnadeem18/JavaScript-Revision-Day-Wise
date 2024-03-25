// Practice Questions of JavaScript

// Question 01

// Qs1. Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

// let num = 47;

// if (num % 10 == 0) {
//   console.log("The number is good");
// } else {
//   console.log("The number is bad");
// }

// Question 02

// Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting their name & age):
// name is age years old.

// let yourName = prompt("Enter your good name: ");
// let age = prompt("Enter your age = ");

// alert(`Your name is = ${yourName}`);
// alert(`Your age is = ${age}`);

// Question 03

// Write a switch statement to print the months in a quarter. Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September Months in Quarter 4: October, November, December

// let quarter_1 = `January, February, March`;
// let quarter_2 = `April, May, June`;
// let quarter_3 = `July, August, September`;
// let quarter_4 = `October, November, December`;

// let quarterNumber = 2;

// switch (quarterNumber) {
//   case 1:
//     console.log(quarter_1);
//     break;
//   case 2:
//     console.log(quarter_2);
//     break;
//   case 3:
//     console.log(quarter_3);
//     break;
//   case 4:
//     console.log(quarter_4);
//     break;
//   default:
//     console.log("---- Invalid Quarter ---- ");
// }

// Question 04

// A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.
// For a given string print if it is golden or not.

// let str = prompt("Enter a string").toLowerCase();
// if (str.startsWith("a") && str.length > 5) {
//   console.log("This string is 'Golden'");
// } else {
//   console.log("This string is 'Not Golden'");
// }

// Question 05

// Qs5. Write a program to find the largest of 3 numbers.

// let num1 = 8;
// let num2 = 3;
// let num3 = 4;

// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is the largest number`);
// } else if (num2 > num1 && num2 > num3) {
//   console.log(`${num2} is the largest number`);
// } else {
//   console.log(`${num3} is the largest number`);
// }

// Question 06

// Write a program to check either if the two numbers have the same last digit value or not

// let num1 = 5934329;
// let num2 = 32244522;

// if (num1 % 10 == num2 % 10) {
//   console.log("The numbers have the same last value");
// } else {
//   console.log("The numbers do not have the same last value");
// }
