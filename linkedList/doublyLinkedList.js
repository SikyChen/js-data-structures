const LinkedList = require("./linkedList");
const { DoublyNode } = require("./modules/node");

/**
 * DoublyLinkedList 类
 * 
 * 双向链表，与链表的区别是，每个节点除了有一个 next 指针外，还有一个指向
 * 前一个节点的 prev 指针，所以可以从后向前遍历
 * 
 * 支持的操作实例的方法
 * 1. indexOf(val)        返回元素在链表中的索引
 * 2. getHead()           获取链表第一个元素
 * 3. getTail()           获取链表最后一个元素
 * 4. isEmpty()           返回链表是否为空
 * 5. size()              返回链表长度
 * 6. toString()          将链表转为字符串(序列化)
 * 7. print()             打印链表字符串
 * 
 * 以下方法需要根据双向链表的特性重写
 * 1. push(val)           向链表尾部添加一个元素
 * 2. insert(val, index)  向链表的指定位置添加一个新元素
 * 3. getElementAt(index) 返回链表指定位置的元素，如果不存在就返回undefined
 * 4. removeAt(index)     移除链表指定位置的元素
 * 5. remove(val)         移除链表中的元素
 */
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn) {
    super(equalsFn);
  }

  push(val) {
    const node = new DoublyNode(val);
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  getElementAt(index) {
    if (index < 0 || index >= this.count) return undefined;

    const isBeginFront = index <= (this.count / 2);
    if (isBeginFront) {
      let cur = this.head;
      for (let i = 0; i < index; i++) {
        cur = cur.next;
      }
      return cur;
    }
    else {
      let cur = this.tail;
      for (let i = this.count - 1; i > index; i--) {
        cur = cur.prev;
      }
      return cur;
    }
  }

  insert(val, index) {
    if (index < 0 || index > this.count) return false;

    const node = new DoublyNode(val);
    if (index === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    else if (index === this.count) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    else {
      const nextElement = this.getElementAt(index);
      const prevElement = nextElement.prev;

      prevElement.next = node;
      node.next = nextElement;
      nextElement.prev = node;
      node.prev = prevElement;
    }
    this.count++;

    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return false;
    let removeElement;

    if (index === 0) {
      removeElement = this.head;
      this.head = this.head.next;
      this.head.prev = undefined;
    }
    else if (index === this.count - 1) {
      removeElement = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = undefined;
    }
    else {
      const prevElement = this.getElementAt(index - 1);
      removeElement = prevElement.next;
      const nextElement = prevElement.next.next;
  
      prevElement.next = nextElement;
      nextElement.prev = prevElement;
    }
    this.count--;

    return removeElement.val;
  }

  remove(val) {
    let hasRemove = false;
    let cur = this.head;
    while(cur) {
      if (this.equalsFn(val, cur.val)) {

        if (this.head === cur) {
          this.head = cur.next;
          this.head.prev = undefined;
        }
        else if (this.tail === cur) {
          this.tail = cur.prev;
          this.tail.next = undefined;
        }
        else {
          const prevElement = cur.prev;
          const nextElement = cur.next;

          prevElement.next = nextElement;
          nextElement.prev = prevElement;
        }
        
        this.count--;
        hasRemove = true;
      }

      cur = cur.next;
    }

    return hasRemove;
  }
}

module.exports = DoublyLinkedList;
