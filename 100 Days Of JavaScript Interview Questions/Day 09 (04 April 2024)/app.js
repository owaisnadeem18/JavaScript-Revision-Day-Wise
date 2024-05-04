// Day 08 (03 April 2024)

// Write a function in JavaScript , in which we can find the average of the numbers which are present in our array

let arr = [4, 9, 67, 34, 21, 90, 40];

let caluculateAvg = (array) => {
  let total = arr.length;
  let answer;
  let sum = array.reduce((a, b) => {
    return a + b;
  }, 0);

  let avg = sum / total;
  return avg;
};

console.log(`The average of array ${arr} is: ${caluculateAvg(arr)}`);
