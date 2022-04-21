const { defaultCompareFn, COMPARE } = require("./modules/compare");
const { Node } = require("./modules/node");

/**
 * BinarySearchTree 类
 * 
 * 二叉搜索树
 * 
 * 特点：
 * 对于每一个节点，它左子树上的节点值，都小于它本身；同时它右子树上的节点值，都大于它本身
 * 
 * 例如：
 * 
 *          6
 *      4       8
 *    3   5   7   9
 * 
 * 支持的方法：
 * 1. insert(key)            向树中插入一个新的键
 * 2. search(key)            在树中查找一个键。如果节点存在，则返回该节点 key；如果不存在，则返回 undefined
 * 3. min()                  返回树中最小的值/键
 * 4. max()                  返回树中最大的值/键
 * 5. inOrderTraverse()      通过中序遍历方式遍历所有节点
 * 6. preOrderTraverse()     通过先序遍历方式遍历所有节点
 * 7. postOrderTraverse()    通过后序遍历方式遍历所有节点
 * 8. remove(key)            从树中移除某个键
 * 
 */
module.exports = class BinarySearchTree {
  constructor(compareFn = defaultCompareFn) {
    this.compareFn = compareFn;
    this.root = null;
  }

  /** 向树中插入一个新的键 */
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    }
    else {
      this._insertNode(this.root, key);
    }
  }

  _insertNode(node, key) {
    if (this.compareFn(key, node.key) === COMPARE.LESS) {
      if (node.left === null) {
        node.left = new Node(key);
      }
      else {
        this._insertNode(node.left, key);
      }
    }
    else {
      if (node.right === null) {
        node.right = new Node(key);
      }
      else {
        this._insertNode(node.right, key);
      }
    }
  }

  /** 在树中查找一个键。如果节点存在，则返回该节点 key；如果不存在，则返回 undefined */
  search(key) {
    if (this.root === null) return undefined;

    return this._searchNode(this.root, key);
  }

  _searchNode(node, key) {
    const compareRes = this.compareFn(key, node.key);
    if (compareRes === COMPARE.LESS) {
      if (node.left === null) {
        return undefined;
      }
      else {
        return this._searchNode(node.left, key);
      }
    }
    else if (compareRes === COMPARE.MORE) {
      if (node.right === null) {
        return undefined;
      }
      else {
        return this._searchNode(node.right, key);
      }
    }
    else {
      return node.key;
    }
  }

  /** 返回树中最小的值/键 */
  min() {
    return this._minNode(this.root);
  }

  _minNode(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node.key;
  }

  /** 返回树中最大的值/键 */
  max() {
    return this._maxNode(this.root);
  }

  _maxNode(node) {
    while (node && node.right) {
      node = node.right;
    }
    return node.key;
  }

  /** 通过中序遍历方式遍历所有节点 */
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this._inOrderTraverseNode(node.right, callback);
    };
  }

  /** 通过先序遍历方式遍历所有节点 */
  preOrderTraverse(callback) {
    this._preOrderTraverse(this.root, callback);
  }

  _preOrderTraverse(node, callback) {
    if (node !== null) {
      callback(node.key);
      this._preOrderTraverse(node.left, callback);
      this._preOrderTraverse(node.right, callback);
    }
  }

  /** 通过后序遍历方式遍历所有节点 */
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  /** 从树中移除某个键 */
  remove(key) {
    this.root = this._removeNode(this.root, key);
  }

  /**
   * 根据key移除目标树上的某个节点
   * @param {Node} node 需要被移除节点的数的根节点root
   * @param {*} key 节点值
   * @returns {Node} 被移除节点之后的树
   */
  _removeNode(node, key) {
    if (node === null) return null;

    const compareRes = this.compareFn(key, node.key);

    if (compareRes === COMPARE.LESS) {
      node.left = this._removeNode(node.left, key);
      return node;
    }

    if (compareRes === COMPARE.MORE) {
      node.right = this._removeNode(node.right, key);
      return node;
    }

    // 相等了，说明当前节点是要移除的节点

    // 如果当前节点是叶子节点，则直接移除即可
    if (node.left === null && node.right === null) {
      return null;
    }

    // 如果当前节点只有右子节点
    if (node.left === null) {
      return node.right;
    }

    // 如果当前节点只有左子节点
    if (node.right === null) {
      return node.left;
    }

    // 如果左右子节点都有，找到其右子树的最小节点代替它本身，并将右子树的最小节点移除
    const rightTreeMinNodeKey = this._minNode(node.right);
    node.key = rightTreeMinNodeKey;
    node.right = this._removeNode(node.right, rightTreeMinNodeKey);
    return node;
  }
  
}
