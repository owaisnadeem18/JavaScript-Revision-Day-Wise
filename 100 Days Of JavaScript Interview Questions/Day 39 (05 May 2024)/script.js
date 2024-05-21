// Here we have to find the age of our user with respect to it's birth date

// let date_of_birth = prompt("Enter your Age = ");
// // let currDate = new Date().getFullYear();

// function CalculateAge(a) {
//   let year_of_birth = new Date(a);
//   let curr_time = new Date();

//   let age = curr_time.getFullYear() - year_of_birth.getFullYear();

//   console.log(age);
//   let date_of_birth_month = new Date(a).getMonth();
//   let curr_month = curr_time.getMonth();

//   let month_diff = curr_month - date_of_birth_month;

//   if (
//     month_diff < 0 ||
//     (month_diff == 0 && curr_time.getDay() < year_of_birth.getDay())
//   ) {
//     age--;
//   }

//   return age;
// }

// console.log("The age of the user is => ", CalculateAge(date_of_birth));

// This is the best way to attempt this question

const calculateAge = (str) => {
  return Math.floor((new Date() - new Date(str)) / (1000 * 60 * 60 * 24 * 365));
};
console.log(calculateAge("1/1/2010"));
console.log(calculateAge("11/11/2023"));
console.log(calculateAge("6/15/2023"));
