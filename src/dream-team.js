const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr) {
  if (!arr || arr.length < 1) return false;
  let output = '';
  let names =  [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') names.push(arr[i].trim())
  }
  names.forEach(x => output += x.charAt(0));
  return output.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
