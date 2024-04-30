// Question 2:
// Write a function to find if a number is a palindrome or not. Take number as parameter

let num = +prompt("Dear User please enter a number to check the palindrome");

if (isNaN(num)) {
  alert("Please Enter a valid input as number ");
} else {
  function find_Palindrome(a) {
    a = a.toString();
    console.log(typeof a);
    console.log(a.split(""));

    let reversed_str = "";
    for (let i = a.length - 1; i >= 0; i--) {
      reversed_str += a[i];
    }

    if (a == reversed_str) {
      return `The input ${a} is a palindrome because the reversed string is ${reversed_str}`;
    } else {
      return `The input ${a} is not a palindrome because the reversed string is ${reversed_str}`;
    }
  }

  console.log(find_Palindrome(num));
}
