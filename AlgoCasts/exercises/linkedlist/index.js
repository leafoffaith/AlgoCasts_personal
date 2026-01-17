// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(head = null){
		this.head = head;
	}

	//method insertFirst
	insertFirst(data) {
		if(!this.head) this.head = new Node(data)
		else {
			let newNode = new Node(data);
			let prev = this.head;
			this.head = newNode;
			this.head.next = prev;
		}
	}

	size() {
		//return size by iterating?
		if(!this.head) return 0
		let size = 0;
		let curr = this.head;
		if(!curr.next) return 1;
		while (curr != null) {
			size += 1;
			curr = curr.next;
		}
		return size;
	}


}

module.exports = { Node, LinkedList };
