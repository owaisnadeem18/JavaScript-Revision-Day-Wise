// let's talk about call back functions in javaScript

// What is a Callback?

// A callback is simply a function that is passed into another function as an argument and is executed after the completion of that function.

// Here is an example for us:

// function pizzaShop(order, callback) {
//   console.log("Making pizza: " + order);
//   setTimeout(() => {
//     callback(); // Calling the callback function when the pizza is ready
//   }, 3000); // Simulates a 3-second wait for pizza
// }

// function pizzaIsReady() {
//   // this function is a call back because it will be an argument letter on

//   console.log("Pizza is ready! Come and get it!");
// }

// // Calling the main function and passing the callback
// pizzaShop("Pepperoni", pizzaIsReady);

// The above code was an example for us , to understand call back  ,  now let's dicscuss about call  back hell

// Call back hell is a common problem in JavaScript when dealing with asynchronous callbacks. It occurs when a function calls another function, and the second function calls another function, and so on, resulting in a chain of callbacks that can become hard to follow and debug.

// Here is an example of call back hell:

function InternetSpeed(goodCase, badCase) {
  let netSpeed = Math.floor(Math.random() * 10) + 1;

  if (netSpeed > 6) {
    goodCase();
  } else {
    badCase(netSpeed);
  }
}

console.log(
  InternetSpeed(
    () => {
      console.log("You are a fast internet connection! Data 01 saved");

      InternetSpeed(
        () => {
          () =>
            console.log(
              "You are a fast internet connection! Data 02 also saved"
            );
          InternetSpeed(
            () => {
              console.log("You are a fast internet connection , data 03 saved");
            },
            () => {
              console.log(
                "You are a slow internet connection , data 03 not saved"
              );
            }
          );
        },
        () => console.log("You are a slow net connection , data 02 not saved")
      );
    },
    () => {
      console.log("You are a slow internet connection! Data 01 not saved");
    }
  )
);
