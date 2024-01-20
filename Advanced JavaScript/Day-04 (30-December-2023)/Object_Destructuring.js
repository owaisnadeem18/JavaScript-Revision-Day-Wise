// Object Destructuring

let any_Object = {
  myName: "Owais",
  myfriend_1_name: "Hamza",
  myfriend_2_name: "Ali ",
  myfriend_3_name: "Faisal",
};

// Array Destructuing:
let {
  myName,
  second = "hammad",
  myfriend_1_name,
  myfriend_2_name,
  fifth = "45",
  myfriend_3_name,
} = any_Object;

// Now let's see it's output:

console.log(myName);
console.log(second);
console.log(myfriend_1_name);
console.log(myfriend_2_name);
console.log(fifth);
console.log(myfriend_3_name);
