const { Node } = require("./modules/node");

/**
 * LinkedList 类
 * 
 * 链表：一种有序的存储数据的结构，不同于数组，可以不占用连续的内存
 * 
 * 支持的操作实例的方法
 * 1. push(val)           向链表尾部添加一个元素
 * 2. insert(val, index)  向链表的指定位置添加一个新元素
 * 3. getElementAt(index) 返回链表指定位置的元素，如果不存在就返回undefined
 * 4. removeAt(index)     移除链表指定位置的元素
 * 5. remove(val)         移除链表中的元素
 * 6. indexOf(val)        返回元素在链表中的索引
 * 7. getHead()           获取链表第一个元素
 * 8. getTail()           获取链表最后一个元素
 * 9. isEmpty()           返回链表是否为空
 * 10. size()             返回链表长度
 * 11. toString()         将链表转为字符串(序列化)
 * 12. print()            打印链表字符串
 */
class LinkedList {
  constructor(equalsFn = this.defaultEqualsFn) {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;
    this.equalsFn = equalsFn;
  }

  defaultEqualsFn(a, b) {
    return a === b;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  push(val) {
    const node = new Node(val);
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    }
    else {
      // 每次push一个新节点，都将尾部节点指向新节点
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  insert(val, index) {
    if (index < 0 || index > this.count) return false;

    const node = new Node(val);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    }
    else {
      let pre = this.head;
      let cur = this.head.next;
      for (let i = 1; i < index; i++) {
        pre = cur;
        cur = cur.next;
      }
      pre.next = node;
      node.next = cur;

      // 假若向尾部添加了一个新节点，类似push，需要将尾结点指向新节点
      if (index === this.count) {
        this.tail = node;
      }
    }
    this.count++;
    return true;
  }

  getElementAt(index) {
    if (index < 0 || index >= this.count) return undefined;

    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return false;
    let removeElement;

    if (index === 0) {
      removeElement = this.head;
      this.head = this.head.next;
    }
    else {
      let pre = this.getElementAt(index - 1);
      let cur = pre.next;
      pre.next = cur.next;
  
      // 如果移除的是尾部结点，则将尾结点指向新的尾部节点
      if (this.tail === cur) {
        this.tail = pre;
      }
      removeElement = cur;
    }
    this.count--;
    return removeElement.val;
  }

  remove(val) {
    let hasRemove = false;
    let pre = new Node(0);
    let cur = this.head;
    while(cur) {
      if (this.equalsFn(val, cur.val)) {
        pre.next = cur.next;

        if (this.head === cur) {
          this.head = cur.next;
        }
        if (this.tail === cur) {
          this.tail = pre;
        }

        cur = cur.next;
        this.count--;
        hasRemove = true;
      }
      else {
        pre = cur;
        cur = cur.next;
      }
    }

    return hasRemove;
  }

  indexOf(val) {
    let index = 0;
    let cur = this.head;

    while(cur) {
      if (this.equalsFn(cur.val, val)) {
        return index;
      }
      cur = cur.next;
      index++;
    }

    return -1;
  }

  toString() {
    if (this.isEmpty()) return '';
    let res = this.head.val;
    let cur = this.head.next;
    while (cur) {
      res += `,${cur.val}`;
      cur = cur.next;
    }
    return res;
  }

  print() {
    if (this.isEmpty()) {
      console.log('LinkedList: empty');
    }
    else {
      console.log('LinkedList', this.toString());
    }
  }
}

module.exports = LinkedList;
