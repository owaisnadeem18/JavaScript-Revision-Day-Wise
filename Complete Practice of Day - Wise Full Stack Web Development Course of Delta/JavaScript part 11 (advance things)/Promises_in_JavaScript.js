// Now , here we have to study about the promises in JavaScript.

// Promise is actually the object in JavaScript which tells about the eventual completion or failure of a task which is of an asynchronous nature

// for example user has to enter his age to check either he can drive the car or not

let your_Age = +prompt("Enter your age = ");

let YourAge = (umer) => {
  return new Promise((yes, no) => {
    if (umer >= 18) {
      yes("You can drive the vehicle ");
    } else if (umer < 18) {
      no("No ! You are underage ");
    } else {
      alert("Please enter a valid input age");
    }
  });
};

console.log(YourAge(your_Age));
