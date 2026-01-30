// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let arrayCounter = [];
	let idx = 0
	let baseArray = [];

	arrayCounter.push(0);
	baseArray.push(root);
	baseArray.push('S');


	while(baseArray.length != 0){
		// console.log("iter")
		let curr = baseArray.shift();
		if(curr == 'S') {
			idx++;
			if (baseArray.length > 0) {
		        arrayCounter.push(0);
		        baseArray.push('S');
		    }
		} else {
				if(curr.children.length == 0) {
					arrayCounter[idx] = arrayCounter[idx] + 1;
				} else if(curr.children.length > 0) {
					//need S before the new children are pushed
					baseArray.push(...curr.children)
					arrayCounter[idx] = arrayCounter[idx] + 1;
				}
			}
	}
	console.log(arrayCounter)
	console.log('========================')
	return arrayCounter

}

module.exports = levelWidth;
