// Day 35 (30 April 2024)

// Write a JavaScript function thorugh which we can find that either the object is empty or not

let IsObjEmpty = (obj) => {
  if (Object.keys(obj).length == 0) {
    console.log("The Object is empty");
  } else {
    console.log("The Object is not empty");
  }
};

IsObjEmpty({ name: "Owais Nadeem", age: 22 });
IsObjEmpty({});
IsObjEmpty({});
IsObjEmpty({ name: "Faiq Khan" });
IsObjEmpty({ name: "Hammad Ahmed", age: 27 });
