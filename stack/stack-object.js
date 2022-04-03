/**
 * 使用对象实现一个 Stack 类
 * 
 * 栈：一种后进先出的数据结构
 * 
 * 支持的操作实例的方法
 * 1. push(element(s))  向栈顶添加一个元素（或多个）
 * 2. pop()             从栈顶删除一个元素，并将该元素返回
 * 3. size()            获取栈内的元素数量
 * 4. clear()           清空栈内元素
 * 5. isEmpty()         检查栈是否为空
 * 6. toString()        打印所有栈内元素，使用逗号分割
 */
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this.items[this.count] = args[i];
      this.count++;
    }
    return this.items;
  }

  pop() {
    this.count--;
    let item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.items = {};
    return true;
  }

  isEmpty() {
    return this.count === 0;
  }

  toString() {
    let string = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      string += `,${this.items[i]}`;
    }
    return string;
  }

  print() {
    if (this.isEmpty()) {
      console.log('Stack: empty');
    } else {
      console.log('Stack:', this.toString());
    }
  }
}

module.exports = Stack;
