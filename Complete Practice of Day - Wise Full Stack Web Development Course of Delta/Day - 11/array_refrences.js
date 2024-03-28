// Array Refrences:

// [] != []
// [2 , 2] != [2 , 2]
// [45 , 53 , 23] != [45 , 53 , 23]

// for example:

console.log([] == []); // this is the concept of arr refrences that the array keeps a diifernt value inside the memory, that's why the value is false as result

arr = [4, 2, 1, 9, 5];

arrCopy = arr;

console.log(arrCopy);
console.log(arr);

console.log(arr == arrCopy); // it is returning as true , because both the value are equal to each other
