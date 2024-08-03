let box = document.getElementById("box");

let text = document.getElementById("rand-Color");

let GenrateBtn = document.getElementById("generateBtn");

// let's create a random color

// let randColor = Math.random();

GenrateBtn.addEventListener("click", () => {
  //   alert("Haan ! ");

  box.style.backgroundColor = GenerateRANDOMCOLOR();

  text.innerText = GenerateRANDOMCOLOR();
});

function GenerateRANDOMCOLOR() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
