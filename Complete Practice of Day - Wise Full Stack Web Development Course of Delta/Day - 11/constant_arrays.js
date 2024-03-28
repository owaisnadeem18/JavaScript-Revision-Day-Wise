// Here we have to talk about constant arrays

arr = [45, 98, 23];

console.log(arr.push(452));

arr[2] = 53;

console.log(arr);

arr = ["45", 89, "OWais"];

console.log(arr);

// Note: If we are not making this above arr as constant , then we can do reassigning task of this 'arr' array . Otherwise, it won't be possible for us . Because after adding the key word of const. We can say that this "arr"'s value of arrays is fixed and same. Means we can perform operations on our array indexes , but not on the entire arr value
