// async await

// function randomNumbers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let rand = Math.floor(Math.random() * 20) + 1;
//       console.log(rand);
//       resolve("Random number a gya hay ");
//     }, 1000);
//   });
// }

// async function check() {
//   randomNumbers(); // When I am calling the first function , I am facing the issue that other functions are also calling along with first function with their own random numbers
//   await randomNumbers(); // to resolve the issue I am using await key word . Keep in mind await keyword can only be used in the async functions of JavaScript
//   await randomNumbers();
//   await randomNumbers();
//   await randomNumbers();
//   await randomNumbers();
// }

// check();

// Let's have a look at another example

naam = document.getElementById("name");

let one_min = 1000;

function changeColor(rang, waqt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      naam.style.color = rang;
      resolve("Promise has been resolved !!! ");
      console.log(
        `color has been changed to ${rang} in duration of ${
          waqt / one_min
        } seconds `
      );
    }, waqt);
  });
}

async function aik_or_function() {
  await changeColor("orange", 1000);
  await changeColor("black", 1000);
  await changeColor("purple", 1000);
  await changeColor("green", 1000);
  await changeColor("red", 1000);
}
