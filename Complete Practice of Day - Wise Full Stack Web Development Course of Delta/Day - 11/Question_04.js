// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

let arr = ["Owais", "hamza", "hammad", "Abdullah", "Faseeh"];

for (let i = 0; i < arr.length; i++) {
  let inner_index = 0;
  if (arr[i][inner_index] >= "a" && arr[i][inner_index] <= "z") {
    console.log(
      `The character is = ${arr[i][inner_index]} and it is in lower case`
    );
  } else if (arr[i][inner_index] >= "A" && arr[i][inner_index] <= "Z") {
    console.log(`The character is = ${arr[i][i]} and it is in Upper case`);
  }
}
