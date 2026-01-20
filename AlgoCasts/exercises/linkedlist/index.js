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
			// let newNode = new Node(data);
			// let prev = this.head;
			// this.head = newNode;
			// this.head.next = prev;

			this.head = new Node(data, this.head);
		}
	}

	size() {
		//return size by iterating?
		//no head pointless
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

	getFirst() {
		if(!this.head) return null
		return this.head;
	}

	getLast() {
		let curr = this.head
		if(this.size() == 0) return null;
		if(!curr.next) return curr
		while(curr.next != null) {
			curr = curr.next;
			// console.log(curr, "current last")
		}
		return curr;
	}

	clear() {
		//doesn't this cause a memory leak? where does the data go?
		this.head = null
	}

	removeFirst() {
		if(this.size() == 0) return
		this.head = this.head.next ? this.head.next : null
	}

	removeLast() {
		if(this.size() == 1) this.head = null
		if(this.size() == 0 ) return
		curr = this.head
		while(curr.next.next != null) {
			curr = curr.next
		}
		curr.next = null
	}

	insertLast(data) {
		last = this.getLast();
		if(!last) {
			this.head = new Node(data)
			return
		}
		let insertData = new Node(data)
		last.next = insertData;
	}

	getAt(num) {
		if(num == 0 ) {
			let val = this.getFirst()
			// console.log(val);
			return val;
		}

		//size 2, max num is 1
		if(num > this.size()) return null;

		idx = 0;
		curr = this.head
		while(idx < num){
			curr = curr.next;
			idx += 1;
		}
		return curr
	}

	removeAt(num) {
		if(num == 0 ) {
			if(!this.getFirst()) return
			else this.head = this.head.next
		}

		//size 2, max num is 1
		if(num > this.size()) return null;

		let prev = this.getAt(num - 1);
		// prev.next = this.getAt(num + 1) ? this.getAt(num + 1) : null;
		prev.next = prev.next.next
	}


	insertAt(data, idx) {
		if(idx === 0) {
			if(this.head === null) this.head = new Node(data)
			else {
				this.insertFirst(data)
			}
			return
		}

		if(idx == this.size()) {
			this.insertLast(data) 
			return
		}

		if(idx > this.size()) {
			this.insertLast(data)
			return
		}
	

		let prev = this.getAt(idx - 1);
		let newNode = new Node(data, this.getAt(idx))

		prev.next = newNode

	}

	forEach(func, counter){
		// console.log(this.head)
		if(!this.head) return null;
		if(!func) return null;

		// console.log(func)

		curr = this.head
		// console.log(this.size())
		while(curr != null) {
			func(curr);
			// console.log(curr)
			curr = curr.next
		}
	}

	*[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current;
            current = current.next;
        }
    }
}

module.exports = { Node, LinkedList };
