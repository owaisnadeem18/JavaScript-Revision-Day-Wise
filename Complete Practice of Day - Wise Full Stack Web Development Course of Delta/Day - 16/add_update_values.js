// How can we add or update values in javaScript objects ?

let student = {
  Stud_name: "Owais Nadeem",
  Age: 22,
  gpa: 3.3,
  department: "BSCS ",
};

console.log(student);

// Here we can update the value of object

student.gpa = 3.0;

console.log(student);

// Here we can add a new value into the object

student.roll_number = 20;

console.log(student);

// We can also delete any of our key of object , using the following syntax:

delete student.gpa; // through this way , we have deleted the gpa of object -> (student)

console.log(student);
