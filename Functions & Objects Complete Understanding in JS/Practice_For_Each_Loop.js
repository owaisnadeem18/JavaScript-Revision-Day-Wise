// For Each Loop is Higher Order Priority Function , means it takes another complete function as a parameter.

// Question: Print the square of indivisual numbers of our array , which are present in our array of numbers

num = [4, 8, 9, 3, 2, 7, 6];

num.forEach((variable, idx, arr) => {
  console.log(
    `The square of ${variable} is = ${
      variable * variable
    } at index "${idx}" and array was "${arr}" `
  );
});
