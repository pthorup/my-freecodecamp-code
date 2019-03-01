/*********************************************************** 
Basic Algorithm Scripting: Mutations
***********************************************************/


/*********************************************************** 
Problem
************************************************************
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


/*********************************************************** 
My Solution
***********************************************************/

function mutation(arr) {
  // get the words separated and lowercased
  let firstWord = arr[0].toLowerCase();
  let secWord = arr[1].toLowerCase();
  
  // Compare using indexOf
  for( let i=0; i<secWord.length; i++) {
    if (firstWord.indexOf(secWord[i]) === -1) {
      return false;
    }
  }

  return true;
}

mutation(["Hello", "hey"]);