const { divider } = require("../utils");
const DoublyLinkedList = require("./DoublyLinkedList");

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
doublyLinkedList.push(8);
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
divider();

console.log('getElementAt 3', doublyLinkedList.getElementAt(3).val);
console.log('getElementAt 5', doublyLinkedList.getElementAt(5).val);
divider();

console.log('insert 10 3', doublyLinkedList.insert(10, 3));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log('insert 12 7', doublyLinkedList.insert(12, 7));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log('insert 14 10', doublyLinkedList.insert(14, 10));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log('insert 99 12', doublyLinkedList.insert(99, 12));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
divider();

console.log('removeAt 0', doublyLinkedList.removeAt(0));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log(`removeAt ${doublyLinkedList.size() - 1}`, doublyLinkedList.removeAt(doublyLinkedList.size() - 1));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log('removeAt 4', doublyLinkedList.removeAt(4));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log(`removeAt ${doublyLinkedList.size()}`, doublyLinkedList.removeAt(doublyLinkedList.size()));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
divider();

doublyLinkedList.push(4);
doublyLinkedList.push(6);
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log('remove 2', doublyLinkedList.remove(2));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log('remove 4', doublyLinkedList.remove(4));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
console.log('remove 6', doublyLinkedList.remove(6));
doublyLinkedList.print();
console.log('size', doublyLinkedList.size());
divider();
