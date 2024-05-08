// Day 30

// Write a program in which prompt a user to enter two number ranges and then push the missing numbers in between these number ranges into your array but today you have to use the recursive approach while solvintg this question .

let input_1 = +prompt("Enter Number 01 = ");
let input_2 = +prompt("Enter Number 02 = ");

let find_Missing = (a, b, arr = []) => {
  if (a <= b) {
    // base case of recursion
    arr.push(a);
    return find_Missing(a + 1, b, arr);
  }

  return arr;
};

console.log(find_Missing(input_1, input_2));
