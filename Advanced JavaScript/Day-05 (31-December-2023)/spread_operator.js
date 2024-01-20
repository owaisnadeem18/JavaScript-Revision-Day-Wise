// Spread Operator Concept In JavaScript

// If we want to get the indexes of a single array in another array , then we can easily get it , by using the following method:-

let array = ["Owais", "Hamza", "Ali", "Asghar"];

let array1 = ["hammad", "Saleem"];
let array2 = ["hammad", "Saleem", 45, 90, 345]; // Now if I want to get the all values of 'array' & 'array1' array in 'array_2' , then I will use the following technique

array_concatenated = [...array, ...array1, ...array2];

console.log(array_concatenated);
