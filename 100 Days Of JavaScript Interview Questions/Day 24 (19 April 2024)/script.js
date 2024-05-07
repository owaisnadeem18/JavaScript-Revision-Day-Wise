// here we have to write a program in which we have to create a function which can take the array of numbers and can return the mode number from that array

let arr = [4, 8, 4, 2, 3, 1, 2, 3, 1, 5, 3, 3];

let max = 0;
let counts = {};
let mode;

let FindMode = (array) => {
  for (let elements of array) {
    counts[elements] = (counts[elements] || 0) + 1;
    if (counts[elements] > max) {
      max = counts[elements];
      mode = elements;
    }
  }
  console.log(counts);
  return mode;
};

// calling a function:

console.log(`The mode of array [${arr}] is = ${FindMode(arr)}`);
