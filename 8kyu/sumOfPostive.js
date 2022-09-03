//* Sum Of Positive - 8Kyu

//? You get an array of numbers, return the sum of all of the positives ones.

//* Example:

// [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//! Plan - Solution 1

//* I need to create a function that checks to see if the number is > than 0 and if it is then the numbers in the array add together
//* if the number at the index of the array is 0 or a negative number i need to treat that as 0
//* I need to return the array added up as an integer in full (eg. 15)
//* I will need a for loop to iterate through the array, an if else statement for checking and a variable to store the calculated data

//! Solution 1

function positiveSum(arr) {
  // instatiate the num variable with the value 0
  let num = 0;
  // loop through the array of numbers
  for (i = 0; i < arr.length; i++) {
    // check if the current value in the array is > than 0
    if (arr[i] > 0) {
      //add the value in the array to the num variable
      num = num + arr[i];
    } else {
      // add 0 to the num variable if the value in the array is 0 or lower
      num = num + 0;
    }
  }
  // return the calculated num variable
  return num;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

//! Plan - Solution 2

//* If i wanted to make this code smaller i could use a the reduce method.
//* The reduce array method in javascript can be used to accumulate the data in an array (add it all together)
//* Also to save on lines of code again i could use the ternery operator instead of the if statement

//! Solution 2

const positiveSumTwo = (arr) =>
  // instatiate sum as a varible to store calculation
  // n is used as the current value in the array
  // so for each value in the array i check if it is greater than 0
  // then if it is i add the value to sum
  // if not i just return the sum value and move to the next iteration of the array
  arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);

console.log(positiveSumTwo([1, 2, 3, 4, 5]), 15);
console.log(positiveSumTwo([1, -2, 3, 4, 5]), 13);
console.log(positiveSumTwo([]), 0);
console.log(positiveSumTwo([-1, -2, -3, -4, -5]), 0);
console.log(positiveSumTwo([-1, 2, 3, 4, -5]), 9);
