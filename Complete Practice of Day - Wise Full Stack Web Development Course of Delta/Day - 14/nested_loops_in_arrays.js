// // nested_loops_in_arrays

// let arr = [
//   ["banana ", "apple", "mango"],
//   ["banana1 ", "apple1", "mango1"],
//   ["banana2 ", "apple2", "mango2"],
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log("I am an inner loop for", i, "times");

//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// Here we have to solve another question for the clarity in nested loops of array

// Keep this thing in mind that whenever you are supposed to travel through the elements of nested arrays , then we will always use nested loops

// Here is another example:

let avg = [
  ["Owais", 90],
  ["Hamza", 80],
  ["Hammad", 95],
];

for (let i = 0; i < avg.length; i++) {
  console.log(`Information for student # ${i + 1} `);
  for (let j = 0; j < avg[i].length; j++) {
    console.log(` ${avg[i][j]}`);
  }
}
