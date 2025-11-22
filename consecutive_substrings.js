function consecutiveSubstrings(string) {
  // Create an empty array to store all substrings
  const result = [];
  
  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    // For each starting position, create substrings of different lengths
    for (let j = i + 1; j <= string.length; j++) {
      // Extract substring from position i to position j
      const substring = string.slice(i, j);
      // Add it to our result array
      result.push(substring);
    }
  }
  
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;