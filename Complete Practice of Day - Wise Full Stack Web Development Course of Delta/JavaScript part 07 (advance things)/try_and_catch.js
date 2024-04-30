// Here , we have to understand catch and try in JavaScript which means that try any code (for trial) , if it is throwing any error , then give this code to your catch , so that the following lines of code can run without any issue

let a = 89;

console.log(a);

try {
  console.log(b);
} catch (err) {
  console.log("Bhai pehlay declare to karwao na apnay b variable ko ");
  console.log(err);
}
console.log(d);

let c = 56;

console.log(c);
