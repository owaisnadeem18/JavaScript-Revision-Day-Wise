// Interview Question:
// How we can get a dynamic object

// Let's see an example:

let myName = "Owais";

let bioData = {
  [myName]: "Owais", // we can use [] this kind of braces , if we ever want to get the dynamic object in JavaScript
  myAge: 22,
};

console.log(bioData);
