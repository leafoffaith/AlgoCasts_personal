// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //initial approach is to clean the strings by removing non-alphanumeric characters and converting to lowercase
    const cleanString = (str) => {
        return str.replace(/[^\w]/g, '').replace(/\s+/g).toLowerCase().split('').sort().join('');
    }

    cleanStringA = cleanString(stringA)
    cleanStringB = cleanString(stringB)
    console.log(cleanStringA)
    console.log(cleanStringB)

    //sort() solution
    if (cleanStringA === cleanStringB) {
        return true
    } else return false


    //create a character map for both strings
    let mapA = new Map()
    let mapB = new Map()

    for (const char of cleanStringA) {
        if (mapA.has(char)) {
            mapA.set(char, mapA.get(char) + 1)
        } else {
            mapA.set(char, 1)
        }
    }

    for (const char of cleanStringB) {
        if (mapB.has(char)) {
            mapB.set(char, mapB.get(char) + 1)
        } else {
            mapB.set(char, 1)
        }
    }

    //print out the maps to verify
    console.log(mapA)
    console.log(mapB)

    //if sizes don't match return false
    if (mapA.size !== mapB.size) return false

    for (const k of mapA) {
        if (mapA.get(k[0]) !== mapB.get(k[0])) {
            return false
        }
    }
    return true
}
module.exports = anagrams;
