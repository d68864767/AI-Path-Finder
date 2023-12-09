# AI Path Finder

AI Path Finder is a Node.js application that implements an AI algorithm to find the shortest path in a 2D grid representing a city. The grid consists of free paths, buildings, and a destination. The algorithm avoids buildings and finds the shortest path to the destination without moving diagonally.

## Problem Description

Given a 2D grid with '0' representing a free path, '1' representing a building, and '-1' representing the destination, the task is to find the shortest path from any free path to the destination, avoiding buildings. The movement is restricted to up, down, left, or right.

## Installation

To run this project, you need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [Node.js official website](https://nodejs.org/).

Once Node.js is installed, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

## Usage

To execute the pathfinding algorithm, run the following command in the terminal:

```bash
node src/index.js
```

## Function `findShortestPath`

The core functionality is provided by the `findShortestPath` function located in `src/pathFinder.js`. This function takes a 2D array as input and returns a 2D array with the shortest path marked as '2'.

## Input Format

The input is a 2D array of integers where each integer is either -1, 0, or 1.

## Output Format

The output is a 2D array of integers where the shortest path is marked as '2'.

## Example

Input:

```
[
 [0, 0, 0, -1],
 [1, 1, 0, 1],
 [0, 0, 0, 0]
]
```

Output:

```
[
 [2, 2, 2, -1],
 [1, 1, 2, 1],
 [0, 0, 2, 2]
]
```

## Testing

The `test` directory contains tests for the pathfinding algorithm. To run the tests, execute the following command:

```bash
npm test
```

## Contributing

Contributions to this project are welcome. Please ensure that any pull requests or issues are consistent with the existing codebase and follow the project's guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

This project was inspired by common pathfinding problems in AI and is designed to demonstrate the implementation of efficient algorithms in a Node.js environment.
