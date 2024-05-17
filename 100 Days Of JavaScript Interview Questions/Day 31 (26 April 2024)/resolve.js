let password = prompt("Please Enter a password = ");

let isUpperCase = false;
let isLowerCase = false;
let hasSpecialCharacters = false;
let hasNumbers = false;

let specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];

function passValidator(pass) {
  if (pass == "") {
    alert("Password Should not be empty ");
  } else {
    for (let char of pass) {
      if (char >= "A" && char <= "Z") {
        isUpperCase = true;
      } else if (char >= "a" && char <= "z") {
        isLowerCase = true;
      } else if (!isNaN(char)) {
        hasNumbers = true;
      } else if (specialCharacters.includes(char)) {
        hasSpecialCharacters = true;
      }
    }

    if (
      isLowerCase == true &&
      isUpperCase == true &&
      hasSpecialCharacters == true
    ) {
      alert("Your password has been validated !!! ");
    } else {
      alert(
        "Your Password should have mixture of lower and capital letters , special characters and it also should have a number "
      );
    }

    return pass;
  }
}

console.log(passValidator(password));
