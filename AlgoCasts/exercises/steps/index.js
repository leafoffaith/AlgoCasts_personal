// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//steps - (steps - 1) = spaces
//steps - (steps - 2) = spaces
//....steps - (steps - steps) = spaces
//print # + spaces ''

// for (let i = 0; i < n; i++) {
//     steps = new Array(n).fill(' ');
//     for (let y = 0; y <= i; y++) {
//         steps[y] = '#'
//     }
//     console.log(steps.join(''))
// }
// }

function steps(n, row = 0, str = '') {
    if (n === row) {
        // console.log("end triggered")
        return
    }

    if (str.length === n) {
        console.log(str)
        steps(n, row + 1)
    } else if (str.length > row) {
        str = str + ' ';
        steps(n, row, str)
    } else if (str.length <= row) {
        str = str + '#'
        steps(n, row, str)
    }
}


module.exports = steps;

// function steps(n, row = 0, str = '') {

//     if (n === row) return;

//     if (str.length === n) {
//         console.log(str)
//         steps(n, row + 1)
//     } else {
//         str = '#' + str
//     }
// }

// steps(4)