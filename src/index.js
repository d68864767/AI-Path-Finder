const pathFinder = require('./pathFinder');

// Sample grid provided in the problem description
const sampleGrid = [
  [0, 0, 0, -1],
  [1, 1, 0, 1],
  [0, 0, 0, 0]
];

// Function to print the grid in a readable format
function printGrid(grid) {
  grid.forEach(row => console.log(row.join(' ')));
}

// Main function to execute the path finding
function main() {
  console.log('Original Grid:');
  printGrid(sampleGrid);

  const pathGrid = pathFinder.findShortestPath(sampleGrid);

  console.log('\nGrid with Shortest Path:');
  printGrid(pathGrid);
}

// Execute the main function
main();

module.exports = {
  printGrid,
  main
};
