// X---------------------- Day - 02 (08/August/2023) ----------------------X

// Interview Question
// What is NaN is JavaScript ?

// NaN ==> Not a Number

// For example look at this code

// myName = "Owais Nadeem";
// myPhoneNumber = +923348889907;

// console.log(myName); //will print string
// console.log(myPhoneNumber); //will print number

// console.log(myName - myPhoneNumber); // Result is Nan (Not a Number)
// whenever we subtract a string from a number we always get NaN as our output

// isNaN -> it alwasy check either the declared variable has assigned value as a number or not

// console.log(isNaN(isNaN)); // will print True (It is an important question)

// Expressions and Operators :
// For Example:
// a = 8;
// b = 9;
// c = a + b; // a & b are the operands , while + is the arithmetic operation and = is the assignment operator
// console.log(c);

// Arithmetic Operators in Detail :
// " = " equal to operator
// " *= " multiply with number on the right side
// " -= " Subtract with number on the right side
// " += " Add with number on the right side
// " /= " Divide with number on the right side
// " %= " Take a modulus of a number on the right side

// Arithmetic Operators in Detail :
// "Easy and Common" Arithmetic Operators are as follows

// 1 Addition (+)
// a = 56 + 4;
// console.log(a);

// 2 Subtraction (-)
// a = 56 - 4;
// console.log(a);

// 3 Multiplication (*)
// a = 56 * 4;
// console.log(a);

// 4 Division (/)
// a = 56 / 4;
// console.log(a);

// "Important and Tricky" Arithmetic Operators are as follows:

//  5. Increment (++)
// (i)
// a = 6;
// console.log(++a); // first increase the value and after it , the value get printed
// (ii)
// a = 6;
// console.log(a++); // first print the value and after it , the value (with increment) get stored in it
// console.log(a); // The answer will get increase by one and will get printed in the terminal
// a = 6;
// b = a++ + 5;
// console.log(b); // Will add 5 in the above value of a (without increment because it is post increment oeprator)
// console.log(a); // The value of a with increament got printed now

// 6. Decrement (--)
// (i)
// a = 6;
// console.log(--a); // first decrease the value and after it , the value will get printed
// (ii)
// a = 6;
// console.log(a--); // first print the value and after it , the value (with decrement) get stored in it
// console.log(a); // The answer will get decrease by one and will get printed in the terminal

// 7. Modulus (%) Operator
// a = 6;
// b = 2;
// console.log(a % b);  //The remainder value in the result of division will get printed in my console
// a = 11;
// b = 4;
// console.log("The remainder value is : " + (a % b));

// 8. Exponentiation Operator
// a = 2;
// b = 4;
// c = a ** b;
// console.log(c); // Answer is 16 ( a exponent b ) means the value of (a) will get the power on itself according to the value of b (like b == 4) . So , "2" has power "4" and the answer is equal to "16"

// Logical Operators in Detail :
// 1. AND Operator (Will Return 'True' if all conditions are 'True')
// Symbol is : (&&)
// Example:
// a = 89;
// b = 97;
// c = 54;

// console.log(a > c && b > a); // Will Only Return "TRUE" if both conditions are "TRUE"

// 2. OR Operator (Will Return 'False' if all conditions are 'False')
// Symbol is : (||)

// a = 89;
// b = 97;
// c = 54;

// console.log(a < c || b < a || b > c); // Will Only Return "TRUE" if anyone of the condition is "TRUE"

// 3. NOT Operator (Will Convert 'True' Into 'False' & 'False' Into 'True')
// Symbol is : (!)
// Example:
// a = 89;
// b = 97;
// c = 54;

// console.log(a > b); // By default , this condition is true , but NOT Operator has converted true into False

// String Operators :
// Those operators which help us to combine two different strings with each other is called as string operators

// X------ Practice at the end of the day to revise all code of the day -------X

// 1.
// Output of 3**3 = ?
// Answer: 27

// 2.
// What will be the output when we add a number and a string ?
// Amswer: Both values of string and text will concatenate with each other

// 3.
// Write a simple program to swap two numbers (a) & (b)
// a = 6;
// b = 8;
// console.log("(Before Swapping) The value of a is : " + a);
// console.log("(Before Swapping) The value of b is : " + b);

// Now , To swap the values we have to declare a variable named (C) to swap values
// let c = a; // Now , c is equal to 6
// console.log(c);
// a = b; // a has been swapped .
// b = c; // b has been swapped .

// console.log("(After Swapping) The value of a is : " + a);
// console.log("(After Swapping) The value of b is : " + b);
