// Qs. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.

// function sumVowels(sum) {
//   let count = 0;

//   for (const s of sum) {
//     if (s == "a" || s == "e" || s == "i" || s == "o" || s == "u") {
//       count++;
//     }
//   }
//   return count;
// }

// let print_result = sumVowels("My name is Owais Nadeem");
// console.log(print_result);

// Extra Practice to understand for in loop
// const obj = { a: 1, b: 2, c: 3 };

// for (const key in obj) {
//   console.log(key, obj[key]);
//   console.log(typeof key);
// }

// Create a function using the "function" keyword that takes a string as an argument and returns the reversed version of the string.
// function reversed_Words(Word_Or_Sentence) {
//   reversed = "";
//   for (let i = Word_Or_Sentence.length - 1; i >= 0; i--) {
//     reversed = reversed + Word_Or_Sentence[i];
//   }
//   console.log(reversed);
// }

// reversed_Words("OwaisNadeem");

// Qs. Create a function using the “arrow function” that takes a String as an argument & returns the number of vowels in the string.

let arrowFunc = (Sentence) => {
  count = 0;
  for (let v of Sentence) {
    if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u") {
      count++;
    }
  }
  return count;
};

console.log(arrowFunc("OwaisNadeem"));
