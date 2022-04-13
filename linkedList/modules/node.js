/**
 * Node 类（链表）
 * 
 * 用于生成链表中节点的类
 */
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * DoublyNode 类（双向链表）
 * 
 * 用于生成双向链表中节点的类
 */
class DoublyNode extends Node {
  constructor(val, next, prev) {
    super(val, next);
    this.prev = prev;
  }
}

module.exports = {
  Node,
  DoublyNode,
};
