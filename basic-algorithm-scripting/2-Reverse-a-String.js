/*  
	Basic Algorithm Scripting: Reverse a String
*/

/* 
	Reverse the provided string.

	You may need to turn the string into an array before you can reverse it.

	Your result must be a string.
*/

// My Solution
function reverseString(str) {
    // Split the string into an array, reverse the array order, then join to string again.
    return str.split('').reverse().join('');
    
}

reverseString("hello");  