/*********************************************************** 
Basic Algorithm Scripting: Chunky Monkey
***********************************************************/


/*********************************************************** 
Problem
***********************************************************
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

/*********************************************************** 
My Solution
***********************************************************/

function chunkArrayInGroups(arr, size) {
  let newArr = [];

  // As splice alters original array (this case arr) then we can just add and delete to new array
  while(arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
    return newArr;
}
 
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); 