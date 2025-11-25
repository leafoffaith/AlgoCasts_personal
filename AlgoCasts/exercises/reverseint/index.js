// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n === 0) return 0
    if (n.toString().length === 1) return n

    let reversed = n.toString().split('').reduce((rev, num) => rev = num + rev, '')
    console.log(reversed, "reve")
    // return Math.sign(n) === -1 ? parseInt(reversed) * -1 : parseInt(reversed)
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
