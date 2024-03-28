// Qs6. Write a JavaScript program to check if an element exists in an array or not

let arr = ["67", 53, "Owais", true];

let element = "Owais";

if (arr.indexOf(element) != -1) {
  console.log("The element", element, "is present in the array", arr);
} else {
  console.log("The element", element, " is not present in ", arr);
}
