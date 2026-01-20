// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// describe('Midpoint returns the middle node of an even numbered list', () => {
//   test('when the list has 2 elements', () => {
//     const l = new LinkedList();
//     l.insertLast('a');
//     l.insertLast('b');
//     expect(midpoint(l).data).toEqual('a');
//   });

//   test('when the list has 4 elements', () => {
//     const l = new LinkedList();
//     l.insertLast('a');
//     l.insertLast('b');
//     l.insertLast('c');
//     l.insertLast('d');
//     expect(midpoint(l).data).toEqual('b');
//   });
// });

function midpoint(list) {
	let slow = list.head
	let fast = list.head

	//case with two elements only
	if(!fast.next.next) return slow

	while(fast.next != null && fast.next.next != null) {
		if(fast.next === null) break;
		slow = slow.next;
		fast = fast.next.next
		// console.log(slow, fast)
	}

	return slow
}

module.exports = midpoint;
