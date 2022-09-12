//* Check the exam 7kyu

//? The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//? The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer,
//? represented as an empty string (in C the space character is used).
//? If the score < 0, return 0.

//* For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

//! Step 1 - Plan solution

// A place to store the score initialize at 0
// iterate up to the length of the first array as the strings are the same length
//- check if array2 is not an empty string '' no need to do anything since return score at end anyways
//-- check if the value in array 1 is equal to array 2
//--- if it is increase score by 4
//--- if not decrease score by 1
//- return score

const checkExam = (array1, array2) => {
  // instantiate score as 0
  score = 0;
  // loop through arrays
  for (let i = 0; i < array1.length; i++) {
    // check to see if answer is empty if so do nothing as score is 0 for this
    if (array2[i] !== '') {
      if (array1[i] === array2[i]) {
        // if answers match +4 to score
        score += 4;
      } else {
        // if answers dont match -1 to score
        score -= 1;
      }
    }
  }
  // check if score is < 0 if so return 0 as we can't have negative marks
  if (score < 0) {
    return 0;
  }
  // return the score
  return score;
};

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7);
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);
