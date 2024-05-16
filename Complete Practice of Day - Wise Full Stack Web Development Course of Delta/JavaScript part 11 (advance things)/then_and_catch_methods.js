// then_and_catch_methods in JavaScript promises

// then and catch are basically the two methods of promises which are used in our promises.

let your_Age = +prompt("Enter your age = ");

let YourAge = (umer) => {
  return new Promise((yes, no) => {
    console.log(umer);
    if (umer >= 18) {
      yes("You can drive the vehicle ");
    } else if (umer < 18) {
      no("No ! You are underage ");
    } else {
      alert("Please enter a valid input age");
    }
  });
};

let variable = YourAge(your_Age);

variable
  .then(() => {
    console.log("Promise was resolved !!! ");
    console.log(variable);
  })
  .catch(() => {
    console.log("The Promise is not resolved !!! ");
    console.log(variable);
  });
