// 1; // If you wanna see the time in your terminal then you have to write:

// time = new Date().toLocaleTimeString();

// console.log(time);

// 2; // If you wanna see the date in your terminal then you have to write:

// date = new Date().toLocaleDateString();

// console.log(date);

// 3;  If you wanna see the date and time in your terminal then you have to write:

// time_and_date = new Date().toLocaleString();

// console.log(time_and_date);

// ------------------------------------MATH Objects on JavaScript-----------------------------------------

// If you wanna perform mathematical operations on mathematical numbers in JavaScript . Then , you must need to use MATH method in JavaScript

// There are following some Mathematical Operations on MATH function in JavaScript

// 1. Get the value of Pie:
// console.log(Math.PI);

// 2. To make the value in round-of form. It converts a float number into it's nearest integer number
// Number = 89.19545463;
// console.log(Math.round(Number));

// 3. The next method is MATH.Pow(x , y) . It returns value of x to the power of y
// console.log(Math.pow(2, 3)); // The power of (X) to the value of (y) will get return to us
// console.log(2 ** 3); // both will perform the same task

// 4. To find the square root of any number in JavaScript
// console.log(Math.sqrt(49)); // It will print the square root value of (49)

// 5. To convert the every negative number into positive number we will use the math.abs method
// console.log(Math.abs(-678)); // It will always ignore the (-) sign . It somehow works like our mode in Maths

// 6. To convert your number in the round-of even if it's .01 % then we will use Math.ceil()
// console.log(Math.ceil(89.00001)); // will print the round-of number

// 7. Math.floor() is used to take the float number back to integer number in the reverse order after ignoring the point values even if they are (.99)
// console.log(Math.floor(4.99)); // will reverse back to previous integer number

// 8. If you wanna find out minimum and maximum numbers between integer numbers then you will use:
// console.log(Math.min(9, 7, 4, 2, 1, 8)); // Will print mimimum value
// console.log(Math.max(9, 7, 4, 2, 1, 8)); // Will print maximum value

// 9. MATH.random() is the method which generates random numbers between a specific range 0 to 9:
// console.log(Math.floor(Math.random() * 10));

// 10. Math.trunc() is the method which is used to just return the value before the decimal .
// Note ---> Interview Question: If you pass the +ve value through the method of Math.trunc() then it will must give you back the integer value before the decimal point that's why it's work same like Math.floor() (Only if you pass the positive value) . If you pass the negative value through it , then it will work same like math.ceil()

// console.log(Math.trunc(67.9)); // work same like the Math.floor()
// console.log(Math.floor(67.9)); // work same like the Math.trunc()

// console.log(Math.trunc(-67.9)); // If you will pass the -ve value then it will work same like the Math.ceil()
// console.log(Math.ceil(-67.9)); // work same like the Math.ceil()

// -----------------------------------------------------Methods of Math have been completed----------------------------------------------------------------
