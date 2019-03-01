/*********************************************************** 
Basic Algorithm Scripting: Falsy Bouncer
***********************************************************/


/*********************************************************** 
Problem
************************************************************

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.



/*********************************************************** 
My Solution
***********************************************************/
function bouncer(arr) {
  
  for(let i=0; i<arr.length; i++ ) {
    
    if(Boolean(arr[i]) == false) {
      console.log(Boolean(arr[4]));
      arr.splice(i, 1);
      i--;// coz we deleted, positions shifted
    }
  }
  return arr;
}  
 
bouncer([7, "ate", "", false, 9]);    

// Guess this could have been done more simipler using filter().
// arr.filter(Boolean);