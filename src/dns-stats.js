const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map(x => x.split('.'));
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].length;
    let temp = '.';
    for (let k = 0; k < index; k++) {
      temp += arr[i][index - 1 - k] + '.';
      results.push(temp);
    }
  }
  results = results.map(x => x.replace(/\.$/g, ''));
  return results.reduce((p, c) => ( {...p, [c]: (p[c] || 0) + 1} ), {});
}

module.exports = {
  getDNSStats
};
