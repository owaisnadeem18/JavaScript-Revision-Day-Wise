// Write a program which is taking two arguments , one is string and the second one is number and then print the answer in that much times equal to 2nd argument of function

let num = +prompt("Dear user pls enter a number ");

let str = prompt("Please Enter a string ");

let func = (string, number) => {
  let result = "";

  for (let i = 0; i < number; i++) {
    result += string;
  }
  return result;
};

console.log(
  "The string is entered by the user will print ",
  num,
  " times ",
  " so the output is = ",
  func(str, num)
);
