const MinHeap = require("./minHeap");
const { divider } = require("../utils");

const heap = new MinHeap();
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

console.log('getMinimum', heap.getMinimum());
