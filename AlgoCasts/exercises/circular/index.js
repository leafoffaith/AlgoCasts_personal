// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {

	let head = list.head;
	let fast = list.head;
	let slow = list.head;

	// console.log(head.next)
	if(head.next == head) return true;

	while(fast.next != null && fast.next.next != null){
		console.log(fast, slow, "fast", "slow")
		if(slow == fast.next || slow == fast.next.next) {
			return true
		}
		slow = slow.next;
		fast = fast.next.next;
	}

	return false
}

module.exports = circular;
