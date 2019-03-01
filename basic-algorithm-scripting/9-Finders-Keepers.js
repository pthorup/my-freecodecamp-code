/*********************************************************** 
Basic Algorithm Scripting: Finders Keepers
***********************************************************/ 
	

/*********************************************************** 
Problem
************************************************************

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.


/*********************************************************** 
My Solution
***********************************************************/

function findElement(arr, func) {
  for(let i= 0; i<arr.length; i++){
    if(func(arr[i]) === true){ 
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
// Should return 8