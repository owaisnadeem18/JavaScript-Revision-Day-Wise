// Day 23
// 18-April-2024

// JavaScript In 100 days
// Create a function named as CalculateMode() & find the mode in the array

let arr = [4, 8, 1, 3, 8, 4, 8, 9, 9, 7, 4, 1, 1, 2, 3, 4];

let CalculateMode = (array) => {
  let max_count = 0;
  let Mode = null;

  let counts = {};

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    console.log(counts[element]);
    if (counts[element] > max_count) {
      max_count = counts[element];
      Mode = element;
    }
  }

  console.log(counts);

  console.log(Object.keys(counts).length);

  return Mode;
};

console.log(`Mode = ${CalculateMode(arr)}`);
