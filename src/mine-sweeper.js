const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let arr = JSON.parse(JSON.stringify(matrix));

  function findMines(x, y, matrix) {
    let width = matrix[0].length - 1;
    let height = matrix.length - 1;
    let work = JSON.parse(JSON.stringify(matrix));
    
    if (x == 0) {
      if (y == 0) return work[x].slice(y, y+2).concat(work[x+1].slice(y, y+2)).filter(i => i === true).length;
      if (y == width) return work[x].slice(y-1, y+2).concat(work[x+1].slice(y-1, y+2)).filter(i => i === true).length;
      else return work[x].slice(y-1, y+2).concat(work[x+1].slice(y-1, y+2)).filter(i => i === true).length;
    }
    if (x == height) {
      if (y == 0) return work[x].slice(y, y+2).concat(work[x-1].slice(y, y+2)).filter(i => i === true).length;
      if (y == width) return work[x].slice(y-1, y+2).concat(work[x-1].slice(y-1, y+2)).filter(i => i === true).length;
      else return work[x].slice(y-1, y+2).concat(work[x-1].slice(y-1, y+2)).filter(i => i === true).length;
    }
    if (x > 0 && x < height) {
      if (y == 0) return work[x].slice(y, y+2).concat(work[x+1].slice(y, y+2)).concat(work[x-1].slice(y, y+2)).filter(i => i === true).length;
      if (y == width) return work[x].slice(y-1, y+2).concat(work[x-1].slice(y-1, y+2)).concat(work[x+1].slice(y-1, y+2)).filter(i => i === true).length;
      else return work[x].slice(y-2, y+2).concat(work[x-1].slice(y-2, y+2)).concat(work[x+1].slice(y-2, y+2)).filter(i => i === true).length;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (matrix[i][k] === true) arr[i][k] = 1;
      else arr[i][k] = findMines(i, k, matrix);
    } 
  }
  
  return arr;
}

module.exports = {
  minesweeper
};
