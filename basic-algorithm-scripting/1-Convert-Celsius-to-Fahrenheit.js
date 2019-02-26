/*  
	Basic Algorithm Scripting: Convert Celsius to Fahrenheit 
*/

/* 
	The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
*/

// My Solution

function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(30);