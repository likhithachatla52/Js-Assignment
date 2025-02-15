// 13. Find the Most Frequent Element in an Array
// Question: Write a function that finds the most occurring element in an array.
// Input: console.log(mostFrequent([2, 3, 2, 5, 3, 2, 4]));



function mostFrequent(arr) {
    let ele = {};
    let max = 0;
    let mostFrequentElement;
    
    for (let num of arr) {
        ele[num] = (ele[num] || 0) + 1;
        
        if (ele[num] > max) {
            max = ele[num];
            mostFrequentElement = num;
        }console.log(ele[num])
    }
    
    return mostFrequentElement;
}

console.log(mostFrequent([2, 3, 2, 5, 3, 2, 4]));
