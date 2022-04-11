const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  }
  catch {
    throw new Error('Invalid date!');
  }   
   
  let seasons = {
    'spring': 'maraprmay',
    'summer': 'junjulaug',
    'autumn': 'sepoctnov',
    'winter': 'decjanfeb'
  }
  
  for (let season in seasons) {
    if (seasons[season].includes(date.toString().split(' ')[1].toLowerCase())) return season;
  }
}

module.exports = {
  getSeason
};
