const { divider } = require("../utils");
const SortedLinkedList = require("./sortedLinkedList");

const sortedLinkedList = new SortedLinkedList();
sortedLinkedList.push(2);
sortedLinkedList.push(7);
sortedLinkedList.push(4);
sortedLinkedList.push(5);
sortedLinkedList.push(1);
sortedLinkedList.push(9);
sortedLinkedList.push(4);
sortedLinkedList.push(3);
sortedLinkedList.print();
console.log('size:', sortedLinkedList.size());
divider();

console.log('insert:', sortedLinkedList.insert(12));
sortedLinkedList.print();
console.log('size:', sortedLinkedList.size());
divider();
