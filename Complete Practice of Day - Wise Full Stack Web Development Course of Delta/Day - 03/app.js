// If Else COnditional Statements

// Here is a practice question for us:

// Tell the user to perform any operation related to traffic light signal

let traffic_light = prompt(
  "Enter the traffic light signal color "
).toLowerCase();

if (traffic_light == "red") {
  console.log("You need to wait for some time till green light");
} else if (traffic_light == "green") {
  console.log("You can move !!! ");
} else if (traffic_light == "yellow") {
  console.log("Move solowly ");
} else {
  console.log("Enter the valid traffic light color !!! ");
}
