// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let charMap = new Map();
    let max = 0;
    let char;
    let maxChar = '';

    for (char of str) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1)
        } else {
            charMap.set(char, 1)
        }
    }
    let myMapIter = charMap.keys()

    for (key of myMapIter) {
        if (charMap.get(key) > max) {
            maxChar = key
            max = charMap.get(key)
        }
    }
    return maxChar;
}
module.exports = maxChar;
