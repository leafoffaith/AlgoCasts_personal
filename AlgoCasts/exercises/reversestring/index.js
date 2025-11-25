// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = []
    //abc = cba, abcd = dcba
    //get length
    let length = str.length;
    // console.log(length)
    // return reversed;
    if (length % 2 !== 0) {
        console.log("this is running for odd")
        y = length - 1
        reversed = str.split("")
        console.log(str, "main str")
        for (let i = 0; i < Math.ceil(length / 2); i++) {
            reversed[y] = str[i];
            reversed[i] = str[y];
            y -= 1;
            console.log(i)
            console.log(reversed)
        }
    } else {
        y = length - 1
        reversed = str.split("")
        for (let i = 0; i < (length / 2); i++) {
            temp = reversed[y]
            reversed[y] = reversed[i]
            reversed[i] = temp
            y -= 1
        }
    }
    return reversed.join("");
}

module.exports = reverse;
