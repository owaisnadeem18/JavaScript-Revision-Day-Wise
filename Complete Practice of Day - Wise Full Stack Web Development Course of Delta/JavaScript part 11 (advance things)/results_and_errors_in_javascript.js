// Results and errors in promises are basically the results of the promises , which we can see as the output of the promise

let age = Math.floor(Math.random() * 60) + 1;

let AgeFunction = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("The Promise has been resolved");
      console.log(age);
    } else {
      reject("The promise has rejected");
      console.log(age);
    }
  });
};

AgeFunction(age)
  .then((result) => {
    console.log("Promise ko resolve krwa liya then case may ");
    console.log(result);
  })
  .catch((error) => {
    console.log("Promise k error ko catch kr liya catch case may ");
    console.log(error);
  });

// These results and error methods are the arguments which tells us about the promises results
