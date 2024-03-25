// String Methods

// 1. Trim Method

let str = "            Owais              Nadeem             ";

console.log(str);
console.log(str.trim()); // It removes the white spaces from the string

// MCQ's question:

// Strings are immutable , they do not make changes in the original string

// String Method 02 & 03

str = "Owais Nadeem";
console.log(str.toLowerCase()); // It will take all the letters to small letters
console.log(str.toUpperCase()); // It will take all the letters to capital letters

// Strings With Arguments:

str = "I love Pakistan";

console.log(str.indexOf("l")); // If string exists, it will return the respected index at which it is present . If it does not exist , it will return '-1'
