// Write a program in which prompt a user to enter two number ranges and then push the missing numbers in between these number ranges into your array.

// let input_1 = prompt("Enter Number 01 = ");
// let input_2 = prompt("Enter Number 02 = ");

let input_1 = 1;
let input_2 = 4;

let Push_Missing_Numbers = (a, b) => {
  let arr = [];

  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
};

console.log(Push_Missing_Numbers(input_1, input_2));
