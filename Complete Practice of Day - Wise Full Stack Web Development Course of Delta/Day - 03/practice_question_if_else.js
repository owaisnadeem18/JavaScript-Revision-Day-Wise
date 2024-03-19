// If we purchase a popcorn packet and we know that XL packet is of Rs. 250, L packet is of Rs. 150 , M is of Rs.100 and S is of Rs.70 . Then how we can code it

let size = prompt(
  "Enter the size of the packet of Popcorn: (XL , L , M , S ) "
).toLowerCase();

if (size == "xl") {
  console.log("You have to pay Rs. 250");
} else if (size == "l") {
  console.log("You have to pay Rs. 150");
} else if (size == "m") {
  console.log("You have to pay Rs. 100");
} else if (size == "s") {
  console.log("You have to pay Rs. 70");
} else {
  console.log("Incorrect Prompt");
}
