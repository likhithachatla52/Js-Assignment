// 12. Find the Factorial of a Number Using a Loop
// Question: Write a function that calculates the factorial of a number using a loop.
// Input: console.log(factorial(5));

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result*i;
         console.log(i);
    }
    console.log("Final result is")
    return result;
    
}

console.log(factorial(5)); 