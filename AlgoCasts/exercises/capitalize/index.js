// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//using regex
// function capitalize(str) {
//     return str.replace(/^([a-z])/, (match, char) => char.toUpperCase())
//         .replace(/\.(\s*)([a-z])/g, (match, spaces, char) => '.' + spaces + char.toUpperCase())
//         .replace(/\s([a-z])/g, (match, char) => ' ' + char.toUpperCase())
// }

function capitalize(str) {
    let deconstr = str.split(' ')
    let tmpstr;
    for (let entry in deconstr) {
        tmpstr = deconstr[entry].split('')
        tmpstr[0] = tmpstr[0].toUpperCase()
        // console.log(tmpstr, "tmpstr")
        deconstr[entry] = tmpstr.join('')
    }
    return deconstr.join(' ')
}

module.exports = capitalize;
