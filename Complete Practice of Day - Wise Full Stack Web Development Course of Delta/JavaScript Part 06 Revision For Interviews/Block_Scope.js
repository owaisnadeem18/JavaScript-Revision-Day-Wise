// Block Scope:
// This is the scope which could only be used inside our {} braces

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i); // i is not defined , because the above assigned (i) variable is only for our block scope , only applicable inside our {} braces
