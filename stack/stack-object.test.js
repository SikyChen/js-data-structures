const Stack = require('./stack-object');

const stack = new Stack();
stack.print();

stack.push(1);
stack.print();

stack.push(2,3,4,5);
stack.print();
console.log('size:', stack.size())
console.log('toString', stack.toString());

console.log('pop:', stack.pop());
stack.print();
console.log('size:', stack.size())

console.log('isEmpty:', stack.isEmpty());
console.log('clear:', stack.clear());
stack.print();
console.log('isEmpty:', stack.isEmpty());
