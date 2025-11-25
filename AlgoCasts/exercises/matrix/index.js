// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // Initialize n x n matrix filled with zeros
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push(new Array(n).fill(0));
    }

    let counter = 1;
    let row = 0;
    let col = 0;
    let direction = 0; // 0: right, 1: down, 2: left, 3: up

    for (let i = 0; i < n * n; i++) {
        results[row][col] = counter;
        counter++;

        if (direction === 0) {
            // Moving right
            if (col + 1 === n || results[row][col + 1] !== 0) {
                row++;
                direction = 1;
            } else {
                col++;
            }
        } else if (direction === 1) {
            // Moving down
            if (row + 1 === n || results[row + 1][col] !== 0) {
                col--;
                direction = 2;
            } else {
                row++;
            }
        } else if (direction === 2) {
            // Moving left
            if (col - 1 < 0 || results[row][col - 1] !== 0) {
                row--;
                direction = 3;
            } else {
                col--;
            }
        } else if (direction === 3) {
            // Moving up
            if (row - 1 < 0 || results[row - 1][col] !== 0) {
                col++;
                direction = 0;
            } else {
                row--;
            }
        }
    }

    return results;
}

module.exports = matrix;