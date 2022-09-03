//* Even or Odd - 8Kyu

//? Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//! Plan - Solution 1

//* So as i am checking for 2 comparision evaluations the easiest option is to do a simple if statement
//* in which i will check to see if the remainder of the 'integer(number)' modulo 2 equals 0
//* if it does equal 0 then that means there is no remainder and the number is even
//* following this all i need is to add an else statement returning Odd for all other outcomes

//! Solution 1

function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else
        return 'Odd'
}

//! Plan - Solution 2

//* Currently im using 5 lines of code for a very simple function which i need to make shorter
//* If i switch to an arrow function this will allow me to create a 1 line solution if i combine with
//* a conditional (ternary) operator (? 'true' : 'false')

//! Solution 2

const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd';