// Day 03
// Here , we have to write a function in JavaScript called countChar that takes two parameters : a string and a character to count. The function should return the number of times , the specified character appears in the string

let str_1 = prompt("Please enter a string: ");

let character = prompt("Enter the single character you want to check: ");

// Here, we have to create a function , in which we can find the number of times , any specific character is repeating

let countChar = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  total_Count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] == b) {
      total_Count++;
    }
  }

  return total_Count;
};

console.log(
  `The string ${str_1} has character '${character}' ${countChar(
    str_1,
    character
  )} times `
);
// countChar(str_1, character);

// console.log(countChar());
