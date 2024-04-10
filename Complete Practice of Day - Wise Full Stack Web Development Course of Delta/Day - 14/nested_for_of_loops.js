// nested_for_of_loops

let fruits = [
  ["fruits1", "fruits2", "fruits3"],
  ["fruits4", "fruits5", "fruits6"],
  ["fruits7", "fruits8", "fruits9"],
];

for (let fruit of fruits) {
  console.log(fruit);

  for (let single of fruit) {
    console.log(single);
  }
}
