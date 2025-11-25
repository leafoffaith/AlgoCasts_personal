// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //create array to push to 
    let chunked = []
    //slice and access parts of the array
    //if length is < size, then return array within array
    if (array.length < size) chunked = [array]
    for (let i = 0; i < array.length; i += size) {
        // console.log(i, "i")
        // console.log(chunked, "chunked")
        /**@IMPORTANT */
        // If end >= array.length or  is omitted or undefined,
        // array.length is used, causing all elements until the end to be extracted.
        /**@IMPORTANT */
        chunked.push(array.slice(i, i + size))
    }
    console.log(chunked, "chunked")
    return chunked
}

module.exports = chunk;
