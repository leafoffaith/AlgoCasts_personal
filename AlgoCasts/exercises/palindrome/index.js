// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // let c
    // for (c of str) {
    //     let rev_str = str.split('').reduce((rev, char) => rev = char + rev, '')
    //     if (rev_str == str) {
    //         return true
    //     }
    //     else return false
    // }

    str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    });
}

module.exports = palindrome;
