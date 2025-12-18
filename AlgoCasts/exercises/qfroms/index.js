// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    // use two stacks to create a queue
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }.

    add(record) {

        if (!this.stackOne.peek()) this.stackOne.push()

        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop())
        }
        this.stackOne.push(record)
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop())
        }
        console.log(this.stackOne, "stack one")
        console.log(this.stackTwo, "stack two")
    }

    remove() {
        return this.stackOne.pop()
    }

    peek() {
        return this.stackOne.peek()
    }

}

module.exports = Queue;
