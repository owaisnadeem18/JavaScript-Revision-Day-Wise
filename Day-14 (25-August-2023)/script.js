// Some other useful and important methods in our string in JAVASCRIPT :

// To UpperCase

// string = "Owais Nadeem is a front end web developer ";
// console.log(string.toUpperCase()); // will print the result in the upper case

// // To LowerCase

// uppser_string = "OWAIS NADEEM IS A FRONT END WEB DEVELOPER"; // will print the result in the Lower case

// console.log(uppser_string.toLowerCase());

// string1 = "Owais Nadeem - ";
// string2 = "Front End Web developer";

// console.log(string1.concat(string2));
// // This method is just similar to:

// console.log(string1 + string2);

// Trim() method is the next method on which we have to takr a look now

// trim_string = "               Owais Nadeem              ";
// console.log(trim_string); // Will print text with extra strings from left and right
// console.log(trim_string.trim()); // Will print text without extra strings from left and right . Becasue it's function is to trim the extra spaces . But , keep in mind that it will just trim the extra spaces from the starting and ending of the string . These extra spaces are called whitespaces

// trim_string = "               Owais                     Nadeem              ";
// console.log(trim_string.trim()); // It has not removed whitespaces from between the two texts

// String method to convert a string into an array !

// string = " 5 ,8,04 , 3,45 ,14, 39, 64 ,97 ";
// console.log(string.split(" , "));

// X--------------------------- A Method of Date & Time in JavaScript -----------------------------X

// Following are the 04 methods to create a new Date object . It counts the date since 1st January 1970

// let date_current = new Date(); // With this date constructor we find both date and time , with the same Date constructor

// console.log(date_current);
// console.log(date_current.toLocaleString());
// console.log(date_current.toString()); // If you wanna check your local computer's time . Then here is the code

// console.log(Date.now());

// let curr_date = new Date(2023, 8); // you must have to pass two arguments as the year and month . Or you can leave it alone . If you're not following the previous 2 rules then JS will throw an annonymous date

// console.log(curr_date.toLocaleString());

// let curr_date = new Date();
// console.log(curr_date.toLocaleString());

// Now, we've to deal with the methods directly related to the Date() method

// const curr_date = new Date();

// // console.log(curr_date.toLocaleString());
// console.log(curr_date.getFullYear()); // Will give you the current year
// console.log(curr_date.getMonth()); // Will give you the current month
// console.log(curr_date.getDate()); // Will give you the current date
// console.log(curr_date.getDay()); // Will give you the current day

// Now, we've to deal with the methods directly related to the Time() method

// const curr_date = new Date();
// console.log(curr_date.getTime());
// console.log(curr_date.getHours());
// console.log(curr_date.getMinutes());
// console.log(curr_date.getSeconds());
// console.log(curr_date.getMilliseconds());
