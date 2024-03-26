// Splice method of array

// let arr = ["Owais", "Hamza", 45, 98.64, true, "hello"];

// let spliced = arr.splice(3);
// console.log(spliced);

// console.log(arr); // It modifies the original array

let arr = ["Owais", "Hamza", 45, 98.64, true, "hello"];

console.log(arr.splice(2, 3, "Yaqoob ", "Nadeem"));

console.log(arr);

// syntax of splice

// (start index , how many numbers to delete , "new elements to add"  )
