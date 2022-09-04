//* Multiples of 3 or 5 - 6Kyu

//? If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//? Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//? Additionally, if the number is negative, return 0 (for languages that do have them).
//? Note: If the number is a multiple of both 3 and 5, only count it once.

//* Example:

//10 - 3+5+6+9 = 23 - answer is 23

//! Plan - Solution 1

//* First i need to instantiate a variable in which to store the calculated numbers
//* Then i will need to create a for loop to loop through numbers between 1 and our provided number
//* Then i will need to provide a comparision to see if i is a multiple of 3 or 5
//* Then i will need to add the number at i that is a multiple of 3 or 5 to the sum number and return sum when the loop is complete

function multiplesThreeOrFive(number) {
  // instantiate the sum variable with the value of 0 (integer)
  let sum = 0;
  // loop through from 1 to whatever number is provided
  for (let i = 1; i < number; i++) {
    // check to see if the number in the iteration is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      // adds the current number at the index to the sum variable
      sum += i;
    }
  }
  // returns the value of sum
  return sum;
}

// Test Cases

console.log(multiplesThreeOrFive(10));
console.log(multiplesThreeOrFive(30));
console.log(multiplesThreeOrFive(113));
