// There are three kinds of scope in JS

// Global Scope
// Function Scope
// Lexical Scope

let sum = 67; // Global scope

let sum_funct = () => {
  let sum = 45; // functional scop
  return sum;
};

console.log(sum_funct());
console.log(sum);
