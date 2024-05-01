// some and every method of javaScript 

// Every is a method in JavaScript, which only returns a positive number or true, when all the values are true in our array 

arr = [5 , 10 , 15 , 20 ] // multiples of 05


console.log(arr.every((elem) => (elem % 5 == 0 ))) // it will return TRUE in the only case , when both of the values are TRUE , otherwise it will return FALSE 

// Some Array method in JavaScript 

// This is an array method in which we can see the result as true if even only 01 condition is returning true answer in an array (It works similar like our OR operator in logical operators)

console.log(arr.some((elem) => (elem % 3 == 0))) // it is returning true because it does not want from us , to get all the result values as TRUE

