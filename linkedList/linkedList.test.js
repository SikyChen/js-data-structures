const { divider } = require("../utils");
const LinkedList = require("./linkedList");

const linkedList = new LinkedList();
linkedList.print();
console.log('isEmpty:', linkedList.isEmpty());
linkedList.push(5);
linkedList.push(2);
linkedList.push(4);
linkedList.push(7);
linkedList.print();
console.log('isEmpty:', linkedList.isEmpty());
console.log('size:', linkedList.size());
divider();

console.log('insert 3:', linkedList.insert(3, 0));
linkedList.print();
console.log('size:', linkedList.size());
console.log('getElementAt 3:', linkedList.getElementAt(3))
console.log('getElementAt 2:', linkedList.getElementAt(2))
console.log('insert 9:', linkedList.insert(9, 5));
linkedList.print();
console.log('size:', linkedList.size());
divider();

console.log('getElementAt 4:', linkedList.getElementAt(4));
console.log('removeAt 4:', linkedList.removeAt(4));
console.log('getElementAt 4:', linkedList.getElementAt(4));
linkedList.print();
console.log('size:', linkedList.size());
divider();

console.log('removeAt 0:', linkedList.removeAt(0));
linkedList.print();
console.log('removeAt size:', linkedList.removeAt(linkedList.size() - 1));
linkedList.print();
divider();

linkedList.push(6);
linkedList.push(12);
linkedList.push(8);
linkedList.push(1);
linkedList.print();
console.log('remove:', linkedList.remove(5));
linkedList.print();
console.log('remove:', linkedList.remove(6));
linkedList.print();
console.log('remove:', linkedList.remove(1));
linkedList.print();
divider();

console.log('indexOf:', linkedList.indexOf(18));
console.log('indexOf:', linkedList.indexOf(12));