const DoublyLinkedList = require("./DoublyLinkedList");

/**
 * DoublyLinkedListStack 类
 * 
 * 栈：使用 双向链表 实现的 栈
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
 class DoublyLinkedListStack {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this.items.push(args[i]);
    }
    return this.items;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.removeAt(this.size() - 1);
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items.getElementAt(this.size() - 1).val;
  }

  size() {
    return this.items.size();
  }

  clear() {
    this.items = new DoublyLinkedList();
    return true;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  toString() {
    return this.items.toString();
  }

  print() {
    if (this.isEmpty()) {
      console.log('Stack: empty');
    } else {
      console.log('Stack:', this.toString());
    }
  }
}

module.exports = DoublyLinkedListStack;
