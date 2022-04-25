const MaxHeap = require("./maxHeap");
const { divider } = require("../utils");

const heap = new MaxHeap();
heap.insert(2);
console.log(heap.heap);
heap.insert(3);
console.log(heap.heap);
heap.insert(4);
console.log(heap.heap);
heap.insert(5);
console.log(heap.heap);
heap.insert(1);
console.log(heap.heap);
divider();

console.log('extract', heap.extract());
console.log(heap.heap);
divider();

console.log('getMaximal', heap.getMaximal());
try {
  console.log('getMinimum', heap.getMinimum());
} catch (error) {
  console.log('error', error);
}
