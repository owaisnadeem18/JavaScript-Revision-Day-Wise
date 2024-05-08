// Here we have to write a program , in which we have to create a function Limited_Text() & after it we have to break the text into the character limit , mentioned by our user

let limit = +prompt("Please enter a limit of strings to show : ");

let str = "Owais Nadeem ";

let Limited_Text = (str, limit) => {
  //   if (limit <= 0) {
  //     return str;
  //   } else if (str.length > limit) {
  //     return str.slice(0, limit).concat("...");
  //   }

  // if I wanna solve the same problem using ternary operator ?

  return limit <= 0 ? str : str.slice(0, limit).concat("...");
};

console.log(
  `The string is ${str} , the limit entered by the user is = ${limit} . SO the output is =  ${Limited_Text(
    str,
    limit
  )} `
);
