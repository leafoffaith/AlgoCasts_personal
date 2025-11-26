// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
function memoize(fn) {
    const cache = {};
    return function (...args) {
        //key is created
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        //                      ^^^^  ^^^^
        //                       |     |
        //                       |     +-- Pass collected arguments
        //                       +-------- Preserve original 'this'
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    //0 -> 1 -> 1(0+1) -> 2(1+1)
    //intial approach recursive solution
    //Course asked to produce iterative solution, 
    // current complexity is O(n)?
    // let curr, prev = 0
    // curr = 1
    // for (let i = 0; i <= n - 2; i++) {
    //     // console.log(curr + prev)
    //     let temp = curr;
    //     curr = curr + prev
    //     prev = temp
    // }
    // return curr;
    // let newArr = []
    // newArr = [curr[1], curr[1] + curr[0]];
    // if (counter >= n) {
    //     console.log(curr)
    //     return newArr[1];
    // } else {
    //     counter = counter + 1;
    //     return fib(n, newArr, counter)
    // }
    if (n < 2) {
        return n
    }

    //this fib call references the memoized version
    return fib(n - 1) + fib(n - 2)
}
const fib = memoize(slowFib)

module.exports = fib;
