const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  try {
    arr.slice(0);
  } catch {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformed = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' &&
    arr[i] !== '--double-next' && arr[i] !== '--double-prev') transformed.push(arr[i]);
    else if (arr[i] == '--discard-next') i += 2;
    else if (arr[i] == '--discard-prev') transformed.pop();
    else if (arr[i] == '--double-next') transformed.push(arr[i+1]);
    else if (arr[i] == '--double-prev') transformed.push(arr[i-1]);
  }
  
  return transformed.filter(x => x != undefined);
}

module.exports = {
  transform
};
