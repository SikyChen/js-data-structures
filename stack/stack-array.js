/**
 * 使用数组实现一个 Stack 类
 * 
 * 栈：一种后进先出的数据结构
 * 
 * 支持的操作实例的方法
 * 1. push(element(s))  向栈顶添加一个元素（或多个）
 * 2. pop()             从栈顶删除一个元素，并将该元素返回
 * 3. peek()            查看栈顶的元素
 * 4. size()            获取栈内的元素数量
 * 5. clear()           清空栈内元素
 * 6. isEmpty()         检查栈是否为空
 * 7. toString()        打印所有栈内元素，使用逗号分割
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this.items.push(args[i]);
    }
    return this.items;
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
    return true;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toString() {
    return this.items.join(',');
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
