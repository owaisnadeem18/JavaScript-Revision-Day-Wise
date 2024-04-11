/* Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer]

Example :

7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1 */

let num = +prompt("Enter a number: ");

if (isNaN(num)) {
  alert("Please enter a valid number as input ");
}

let find_fact = (a) => {
  if (a == 0 || a == 1) {
    return 1;
  } else {
    return a * find_fact(a - 1);
  }
};

console.log(find_fact(num));
