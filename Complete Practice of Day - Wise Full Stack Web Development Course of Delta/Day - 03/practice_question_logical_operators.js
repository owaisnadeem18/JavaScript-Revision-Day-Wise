// Here is a practice question:

// A string will be declared as the 'good string' if we can observe that the string is starting with 'o' and has the length of 8

let str = "Hello".toLowerCase();

if (str[0] == "o" && str.length >= 5) {
  console.log(
    `The string is ${str} and the string can be called as 'Godo String' `
  );
} else {
  console.log("The string is", str, "and It is not a good string");
}
