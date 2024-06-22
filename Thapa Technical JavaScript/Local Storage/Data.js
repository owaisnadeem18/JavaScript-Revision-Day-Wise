// Getting the address of buttons

let data = {
  myName: "Owais Nadeem",
  Profession: "Front End Web Developer",
  University: "Dawood UET",
  Grades: {
    firstSemes: "3.9 gpa",
    secondSemes: "3.9 gpa",
    thirdSemes: "3.9 gpa",
    fourthSemes: "3.9 gpa",
    FifthSemes: "3.9 gpa",
    sixthSemes: "3.9 gpa",
    sevenethSemes: "3.9 gpa",
  },
};

console.log(data);

let store = document.getElementById("store");
let get = document.getElementById("read");
let del = document.getElementById("remove");

let addToLocalStorage = () => {
  localStorage.setItem("Data:", JSON.stringify(data));
  console.log(JSON.stringify(data));
};
let GetFromLocalStorage = () => {
  let data_parsed = JSON.parse(localStorage.getItem("Data:"));
  console.log(data_parsed);
};
let DeleteFromLocalStorage = () => {
  localStorage.removeItem("Data:");
};

store.addEventListener("click", () => {
  addToLocalStorage();
});
get.addEventListener("click", () => {
  GetFromLocalStorage();
});
del.addEventListener("click", () => {
  DeleteFromLocalStorage();
});
