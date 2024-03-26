// arrays_are_mutable in JavaScript

// We can change and modify our original array , after doing any changes . For example:

let arr = ["Owais", 893, "8323", "Blue", true];

console.log(typeof arr); // type of arr would be an object in JavaScript

console.log(arr[2]);

// If I perform some changes at any of the index of my array

arr[3] = "Hello";

console.log(arr); // array are mutable , here we have performed modifications in my original array

console.log(arr.length);

arr[7] = "yes";

console.log(arr);
