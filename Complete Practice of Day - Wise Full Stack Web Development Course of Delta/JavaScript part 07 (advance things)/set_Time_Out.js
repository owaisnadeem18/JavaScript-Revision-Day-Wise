// Here we are discussing about callback functions in JavaScript

// A callback function is a function which always call another function inside it

// 1
// SetTimeOut():
// This is a call back function which is considered as a a kind of function which passes another function as it's own parameter

// setTimeout(function , TimeOut ) // Time out means after how much time any code of line will get executed

a = 56;
b = 36;
c = 26;

console.log(a);

setTimeout(() => {
  console.log(b);
}, 2000);

console.log(c); // it will print it before code at line # 18 (because it will print after 2 sec because of time out)
