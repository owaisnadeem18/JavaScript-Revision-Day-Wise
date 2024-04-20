// Write a JavaScript function in which reverse a string by creating a function inside it.

let str = "Owais Nadeem";

let reverse_String = "";

function reverseStr(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    reverse_String += string[i];
  }
  return reverse_String;
}

console.log(reverseStr(str));
