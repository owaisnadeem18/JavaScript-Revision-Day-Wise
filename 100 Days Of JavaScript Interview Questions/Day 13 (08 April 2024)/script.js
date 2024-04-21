// Day 13
// Write a program in JavaScript in which create a function named countVowels() in that string.

// let str = prompt("Enter a string: ").toLowerCase();

// let vowels_count = 0;

// function countVowels(a) {
//   let vowels = "";
//   for (let i = 0; i < a.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       vowels += a[i];
//       vowels_count += 1;
//     }
//   }
//   return vowels;
// }

// console.log(
//   `The vowels in the string ${str} are: ${countVowels(str).split(
//     ""
//   )} & the count of vowels is: ${vowels_count} `
// );

// 2nd Method of Solving the same question:

let str = prompt("Enter a string: ").toLowerCase();

let vowels_count = 0;

let vowels_Count_Func = (string) => {
  vowels_Arr = ["a", "e", "i", "o", "u"];

  string = string.split("");

  for (let char of string) {
    if (vowels_Arr.includes(char.toLowerCase())) {
      vowels_count++;
    }
  }
  return vowels_count;
};

console.log(
  `The count of vowels word are ${vowels_Count_Func(str)} in the string ${str} `
);

// console.log(``)
