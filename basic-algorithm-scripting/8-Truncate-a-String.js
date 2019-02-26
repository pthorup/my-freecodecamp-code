/*  
	Basic Algorithm Scripting: Truncate a String
*/

/* 
	Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

// My Solution
function truncateString(str, num) {
  // Check first if string is long enough, then slice and dice it or maybe not
  return (str.length > num) ? str.slice(0,num)+'...': str ;
}

truncateString("A green and yellow basket", 33);   