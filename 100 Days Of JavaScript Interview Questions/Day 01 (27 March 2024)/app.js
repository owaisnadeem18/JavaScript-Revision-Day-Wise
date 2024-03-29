// // There is a question in which you have to find out the greatest string by creating a function find_Largest_String. If there are mulitple largest strings , it will encounter the very first one.

// let str = "My name is Owais Nadeem ";

// function find_Largest_String(a) {
//   if (a.trim() === 0) {
//     let empty = "The string is empty !!!";
//     return empty;
//   } else {
//     let words = a.split(" ");
//     largest_str = words[0];
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > largest_str.length) {
//         largest_str = words[i];
//       }
//     }

//     return largest_str;
//   }
// }

// let result = find_Largest_String(str);
// console.log(result);

// We can also solve the same question by using the reduce method of array in JavaScript:

let str = "I am doing Programming in JavaScript";

// here we have to find the largest string which is available in the text

function largest_str_function(a) {
  let words = a.split(" ");
  return words.reduce((x, y) => (x.length > y.length ? x : y));
}

let string = largest_str_function(str);
console.log(string);
