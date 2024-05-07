// Write a program in which find the fibonacci series of 'n' numbers, by creating a function , named as find_Fibonacci().

let num = +prompt("Dear User Please Enter a number = ");

let find_Fibonacci = (a) => {
  if (a <= 0) {
    return 1;
  } else if (isNaN(num)) {
    alert("Invalid Input");
  } else {
    return find_Fibonacci(a - 1) + find_Fibonacci(a - 2);
  }
};

console.log(
  `The number entered by the user is = ${num} & the fibonacci series is = ${find_Fibonacci(
    num
  )}`
);
