// Array Destructuring

// If I want to access the indivisual indexes of any array in the form of creating a variable inside it , then I will call it Array Destructuring

let any_Array = ["Owais", "Hamza", "Ali ", "Faisal"];

// Array Destructuing:
let [first, second = "Owais", third, fourth, fifth = "45"] = any_Array;

// Now let's see it's output:

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
