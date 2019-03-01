/*********************************************************** 
Basic Algorithm Scripting: Title Case a Sentence
***********************************************************/


/*********************************************************** 
Problem
************************************************************

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
***********************************************************/


/*********************************************************** 
My Solution
***********************************************************/

function titleCase(str) {
  // Change all to lowercase to even out all letters split to array for better handling
  let arr = str.toLowerCase().split(' ');

  for( let i=0; i<arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
  }
  let newStr = arr.join(' ');
  return newStr;
}

titleCase("I'm a little tea pot");

/*********************************************************** 
Or, using map....
***********************************************************/

function titleCase2(str) {
  // Change all to lowercase to even out all letters split to array for better handling
  let arr = str.toLowerCase().split(' ');

  arr = arr.map( (index) => {
    return index[0].toUpperCase() + index.slice(1);
  });
  
  let newStr = arr.join(' ');
  return newStr;
}

titleCase2("I'm a little tea pot");