// Day 07 
// 02-March-2024 

// Write a javaScript program in which create a new function maxNum() and from this function , find the biggest number which is present in the array
let arr = [45, 98, 32, 5192, 94, 134, 343];
let max_number = arr[0];

let maxNum = (array) => {
    for (let i = 1; i < array.length; i++){
        if (array[i] > max_number) {
            max_number = array[i];
        }
    }
    return max_number;
};

console.log(`The biggest number in the array ${arr} is: ${maxNum(arr)}`);