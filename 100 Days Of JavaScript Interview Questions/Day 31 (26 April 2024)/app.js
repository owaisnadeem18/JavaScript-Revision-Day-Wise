// // Day # 31 ( 26 April 2024 )

// // password validator

let password = prompt("Enter your password");

let isUpperCase = false;
let hasNumber = false;
let hasSpecialCharacters = false;

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

function passwordValidator(pass) {
  let messages = [];

  if (pass === "") {
    messages.push("Password should not be empty !!! ");
  } else {
    for (let i = 0; i < pass.length; i++) {
      if (pass[i] >= "A" && pass[i] <= "Z") {
        isUpperCase = true;
      }
      if (!isNaN(parseInt(pass[i]))) {
        hasNumber = true;
      }
      if (specialCharacters.includes(pass[i])) {
        hasSpecialCharacters = true;
      }
    }

    if (!isUpperCase) {
      messages.push("Your Password does not have any capital letter inside it");
    }

    if (!hasNumber) {
      messages.push("Your Password does not have any number inside it");
    }

    if (!hasSpecialCharacters) {
      messages.push("Your Password does not have any special character");
    }
  }

  if (isUpperCase && hasNumber && hasSpecialCharacters) {
    messages.push("Password has been set !!! ");
  } else {
    messages.push("Invalid Password");
  }

  return messages.join("\n");
}

alert(passwordValidator(password));
