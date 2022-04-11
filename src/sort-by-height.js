const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) newArr.push(-1);
    else newArr.push('x');
  }
  let sorted = arr.sort((a, b) => a - b).filter(x => x != -1);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== -1) newArr[i] = sorted.shift();
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
