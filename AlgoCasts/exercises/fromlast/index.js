// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
	//n = 0 = last element
	//reverse indexed, essentially. 
	//n < size()

	let fast = list.head;
	let slow = list.head;

	let counter = 0

	while(fast != null) {
		fast = fast.next;
		counter++;
	}

	let idx = 0;
	while(idx < counter - n - 1){
		slow = slow.next
		idx++
	}

	return slow;

}

module.exports = fromLast;
