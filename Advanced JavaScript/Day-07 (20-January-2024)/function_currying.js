// Now , let's talk about the function currying method in JavaScript

const sum = (num1) => (num2) => (num3) =>
  console.log("The sum of three numbers is = ", num1 + num2 + num3);

sum(4)(18)(8);

// This is the complete concept of function currying
