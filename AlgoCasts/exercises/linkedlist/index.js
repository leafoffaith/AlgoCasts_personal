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

	getFirst() {
		if(!this.head) return null
		return this.head;
	}

	getLast() {
		curr = this.head
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
		prev.next = this.getAt(num + 1) ? this.getAt(num + 1) : null;
	}


	// test('inserts a new node with data at the 0 index when the list has elements', () => {
	//     const l = new List();
	//     l.insertLast('a');
	//     l.insertLast('b');
	//     l.insertLast('c');
	//     l.insertAt('hi', 0);
	//     expect(l.getAt(0).data).toEqual('hi');
	//     expect(l.getAt(1).data).toEqual('a');
	//     expect(l.getAt(2).data).toEqual('b');
	//     expect(l.getAt(3).data).toEqual('c');
	//   });

	insertAt(data, idx) {
		if(idx === 0) {
			// console.log(this.getAt(0), this.getAt(1), this.getAt(2), this.getAt(3))

			if(this.head === null) this.head = new Node(data)
			else {
				// console.log(this.head, "current head")
				this.insertFirst(data)
				// console.log(this.head, data, "current head after insertion")
			}
			return
		}

		if(idx > this.size() - 1) return null;
		
		console.log(this.getAt(0), this.getAt(1), this.getAt(2), this.getAt(3))

		let prev = this.getAt(idx);
		let curr = new Node(data)
		curr.next = this.getAt(idx + 1) ?  this.getAt(idx + 1) :  null
		prev.next = curr
	}
}

module.exports = { Node, LinkedList };
