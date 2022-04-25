const MinHeap = require("./minHeap");

/**
 * MaxHeap 类
 * 
 * 最大堆类
 * 
 * 操作跟最小堆类都是一样的，只不过在比较的时候跟最小堆类相反，需要将大的节点向上移动。
 * 
 * 支持方法：
 * 1. getMaximal        获取最大值
 * 1. getMinimum[-]     将最小堆类的获取最小值去除掉
 */
module.exports = class MaxHeap extends MinHeap {
  constructor(compareFn) {
    super(compareFn);
    this._compareFn = this._reverseCompareFn(this._compareFn);
  }

  _reverseCompareFn(compareFn) {
    return (a, b) => compareFn(b, a);
  }

  getMaximal() {
    if (!this.size()) return undefined;

    return this.heap[0];
  }

  getMinimum = undefined;
}