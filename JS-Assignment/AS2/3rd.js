// Find even numbers using filter()
// Question: Extract even numbers.
// Input: const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 