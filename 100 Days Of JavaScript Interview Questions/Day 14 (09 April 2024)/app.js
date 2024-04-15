// // Write a program in JavaScript in which take a number as an input from the user and check either the entered number by the user is power of 2 of or not for example (number ** 2 )

// let num = +prompt("Enter a number power of 02 ");

// let answer;

// function IsPower_02(a) {
//   for (let i = 1; i < a; i++) {
//     if (2 ** i == a) {
//       answer = `The Number is ${a} and it is the power of 02`;
//     }
//   }
//   return answer;
// }

// Note: It is only acceptable for (1-9 digits)

// IsPower_02(num);
let num = +prompt("Enter a number to check power of 02 between 01-09 ");
let answer;

function IsPower_02(a) {
  let answer;

  if (a > 9) {
    alert("Please enter a number between 01-09");
  }

  for (let i = 1; i < a; i++) {
    if (2 ** i === a) {
      answer = `Number is ${a} , the power of 2`;
    }
  }
  return answer;
}

console.log(IsPower_02(num));
