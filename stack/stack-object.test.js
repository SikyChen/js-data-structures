const Stack = require('./stack-object');

const stack = new Stack();
stack.print();      // Stack: empty

stack.push(1);
stack.print();      // Stack: 1

stack.push(2,3,4,5);
stack.print();      // Stack: 1,2,3,4,5
console.log('size:', stack.size())          // size: 5
console.log('toString', stack.toString());  // toString 1,2,3,4,5

console.log('pop:', stack.pop());           // pop: 5
stack.print();                              // Stack: 1,2,3,4
console.log('peek:', stack.peek());         // peek: 4
console.log('size:', stack.size())          // size: 4

console.log('isEmpty:', stack.isEmpty());   // isEmpty: false
console.log('clear:', stack.clear());       // clear: true
stack.print();                              // Stack: empty
console.log('isEmpty:', stack.isEmpty());   // isEmpty: true

console.log('peek:', stack.peek());         // peek: undefined
console.log('pop:', stack.pop());           // pop: undefined
