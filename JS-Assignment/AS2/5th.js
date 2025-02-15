// Find the largest number in an array using reduce()
// Question: Find the max value.
// Input: const numbers = [10, 25, 40, 5, 60];

const numbers = [10, 25, 40, 5, 60];
const maxNumber=numbers.reduce((max, num) => (num > max ? num : max), numbers[0])

// or we can also write like this
// function compareNumbers(max, num) {
//     if (num > max) {
//         return num; 
//     } else {
//         return max; 
//     }
// }
// const maxNumber = numbers.reduce(compareNumbers, numbers[0]);


console.log(maxNumber); 

// (max, num) => (num > max ? num : max)