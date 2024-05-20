// Palindrome Checker:
// Write a function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring punctuation, capitalization, and spaces.

let str = prompt("Please Enter a string = ");
let reverse_str = "";

function checkPalindrome(a) {
  console.log(a);

  let split_string = a.split("");
  console.log(split_string);

  for (let i = a.length - 1; i >= 0; i--) {
    reverse_str += split_string[i];
  }

  console.log(reverse_str);

  if (!isNaN(a)) {
    alert("Please enter a valid input ");
  } else if (reverse_str == a) {
    return `string is palindrome`;
  } else {
    return `string is not palindrome`;
  }
}

console.log(checkPalindrome(str));
