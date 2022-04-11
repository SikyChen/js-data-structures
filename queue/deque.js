const Queue = require("./queue");

/**
 * Deque 类
 * 
 * 双端队列：一种允许从头部和尾部都可以进行添加和移除元素的特殊队列
 * - 先进先出的部分，直接继承队列的方法
 * - 先进后出的部分，作为新方法添加
 * 
 * 支持的操作实例的方法
 * 1. enqueue(element(s))   向队列尾部添加新项
 * 2. dequeue()             移除队列的第一项，并返回该元素
 * 3. peek()                返回队列的第一项，但不删除
 * 4. isEmpty()             检查队列是否为空
 * 5. size()                返回队列的元素个数
 * 6. clear()               清空队列
 * 7. toString()            将队列元素拼接为字符串
 * 8. print()               打印队列
 * 
 * 双端队列额外要实现的方法
 * 1. unshift(element(s))   向队列头部添加新项
 * 2. pop()                 移除队列的尾部项，并返回该元素
 * 3. peekBack()            返回队列的尾部项，但不删除
 */
class Deque extends Queue {
  /** 从队列顶部添加元素 */
  unshift(...elements) {
    if (this.isEmpty()) {
      return this.enqueue(...elements);
    }

    const len = elements.length;

    if (this.lowestCount <= len) {
      for (let i = this.count - 1; i >= this.lowestCount; i--) {
        this.items[i + len] = this.items[i];
      }
      this.count += len;
      this.lowestCount += len;
    }

    for (let i = 0; i < len; i++) {
      this.lowestCount--;
      this.items[this.lowestCount] = elements[i];
    }
  }

  /** 从队列尾部移除元素并返回 */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }

  /** 查看队列尾部的元素 */
  peekBack() {
    return this.items[this.count - 1];
  }
}

module.exports = Deque;
