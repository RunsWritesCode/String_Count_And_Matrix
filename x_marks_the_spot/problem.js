// Recommended node version at least v8.9.4 LTS
// To run `node problem.js` or if you want output of success failure
// Run `node problem.js && echo "PASS" || echo "FAIL"`

// Test examples use `assert` module https://nodejs.org/api/assert.html
const assert = require("assert");

const diagnalDifference = matrix => {
  let diagonalOne = calculateDiagonalLeftToRight(matrix);
  let diagonalTwo = calculateDiagonalRightToLeft(matrix);
  let AbsDifference = diagonalOne - diagonalTwo;
  return Math.abs(AbsDifference);
};

const calculateDiagonalLeftToRight = (matrix) => {
  let index = 0;
  let total = 0;
  for (array of matrix) {
    total += array[index];
    index ++;
  }
  return total;
};

const calculateDiagonalRightToLeft = (matrix) => {
  let index = array.length -1;
  let total = 0;
  for (array of matrix) {
    total += array[index];
    index --;
  }
  return total;
};

const threeByThree = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3]
];

const anotherThreeByThree = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, -3]
];

const fourByFour = [
  [1, 2, 3, 42],
  [1, 2, 3, 42],
  [1, 2, -3, 42],
  [-42, 1, 2, 3]
];

const negativeThreeByThree = [
  [-1, 2, -3],
  [1, -2, 3],
  [-4, 2, -3]
];

const nineByNine = [
  [1, 2, 3, 42, 2, 3, 42, 42, 10],
  [1, 2, 3, 42, 1, 2, 3, 42, 42],
  [1, 2, -3, 42, 1, 2, -3, 42, -1],
  [-42, 1, 2, 3, -42, 1, 2, 3, 1],
  [1, 2, 3, 42, 2, 3, 42, 42, 8],
  [1, 2, 3, 42, 1, 2, 3, 42, 42],
  [1, 2, -3, 42, 1, 2, -3, 42, -1],
  [-42, 1, 2, 3, -42, 1, 2, 3, 1],
  [-42, 1, 2, 3, -42, 1, 2, 3, 1]
];

assert.equal(diagnalDifference(threeByThree), 0);
assert.equal(diagnalDifference(anotherThreeByThree), 6);
assert.equal(diagnalDifference(fourByFour), 2);
assert.equal(diagnalDifference(negativeThreeByThree), 3);
assert.equal(diagnalDifference(nineByNine), 42);
