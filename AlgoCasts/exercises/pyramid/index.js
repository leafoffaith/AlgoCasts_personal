// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, arr = []) {

    let col_length = (2 * n) - 1

    const midpoint = Math.round(col_length / 2) - 1
    // console.log(midpoint)
    if (n === row) return;
    // console.log(row, "row")
    if (arr.length === col_length) {
        console.log(arr.join(''));
        pyramid(n, row + 1, []);
    } else if (arr.length >= (midpoint - row) && arr.length <= (midpoint + row)) {
        // console.log(arr.length, midpoint - row, midpoint + row)
        arr.push("#");
        pyramid(n, row, arr)
    } else {
        arr.push(" ");
        pyramid(n, row, arr)
    }
}


module.exports = pyramid;

// for (let i = 0; i < n; i++) {
//     row = new Array(col_length);
//     for (let j = 0; j < col_length; j++) {
//         if (j >= midpoint - i && j <= midpoint + i) {
//             row[j] = '#'
//         } else {
//             row[j] = ' '
//         }
//     }
//     console.log(row.join(''))
// }