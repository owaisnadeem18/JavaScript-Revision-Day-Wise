// Promises in JavaScript

// What is a Promise?

// Promises are the objects which are used in JavaScript in order to get rid of call back hell in programming

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable way compared to deeply nested callbacks.

// Basic Syntax
// A Promise has three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

function promiseUnderstanding() {
  return new Promise((res, rej) => {
    let InternetSpeed = Math.floor(Math.random() * 10) + 1;

    if (InternetSpeed > 4) {
      res("Good Connection", InternetSpeed);
      console.log("Resolved Case ! ");
    } else {
      rej("Weak Connection", InternetSpeed);
      console.log("Reject Case ! ");
    }
  });
}

promiseUnderstanding();
