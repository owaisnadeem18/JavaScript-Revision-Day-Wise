// Day 36 (02 May 2024)

// Here, we have to convert an object of JavaScript into the array & then after it once again we have to convert the same array to object again

let obj = {
  myName: "Owais",
  myAge: 22,
  profession: "JavaScript Learner",
};

let entries = Object.entries(obj);

console.log(entries); // it converts complete object in the form of multi dimensional array

console.log(entries.flat()); // it converts multi dimensional array into single dimension

// Now we are converting the array into the object

console.log(Object.fromEntries(entries)); // Object.fromEntries(array) is used to convert the array into the object
