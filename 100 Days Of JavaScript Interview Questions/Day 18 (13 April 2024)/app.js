// Day # 18

// Let's suppose the user has entered a single character of it's keyboard , we have to find out either the entered character is in upper case or not using ASCII code ...

// JavaScript Interview Questions Preparation

let char = prompt(
  "Dear User ! Please Enter any single character either in upper or in lower case"
);

let Upper_Case_Small_case = (char) => {
  let charCode = char.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    let upper = "The entered character is in Upper Case";
    return upper;
  } else if (charCode >= 97 && charCode <= 122) {
    let lower = "The entered character is in Lower Case";
    return lower;
  } else {
    alert("Please Enter a valid Input ");
  }
};

console.log(Upper_Case_Small_case(char));
