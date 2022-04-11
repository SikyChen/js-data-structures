const Queue = require("./queue");

const queue = new Queue();
queue.print();                  // Queue: empty
console.log(queue.isEmpty());   // true

queue.enqueue(1);
queue.print();                  // Queue: 1

queue.enqueue(2,3,4,5);
console.log('size:', queue.size());           // size: 5
console.log('toString:', queue.toString());   // toString: 1,2,3,4,5

console.log('peek:', queue.peek());           // peek: 1
console.log('dequeue:', queue.dequeue());     // dequeue: 1
queue.print();                                // Queue: 2,3,4,5
console.log('size:', queue.size());           // size: 4

console.log('isEmpty', queue.isEmpty());      // isEmpty false
console.log('clear', queue.clear());          // clear true
queue.print();                                // Queue: empty

console.log('peek', queue.peek());            // peek undefined
console.log('dequeue', queue.dequeue());      // dequeue undefined

