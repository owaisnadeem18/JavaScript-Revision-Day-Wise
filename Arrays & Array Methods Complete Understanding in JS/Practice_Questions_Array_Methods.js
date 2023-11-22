// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // a. Remove the first company from the array
// console.log(companies.splice(0, 1));
// console.log(companies);

// b. Remove Uber & Add Ola in its place
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.splice(2, 1, "Ola");
// console.log(companies);

// c. Add Amazon at the end.
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
check = companies.length;
companies.splice(companies.length, 0, "Amazon");
console.log(companies);
console.log(check);
