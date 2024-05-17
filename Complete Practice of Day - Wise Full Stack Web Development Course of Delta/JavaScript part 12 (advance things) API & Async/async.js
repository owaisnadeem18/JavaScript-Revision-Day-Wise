// Here, we have to study about the asynchronous function of JavaScript

// every async function returns a promise even if it is a simple function or arrow function of ecma script

// async function salam() {
//   //   sala();
//   throw "error has been thrown ";
//   return "hello";
// }

// salam()
//   .then((result) => {
//     console.log("No error ", result);
//   })
//   .catch((error) => {
//     console.log("404 Not found = ", error);
//   }); // now we want to use then and catch in our function

// It will also work perfectly on our arrow function

let owais = async () => {
  throw "Some error .... ";
  return "hello";
};

owais();
