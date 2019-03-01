/*********************************************************** 
Basic Algorithm Scripting: Boo who
***********************************************************/


/*********************************************************** 
Problem
************************************************************

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.


/*********************************************************** 
My Solution
***********************************************************/

function booWho(bool) {
  return (bool === true || bool === false) ? true : false;
}

booWho(null);

// In retrospect, I should have used 'typeof'. Much simplier.