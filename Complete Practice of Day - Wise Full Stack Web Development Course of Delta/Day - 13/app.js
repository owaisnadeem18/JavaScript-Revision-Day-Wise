// Nested Loops

// Practice Question

// Printing multiples of a table like following

// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

let rows = 5;
let columns = 5;

for (let i = 2; i <= columns; i++) {
  let row_output = "";
  for (let j = 1; j <= columns; j++) {
    row_output += i * j + " ";
  }
  console.log(row_output);
}
