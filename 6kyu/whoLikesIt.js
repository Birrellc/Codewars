//* Who Likes This - 6 Kyu

//? You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
//? We want to create the text that should be displayed next to such an item.
//? Implement the function which takes an array containing the names of people that like an item.

//* Example:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//! Plan - Solution 1

//* First i need to check if the array is empty.
//* Secondly i need a for loop to iterate through the array of names
//* Thirdly i need a series of conditionals depending on the length of the names array
//* Fourth step is a series of return statements inside the if statements returning the correct responses
//* Fifth step is to return the final outcome being more than 3 names returning the first 2 names in the array then the number of people remaining in the array.

function likes(names) {
  // conditional to check if values in the array
  if (names.length === 0) {
    return 'no one likes this';
  }

  // For loop iterating through the items in the array
  for (i = 0; i < names.length; i++) {
    // conditional to check if only 1 name in the array
    if (names.length < 2) {
      // return statement returning the name of the person and 'likes this' string
      return `${names[0]} likes this`;
      // conditional to check if only 2 names in the array
    } else if (names.length < 3 && names.length > 1) {
      // return statement returning the name of both persons and 'like this' string
      return `${names[0]} and ${names[1]} like this`;
      // conditional to check if only 3 names in the array
    } else if (names.length < 4 && names.length > 2) {
      // return statement returning the name the three people in the array and 'like this' string
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      // else if there is more than 3 people in the array
    } else {
      // we return the first 2 people in the array followed by the number of people remaining and the string 'others like this'
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
    }
  }
}
