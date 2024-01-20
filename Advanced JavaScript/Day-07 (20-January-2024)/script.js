// Here, we have to discuss about the some important concepts of JavaScript

// Lexical Scoping:

// a = 4;
// const outerFunc = () => {
//   console.log("I am the outer function");

//   console.log(d); // 'd' is not defined , this is an erro , which is related to the lexical scoping error

//   b = 45;
//   const innerFunc = () => {
//     c = 6;
//     console.log(a + b + c);
//     d = 78;
//     console.log(d);
//   };
//   innerFunc();
// };

// outerFunc();
// Lexical Scoping is that, our parent element's variable can access and get by the innerFunc() , but our outerFunc() can't access and get the

// Closure in JavaScript:
// Closure is almost same like our lexical scoping but let's have a look at it

// let OuterFunc = (a) => {
//   console.log("Inner Function");
//   b = 5;
//   const innerFunc = () => {
//     console.log(a);
//     console.log(b);
//     c = 10;
//     console.log(c);
//   };
//   return innerFunc;
// };

// console.log(OuterFunc(15)); // Now , the inner function is inside our outer function

// Let's talk a little bit more about syns and async javascript

// Let's suppose that we have only two functions at the moment:

let func_1 = () => {
  setTimeout(() => {
    console.log("Function 1 is called after waiting for 4 sec");
  }, 4000);
  console.log("Function 1");
  console.log("I am declaring and using my function 01");
};

let func_2 = () => {
  console.log("Function 2");
  console.log("-----------------------------------");
  func_1();
  console.log("Function 2 is called again");
};

func_2(); // This is a by default execution of program , which is sync . The meaning of this syns function is that , we have to solve the problems using one by one technique

// func_1();
