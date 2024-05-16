let h1 = document.getElementById("main_heading");

h1.style.color = "red";

// Now we have to understand all these things through promises concepts in JavaScript

// let changeColor = (color_, delay) => {
//   // Now I have to do the same task , using promises in JavaScript

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color_;
//       resolve("Kaam ho gya hay promises k sath");
//     }, delay);
//   });
// };

// console.log(changeColor("blue", 5000));

function changeColor(color_diya, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color_diya;
      resolve(`Color has been replaced with ${color_diya}`);
    }, delay);
  });
}

changeColor("blue", 1000)
  .then(() => {
    console.log(`Color has been replaced with blue `);
    return changeColor("black", 1000);
  })
  .then(() => {
    console.log(`Color has been replaced with black `);
    return changeColor("pink", 1000);
  })
  .then(() => {
    console.log(`Color has been replaced with pink `);
    return changeColor("purple", 1000);
  })
  .then((result) => {
    console.log(`Color has been replaced with purple `);
    console.log(result);
    console.log("All Operations of color changing have been performed");
  });
