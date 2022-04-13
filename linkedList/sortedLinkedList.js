const LinkedList = require("./linkedList");
const { Node } = require("./modules/node");

/**
 * SortedLinkedList 类
 * 
 * 有序链表：链表从头节点开始，其节点保存的 val 有序增加的链表
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
 * 
 * 以下方法需要根据有序链表的特性重写
 * 1. push(val)           向链表添加一个元素，该元素会根据其 val 大小添加到正确位置以保证链表有序
 * 2. insert(val, index)  不再支持向任意位置添加元素
 */
class SortedLinkedList extends LinkedList {
  constructor(equalsFn, compareFn) {
    super(equalsFn);
    this.compareFn = compareFn === undefined ? this.defaultCompare : compareFn;
  }

  defaultCompare(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }

  push(val) {
    if (this.isEmpty()) {
      return super.push(val);
    }
    const node = new Node(val);
    let prevElement = this.getPrevElementBySort(val);

    if (prevElement === undefined) {
      node.next = this.head;
      this.head = node;
    }
    else {
      let nextElement = prevElement.next;
      prevElement.next = node;
      node.next = nextElement;
    }
    this.count++;
  }

  getPrevElementBySort(val) {
    let prevElement;
    let cur = this.head;

    while(cur && this.compareFn(val, cur.val) > 0) {
      prevElement = cur;
      cur = cur.next;
    }

    return prevElement;
  }

  /**
   * 有序链表不再支持向任意位置插入元素
   * 
   * 现在的 insert 方法和 push 方法相同
   */
  insert(val) {
    return this.push(val);
  }
}

module.exports = SortedLinkedList;
