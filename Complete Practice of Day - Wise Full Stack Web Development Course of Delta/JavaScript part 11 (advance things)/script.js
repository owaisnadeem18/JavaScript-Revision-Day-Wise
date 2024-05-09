// Call Stack in JavaScript means that we are creating a stack of LIFO in our stack data structure

let pehla_func = () => {
  console.log("Hello World pehla function");
};
let dusra_func = () => {
  console.log("3rd I am calling pehla function:");
  pehla_func();
};
let teesra_func = () => {
  console.log("Now I am gonna call dusra function:");
  dusra_func();

  return `All functions have been completely run`;
};

// First I am calling teesra function:
console.log("First I am calling teesra function:");
console.log(teesra_func());

// If we are calling a same function in another function and we are just keep on calling a function into another , then it means this function calling is called as call stack.
