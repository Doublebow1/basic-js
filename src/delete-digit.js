const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strArr = n.toString().split('').map(elem => +elem);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] < strArr[i + 1]) {
      strArr.splice(i, 1);
      break;
    }
    if (strArr[i] < strArr[i - 1]) {
      strArr.splice(i, 1);
    }
  }
  return +strArr.join('');
}

module.exports = {
  deleteDigit
};
