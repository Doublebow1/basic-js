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
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  const isValidPosition = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols;
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let mineCount = 0;
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (isValidPosition(newRow, newCol) && matrix[newRow][newCol]) {
          mineCount++;
        }
      }
      result[row][col] = mineCount;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
