const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log("Accumulator:", accumulator);
  console.log("Current Value:", currentValue);
  return accumulator + currentValue;
}, 0);

console.log("Final Result:", sum);
