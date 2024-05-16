// Here we have to understand the promise chaining concept in JavaScript

let age = Math.floor(Math.random() * 70) + 1;

let AgeFunction = (umer) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You can drive the car ");
      console.log(age);
    } else if (age < 18) {
      reject("You are underage !!! Baday ho kar aao");
      console.log(age);
    }
  });
};

AgeFunction(age)
  .then(() => {
    console.log("Promise 01 has been resolved ");
    return AgeFunction(age);
  })
  .then(() => {
    console.log("Promise for the 2nd number has been resolved !!! ");
    return AgeFunction(age);
  })
  .then(() => {
    console.log("Promise for the 3rd number has been resolved !!!");
  })
  .catch(() => {
    console.log("Promises have the issues in themselves ");
  });
