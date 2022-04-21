const { divider } = require('./../utils');
const BinarySearchTree = require("./binarySearchTree");

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
console.log('root', tree.root);
divider();

console.log('search 9', tree.search(9));
console.log('search 12', tree.search(12));
console.log('search 28', tree.search(28));
divider();

console.log('min', tree.min());
console.log('max', tree.max());
divider();

tree.inOrderTraverse(item => console.log('inOrderTraverse', item));
divider();

tree.preOrderTraverse(item => console.log('preOrderTraverse', item));
divider();

tree.postOrderTraverse(item => console.log('postOrderTraverse', item));
divider();

console.log('remove 8', tree.remove(8));
tree.inOrderTraverse(item => console.log('inOrderTraverse', item));
divider();

console.log('remove 11', tree.remove(11));
tree.inOrderTraverse(item => console.log('inOrderTraverse', item));
divider();

console.log('remove 15', tree.remove(15));
tree.inOrderTraverse(item => console.log('inOrderTraverse', item));
divider();
