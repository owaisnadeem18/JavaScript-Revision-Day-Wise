// Day 08
// JavaScript Interview Questions Understanding
// We have to write a javaScript function through which we can find the factorial of a number , we must have to use the approach of (for loop)

let num = +prompt("Enter a number : ");

let fact = 1;

let find_Fact = () => {
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(find_Fact(num));
