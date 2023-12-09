const { findShortestPath } = require('../src/pathFinder');
const { validateGrid } = require('../src/utils');
const assert = require('assert').strict;

describe('AI Path Finder Tests', () => {
  it('should find the shortest path to the destination', () => {
    const grid = [
      [0, 0, 0, -1],
      [1, 1, 0, 1],
      [0, 0, 0, 0]
    ];
    const expected = [
      [2, 2, 2, -1],
      [1, 1, 2, 1],
      [0, 0, 2, 2]
    ];
    const result = findShortestPath(grid);
    assert.deepStrictEqual(result, expected);
  });

  it('should return the original grid if no path exists', () => {
    const grid = [
      [0, 1, 0, -1],
      [1, 1, 1, 1],
      [0, 0, 0, 0]
    ];
    const result = findShortestPath(grid);
    assert.deepStrictEqual(result, grid);
  });

  it('should validate the grid correctly', () => {
    const validGrid = [
      [0, 0, 0, -1],
      [1, 1, 0, 1],
      [0, 0, 0, 0]
    ];
    const invalidGrid = [
      [0, 0, 0, -1],
      [1, 1, 'X', 1],
      [0, 0, 0, 0]
    ];
    assert.strictEqual(validateGrid(validGrid), true);
    assert.strictEqual(validateGrid(invalidGrid), false);
  });

  it('should handle large grids efficiently', () => {
    const largeGrid = Array(1000).fill(Array(1000).fill(0));
    largeGrid[999][999] = -1; // Set destination at the far end
    const result = findShortestPath(largeGrid);
    assert.strictEqual(result[0][0], 2); // Check if the path starts at the top-left corner
    assert.strictEqual(result[999][999], -1); // Check if the destination remains unchanged
  });
});

