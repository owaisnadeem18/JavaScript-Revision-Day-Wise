// Loops with Arrays

let fruits = ["apple ", "banana", "orange", "mango", "grapes"];
fruits.push("bananas");

// for (let i = 0; i < fruits.length; i = i + 1) {
//   console.log(`At Index ${i}, we have ${fruits[i]} `);
// }

// If for example I want to print all these things in the reverse order then,

for (let i = fruits.length; i >= 0; i--) {
  console.log(`At Index ${i}, we have ${fruits[i]} `);
}
