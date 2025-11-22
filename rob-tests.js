
console.log("Expecting: []");
console.log("=>", consecutiveSubstrings(''));


console.log("Expecting: ['a']");
console.log("=>", consecutiveSubstrings('a'));


console.log("Expecting: ['a', 'ab', 'b']");
console.log("=>", consecutiveSubstrings('ab'));


console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
console.log("=>", consecutiveSubstrings('abc'));


console.log("Expecting: ['d', 'do', 'dog', 'o', 'og', 'g']");
console.log("=>", consecutiveSubstrings('dog'));
