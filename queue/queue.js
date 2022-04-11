/**
 * Queue 类
 * 
 * 队列：一种先进先出，后进后出的数据结构
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
 */
class Queue {
  constructor() {
    this.items = {};
    this.count = 0;         // 队列添加过的元素的个数
    this.lowestCount = 0;   // 队列头部的元素下标
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(...elements) {
    let len = elements.length;
    for (let i = 0; i < len; i++) {
      this.items[this.count] = elements[i];
      this.count++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    let item = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
    return true;
  }

  toString() {
    let item = this.peek();
    for(let i=this.lowestCount+1; i<this.count; i++) {
      item += `,${this.items[i]}`;
    }
    return item;
  }

  print() {
    if (this.isEmpty()) {
      console.log('Queue: empty');
    } else {
      console.log('Queue:', this.toString());
    }
  }
}

module.exports = Queue;
