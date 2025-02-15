// 15. Find the Longest Word in a Sentence
// Question: Write a function that finds the longest word in a given sentence.
// Input: console.log(longestWord("The quick brown fox jumps over the lazy dog"));

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog"));