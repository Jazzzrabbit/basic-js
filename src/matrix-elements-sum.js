const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length < 2) return matrix.flat().reduce((p, c) => p + c);
  let cols = [];
  let arr = [];
  let nums = [];
  for (let i = 0; i < matrix[0].length; i++) {
    for (let k = 0; k < matrix.length; k++) {
      cols.push(matrix[k][i]);
    }
  }
  while (cols.length > 0) {
    if (matrix[0].length > 1) arr.push(cols.splice(0, matrix[0].length - 1));
    else arr.push(cols.splice(0, matrix[0].length));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 1) {
      if (arr[i-1] != 0) nums.push(arr[i]);
    }
    else nums.push(arr[i][0]);
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k-1]) {
        if (arr[i][k-1] != 0) nums.push(arr[i][k]);
      }
    }
  }
  return nums.flat().reduce((p, c) => p + c);
}

module.exports = {
  getMatrixElementsSum
};
