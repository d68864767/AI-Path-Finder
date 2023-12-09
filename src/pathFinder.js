const findShortestPath = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Down, Up, Right, Left
  const queue = [];
  let found = false;

  // Find the destination cell and enqueue it
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === -1) {
        queue.push([i, j, 0]); // [row, col, distance]
        found = true;
        break;
      }
    }
    if (found) break;
  }

  // Perform BFS to find the shortest path
  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();

    // Explore all possible directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the new position is within bounds and is a free path
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 0) {
        grid[newRow][newCol] = 2; // Mark as part of the path
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }

  // Check if the path reaches the destination
  if (!found) {
    return grid; // No path found, return original grid
  }

  // Backtrack from the destination to mark the shortest path
  let [destRow, destCol] = queue[queue.length - 1];
  while (grid[destRow][destCol] === 2) {
    let pathFound = false;
    for (const [dr, dc] of directions) {
      const newRow = destRow + dr;
      const newCol = destCol + dc;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 2) {
        destRow = newRow;
        destCol = newCol;
        pathFound = true;
        break;
      }
    }
    if (!pathFound) {
      break;
    }
  }

  // Reset the grid except for the shortest path and destination
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2 && !(i === destRow && j === destCol)) {
        grid[i][j] = 0;
      }
    }
  }

  return grid;
};

module.exports = {
  findShortestPath
};
