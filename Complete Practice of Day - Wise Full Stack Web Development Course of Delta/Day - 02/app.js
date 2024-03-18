// Indexing of Strings in JavaScript

let myName = "Owais Nadeem";

console.log("My name is =", myName);

// Indexing

console.log(myName[4]); // will print 's' because it is starting from 0 to string.length - 1

// If I want to access the last position(index) of a string

// I will simply write the following code

console.log(myName[myName.length]); // it will print 'undefined' because it is not defined in that specific string , you have to write the following , to access the last index of any string

console.log(myName[myName.length - 1]);

// String Concatenation

firstName = "OWais";
lastName = "Nadeem";

let fullName = firstName + " " + lastName;

console.log(fullName);

// If I concatenate a number with a strijng , then the result would be following:

let num = 56;

console.log(fullName + num);

// Null & Undefined In JavaScript

// 1. Undefined aisa variable hay , jis ki value koi bhi assign nahi key gaey hay. Ya simple words may her wo cheez jo JS ko nahi pata , wo keh deti hay k undefined

// 2. Null humaray pass wo value hoti hay kisi bhi variable key , jis ko abhi hum loogn nay khud say set nhi kiya aagay jaa kar karain gay , magar hum usay declare karwa k assign krtay hain as 'null'

// Null is actually a keyword in JavaScript just like true or false

// Practice MCQ's Question

myName = " ";

console.log(myName.length); // 1 print hoga , because of space
