/*  
	Basic Algorithm Scripting: Find the Longest Word in a String
*/

/* 
	Return the length of the longest word in the provided sentence.

	Your response should be a number.
*/

// My Solution
function findLongestWordLength(str) {
  // Convert to array
  let arr = str.split(' ');

  let longStr = arr.reduce( (prev, next) => {
    // Compare one string to the next finding the longest string
    return prev.length > next.length ? prev : next;
  });
  
  return longStr.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");