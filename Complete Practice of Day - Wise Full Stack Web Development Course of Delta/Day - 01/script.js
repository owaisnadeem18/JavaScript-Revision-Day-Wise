// First Interview Question:-

// What is NaN ?

// Iski full form hoti hay not a number, ye tab aye ga jab 0/0 hoga , ya kisi string ko number bananay key koshish hogi meri

// for example

// let myName = "Owais " - 45;

// console.log(typeof myName);

// 2nd interview question:

// ye btao k kis arithmetic operator key precedence (priority zyada hoti hay ??)

// 1. ()
// 2. **
// 3. * , / and % (all have same priority , calculates from left to right)
// 4. + , - (all have same priority , calculates from left to right)

// console.log(5 + (9 / 5) * 3);
// console.log(1.8 * 3);

// 3rd interview question:

// variables keywords in JS

// let a = 45;
// let b = 92; // let is used to declare and initialize the variable .Most commonly we should use let in industry
// console.log(b - a);

// ===========================================================

// Unary Operators

// let a = 9;
// a++; // value of a has been updated
// console.log(a); // it will print 10

// let b = 5;
// b = a;
// console.log(b); // the answer will be 10

// b = 15;
// a = 29;
// b = a++; // a has been updated to 30, but the value assigned to new variable i.e 'b' is 29
// console.log(b); // the answer will be 29 , not 30
// console.log(a); // but the value of 'a' has been updated

// ===========================================================

// Practice Question for the unary operators

// What is the value of our each variable in each line of code:
// let num = 5;
// console.log(num); // num =5
// let newNum = num++;

// console.log("New Num = ", newNum); // newNum = 5 hua , because (num key purani value assign hui hay newNum ko)
// while the num has been actually updated to '6' from '5'
// console.log("Updated Num = ", num);

// currently the value of num is 6 and new num as '5'
// console.log(newNum);

// console.log(num);
// numNum = ++num;
// console.log(num);
// console.log(newNum); // the vaue of num is 7 now , and newNum as '6

// console.log("Num is = ", num);
// console.log("New Num is = ", newNum);

// Currently num is 7 and new num is 5

// newNum = ++num; // num 7 say 08 hua , or is nay isko bhi update krdiya sath he , because of ++operator (pre increment)

// console.log(newNum); // newNum = 8

// console.log(num); // num = 8

// There are three ways / cases of variable naming convention

// 1. camel case:

// let myName; // this is the camelCase

// 2. snake case:

// let my_name; // this is the my_name

// 3. pascal case:

// let MyFullName; // , this is the PascalCase , (first letter of the variable should be capital)

// ===================================== Boolean Data Type ===============================================

// True or False comes in the category of boolean data type

// let age = 90;
// console.log(age < 10); // because age is not smaller than 10 (false will be output)

// let bool = true;
// console.log(typeof bool); // boolean will be the output

// Check output

let isTrue = "true"; //what will be the answer
console.log(isTrue);
console.log(typeof isTrue); // string , because it is enclosed in the form of commas

// isTrue = True; // what will be the answer ? It will throw an error, because this is not a valid way to enter true boolean data type

// ====================== String Data Type in JS =========================

// Following are the some ways to write something in the form of string. We can do it, by enclosing it into commas , thesese could be

// single commas ''
// double commas ""
// backticks ` `

let str = "JavaScript is Love ";
console.log(str);
str = "JavaScript       is                  Love ";
console.log(str); // it will not ignore the white spaces and other stuff , it will add them while printing the str

str = "'JavaScript' is Love ";
console.log(str); // we can also add
