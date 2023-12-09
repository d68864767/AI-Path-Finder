// Utility functions for the AI Path Finder project

/**
 * Validates the input grid to ensure it meets the problem constraints.
 * @param {number[][]} grid - The 2D grid representing the city.
 * @returns {boolean} - True if the grid is valid, false otherwise.
 */
function validateGrid(grid) {
  if (!Array.isArray(grid) || grid.length === 0 || grid[0].length === 0) {
    return false;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  if (rows > 1000 || cols > 1000) {
    return false;
  }

  let destinationCount = 0;
  let freePathCount = 0;

  for (let i = 0; i < rows; i++) {
    if (!Array.isArray(grid[i]) || grid[i].length !== cols) {
      return false;
    }

    for (let j = 0; j < cols; j++) {
      const cell = grid[i][j];
      if (cell !== 0 && cell !== 1 && cell !== -1) {
        return false;
      }
      if (cell === -1) {
        destinationCount++;
      }
      if (cell === 0) {
        freePathCount++;
      }
    }
  }

  return destinationCount === 1 && freePathCount > 0;
}

/**
 * Finds the coordinates of the destination cell in the grid.
 * @param {number[][]} grid - The 2D grid representing the city.
 * @returns {number[]} - The [row, col] coordinates of the destination cell.
 */
function findDestination(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === -1) {
        return [row, col];
      }
    }
  }
  return null; // This should never happen if the grid is valid
}

module.exports = {
  validateGrid,
  findDestination
};
