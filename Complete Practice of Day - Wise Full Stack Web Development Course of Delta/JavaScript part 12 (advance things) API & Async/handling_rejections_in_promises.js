// handling_rejections_in_promises of javaScript

// Now let's suppose that any promsise has been rejected during the execution of the program , then I can just use try and catch methods in JavaScript promises

naam = document.getElementById("name");

naam.style.color = "red";

let one_sec = 1000;

function changeColor(rang, waqt) {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 10) + 1;

    if (random < 6) {
      reject("Number chota aya hay ");
    }

    setTimeout(() => {
      naam.style.color = rang;
      resolve("Promsie pura huwa ");
      console.log(
        `Color has  been changed to ${rang} in duration of ${
          waqt / one_sec
        } second & the random number is ${random} `
      );
    }, waqt);
  });
}

async function another_function() {
  try {
    await changeColor("orange", 1000);
    await changeColor("black", 1000);
    await changeColor("green", 1000);
  } catch (err) {
    console.log("Error ko pakar liya hay may nay ");
    console.log(err);
  }

  let num = 56;
  console.log(num);
}
