//* Reversed Strings - 8Kyu

//? Complete the solution so that it reverses the string passed into it.

//* Example:

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//! Plan - Solution 1

//* First i need to instantiate a variable containing an empty string to store the reversed values
//* Then i will need to loop through the array backwards taking each value at a time and adding it to the reverseStr variable
//* then i need to return the reversedStr variable
//* remember -1 on reversed for loop to exclude undefined at 0

//! Solution 1 - Without Methods

function reversedStr(str) {
  // variable containing empty string - awaiting values to be added
  let reversedStr = '';
  // loop through the array(string) backwards
  for (let i = str.length - 1; i >= 0; i--) {
    // add each value to the reversedStr variable
    reversedStr += str[i];
  }
  // return the reversed string
  return reversedStr;
}

// Test cases

console.log(reversedStr('world'), 'dlrow');
console.log(reversedStr('hello'), 'olleh');
console.log(reversedStr(''), '');
console.log(reversedStr('h'), 'h');

//! Plan - Solution 2

//* I want to split the string into an array of individual letters(values/indexs) using .split('')
//* then i want to use the .reverse() method on the array to reverse it
//* then i want to use .join('') on the array to create the string again.

//! Solution 2 - With Methods

const reversedStrMethods = (str) => str.split('').reverse().join('');

// Test cases

console.log(reversedStrMethods('world'), 'dlrow');
console.log(reversedStrMethods('hello'), 'olleh');
console.log(reversedStrMethods(''), '');
console.log(reversedStrMethods('h'), 'h');

//! Plan - Solution 3

//* recursion based using string methods substr(extracts characters between 2 positons so substr(1) would be from index 1 to the end)
//* Also using charAt which returns us the letter at whatever index we target so for hello charAt(0) returns h
//* I will need a conditional to check to see if the string is empty or completed - using ternery
//* so until the string is empty we recursively call the function

//! Solution 3 - Recursion

const reverseStrRecursion = (str) =>
  str === '' ? '' : reverseStrRecursion(str.substr(1)) + str.charAt(0);

/*
  First Part of the recursion method
  Remember that you won’t have just one call, you’ll have several nested calls

  Each call: str === "?"        	                   reverseStrRecursion(str.subst(1))     + str.charAt(0)
  1st call – reverseStrRecursion("Hello")   will return   reverseStrRecursion("ello")           + "h"
  2nd call – reverseStrRecursion("ello")    will return   reverseStrRecursion("llo")            + "e"
  3rd call – reverseStrRecursion("llo")     will return   reverseStrRecursion("lo")             + "l"
  4th call – reverseStrRecursion("lo")      will return   reverseStrRecursion("o")              + "l"
  5th call – reverseStrRecursion("o")       will return   reverseStrRecursion("")               + "o"

  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately

  5th call will return reverseStrRecursion("") + "o" = "o"
  4th call will return reverseStrRecursion("o") + "l" = "o" + "l"
  3rd call will return reverseStrRecursion("lo") + "l" = "o" + "l" + "l"
  2nd call will return rreverseStrRecursion("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return rreverseStrRecursion("ello") + "h" = "o" + "l" + "l" + "e" + "h"
  */

// Test cases

console.log(reverseStrRecursion('world'), 'dlrow');
console.log(reverseStrRecursion('hello'), 'olleh');
console.log(reverseStrRecursion(''), '');
console.log(reverseStrRecursion('h'), 'h');
