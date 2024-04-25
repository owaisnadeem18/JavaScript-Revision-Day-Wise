// Write a JavaScript Program in which find the type of the triangle that either the triangle is

// 1.) Equilateral Triangle
// 2.) Isosceles Triangle
// 3.) Scalene Triangle

// Day 04:-

let side_1_of_triangle = +prompt(
  "Please enter the first side of the triangle "
);
let side_2_of_triangle = +prompt(
  "Please enter the second side of the triangle "
);
let side_3_of_triangle = +prompt(
  "Please enter the third side of the triangle "
);

let checkTriangleSide = (a, b, c) => {
  if (!isNaN(a, b, c)) {
    if (a == b && a == c) {
      return `The triangle is Equilateral triangle `;
    } else if (a == b && a !== c) {
      return `The triangle is Isosceles triangle `;
    } else if (a != b && a != c) {
      return `The triangle is Scalene triangle `;
    }
  } else {
    return alert("Please Enter a valid Input ");
  }
};

console.log(
  checkTriangleSide(side_1_of_triangle, side_2_of_triangle, side_3_of_triangle)
);
