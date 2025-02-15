// 14. Reverse the Words in a Sentence
// Question: Write a function that reverses the words in a sentence.
// Input: console.log(reverseWords("hello world"));


function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
    
}

console.log(reverseWords("hello world")); 