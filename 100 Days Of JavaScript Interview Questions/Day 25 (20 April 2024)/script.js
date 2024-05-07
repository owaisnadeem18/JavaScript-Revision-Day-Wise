// Today we have to write a program in JavaScript in which we will create a function named as Calculate_Fact() in which we will find the factorial of a number using recursion approach, previously we have used the technique of recursion using for loop . So let's start

let num = +prompt("Dear User Please Enter a number = ");

let find_Fact = (a) => {
  if (a == 0 || a == 1) {
    return 1;
  } else if (isNaN(num)) {
    alert("Please Enter a valid number ");
  } else {
    return a * find_Fact(a - 1);
  }
};

console.log(`The factorial of the number ${num} is ${find_Fact(num)} `);
