const Deque = require("./deque");

const deque = new Deque();
deque.print();                  // Queue: empty
console.log(deque.isEmpty());   // true

deque.enqueue(1);
deque.print();                  // Queue: 1

deque.enqueue(2,3,4,5);
console.log('size:', deque.size());           // size: 5
console.log('toString:', deque.toString());   // toString: 1,2,3,4,5

console.log('peek:', deque.peek());           // peek: 1
console.log('dequeue:', deque.dequeue());     // dequeue: 1
deque.print();                                // Queue: 2,3,4,5
console.log('size:', deque.size());           // size: 4

deque.unshift(7,8,9);
deque.unshift(11,12);
deque.unshift(22,23,24,25);
deque.unshift(30);
console.log('pop:', deque.pop());             // pop: 5
deque.print();                                // Queue: 30,25,24,23,22,12,11,9,8,7,2,3,4
console.log('peekBack:', deque.peekBack());   // peekBack: 4

console.log('isEmpty', deque.isEmpty());      // isEmpty false
console.log('clear', deque.clear());          // clear true
deque.print();                                // Queue: empty

console.log('peek', deque.peek());            // peek undefined
console.log('dequeue', deque.dequeue());      // dequeue undefined
