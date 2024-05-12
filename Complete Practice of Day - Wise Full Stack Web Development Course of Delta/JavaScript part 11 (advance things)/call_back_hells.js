// Call back hells is a serious problem with our call backs in javaScript , here we have to discuss that what actually is call back hells are:

// basically, the nested of callbacks (call back in another call back is considered as the call back hell)

let heading = document.getElementById("main_heading");

heading.innerText = "Owais Nadeem";

let changeColor = (color, delay, nextColorChange) => {
  setTimeout(() => {
    heading.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
};

changeColor("red", 1000, () => {
  changeColor(
    "blue",
    1000,
    () => {
      changeColor(
        "yellow",
        1000,
        () => {
          changeColor("pink", 1000);
        },
        1000
      );
    },
    1000
  );
});

// setTimeout(() => {
//   heading.style.color = "red";
// }, 1000);
// setTimeout(() => {
//   heading.style.color = "blue";
// }, 2000);
// setTimeout(() => {
//   heading.style.color = "green";
// }, 3000);
// setTimeout(() => {
//   heading.style.color = "purple";
// }, 4000);
