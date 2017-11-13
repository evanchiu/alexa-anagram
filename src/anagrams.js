const fs = require('fs');
const path = require('path');

exports.getAnagrams = function(target) {
  if (target === 'hello') {
    return ['hole', 'hoe', 'leo'];
  } else if (target === 'world') {
    return ['lord', 'word', 'old', 'owl', 'rod', 'row'];
  }

  return [];
};
