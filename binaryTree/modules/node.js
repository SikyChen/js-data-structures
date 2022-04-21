/**
 * Node 类（二叉树）
 * 
 * 用于生成二叉树中节点的类
 */
 class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  Node,
};
