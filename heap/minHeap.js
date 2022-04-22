const { defaultCompareFn, COMPARE } = require("./../utils/compare");

/**
 * MinHeap 类
 * 
 * 最小堆类
 * 
 * 特点：
 * 1. 完全二叉树
 * 2. 内部节点都具有左右子节点（最后一个叶节点是其父节点的左子节点，那么该父节点无右子节点）
 * 
 * 支持的外部方法
 * 1. insert(value)       向堆中插入一个新值
 * 2. size()              返回堆的大小
 * 3. isEmpty()           堆是否为空
 * 4. getMinimum()       返回最小值
 * 5. extract()           移除最小值并返回
 */
module.exports = class MinHeap {
  constructor(compareFn = defaultCompareFn) {
    this._compareFn = compareFn;
    this.heap = [];
  }

  insert(value) {
    if (value === null || value === undefined) return false;

    this.heap.push(value);
    this._siftUp(this.heap.length - 1);
    return true;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getMinimum() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }

  extract() {
    if (this.isEmpty()) return undefined;
    const res = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._siftDown(0);
    return res;
  }

  _getParentIndex(index) {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  }

  _getLeftIndex(index) {
    return index * 2 + 1;
  }

  _getRightIndex(index) {
    return index * 2 + 2;
  }

  _swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  // 从某个节点向上交换
  _siftUp(index) {
    let parentIndex = this._getParentIndex(index);
    while (
      index > 0 &&
      this._compareFn(this.heap[index], this.heap[parentIndex]) === COMPARE.LESS
    ) {
      this._swap(this.heap, index, parentIndex);
      index = parentIndex;
      parentIndex = this._getParentIndex(index);
    }
  }

  // 从某个节点向下交换
  _siftDown(index) {
    const leftIndex = this._getLeftIndex(index);
    const rightIndex = this._getRightIndex(index);
    const size = this.size();

    if (
      leftIndex < size && this._compareFn(this.heap[leftIndex], this.heap[index]) === COMPARE.LESS ||
      rightIndex < size && this._compareFn(this.heap[rightIndex], this.heap[index]) === COMPARE.LESS
    ) {
      if (rightIndex < size && this._compareFn(this.heap[rightIndex], this.heap[leftIndex]) === COMPARE.LESS) {
        this._swap(this.heap, index, rightIndex);
        this._siftDown(rightIndex);
      }
      else {
        this._swap(this.heap, index, leftIndex);
        this._siftDown(leftIndex);
      }
    }
  }
}
