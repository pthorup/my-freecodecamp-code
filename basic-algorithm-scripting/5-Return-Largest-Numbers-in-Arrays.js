/*********************************************************** 
Basic Algorithm Scripting: Return Largest Numbers in Arrays
***********************************************************/

/*********************************************************** 
Problem
************************************************************
 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


/*********************************************************** 
My Solution
***********************************************************/

function largestOfFour(arr) {
  // Iterate through array
  let maxValue;
  let maxArr = [];
  for( let i=0; i<arr.length; i++ ){
    // Use spread operator to unpack array to sring of numbers and use to find max value using Math.max()
    maxValue = Math.max(...arr[i]);
    maxArr.push(maxValue);
  }
  return maxArr; 
} 
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 