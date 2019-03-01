/*********************************************************** 
Basic Algorithm Scripting: Slice and Splice
***********************************************************/


/***********************************************************
Problem
************************************************************

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
***********************************************************/


/*********************************************************** 
My Solution
***********************************************************/

function frankenSplice(arr1, arr2, n) {
  // So as to not have arr2 mutated and pass the test, otherwise not necessary
  let arr2Copy = arr2.slice(0);
  // Countdown so as to add at same position
  for(let i=arr1.length-1; i>=0; i--) {
    arr2Copy.splice(n,0,arr1[i]);
  }
  return arr2Copy; 
}  

frankenSplice([1, 2, 3], [4, 5], 1);   