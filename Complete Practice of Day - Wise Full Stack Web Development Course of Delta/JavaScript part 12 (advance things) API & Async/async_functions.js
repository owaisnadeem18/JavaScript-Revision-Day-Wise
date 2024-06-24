// async_functions

// they are the functions which by default return you a promise

// for example

// async function greet() {
//   return `Hello World ! `;
// }

// console.log(greet());

// You can also use arrow function they will also return

let greet = async () => {
  //   abc();
  return `Hello World ! `;
};

greet()
  .then((result) => {
    console.log("Promise has been resolved : ", result);
  })
  .catch((err) => {
    console.log("Promise has been rejected : ", err);
  });
