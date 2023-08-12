// Continue Condition In JavaScript

// Understand it using for loop

// for (let b = 1; b <= 10; b++) {
//   if (b == 5) {
//     continue; // (when b == 5 ) then "continue" forcefully recontinue the running functionality of our for loop istead of completing its task
//   }

//   console.log(b);
// }

for (let b = 1; b <= 10; b++) {
  if (b == 5) {
    break; // (when b == 5 ) then "break function" forcefully break the loop and our code gets out from the loop without fulfilling the requirement
  }

  console.log(b);
}
