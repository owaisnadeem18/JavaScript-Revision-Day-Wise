// filter array method is used to print out the values in the new array , which are TRUE otherwise it rejects them

// let arr = [45, 98, 56, 234, 34, "owais ", ":", "@", "Printing"]

// let answer = arr.filter((n) => {
    
//     return isNaN(n)

// })

// This is the short hand way of writing the same above function in JavaScript:

// let answer = arr.filter((n)=> (isNaN(n)))

// console.log(answer)



// Write a function in JavaScript through which we can find the even elements in our array

let arr = []

for (let i = 1; i <= 40; i++){

 arr.push(i)

}

console.log(arr)

console.log(arr.filter((even) => (even % 2 == 0)))

