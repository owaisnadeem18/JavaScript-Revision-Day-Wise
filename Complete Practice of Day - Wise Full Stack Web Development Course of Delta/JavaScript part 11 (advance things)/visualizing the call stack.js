// visualizing the call stack

// Here, we have to visualize the call stack means we just have to add functions with each other by calling one function into another

let function_one = () => {
  return 1;
};

let function_two = () => {
  return 2 + function_one();
};
let function_three = () => {
  let add = function_one() + function_two();
  return add;
};

console.log(function_three());

// stack frame in programming is the name of all this process
