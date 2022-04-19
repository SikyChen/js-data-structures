const LinkedList = require("../linkedList/linkedList");
const HashMap = require("./hashMap");
const ValuePair = require("./ValuePair");

/**
 * HashTableSeparateChaining 类
 * 
 * 分离链接/拉链法 处理 HashMap 的 hashCode 重复问题
 * 
 * 有 HashMap 的实现和测试结果知道，不同的 key 可能会产生相同的 hashCode
 * 
 * 例：
 * - 5 - Sue
 * - 5 - Aethelwulf
 * 
 * 两个字符串 Sue 和 Aethelwulf 拥有相同的 hashCode 5。
 * 
 * 这会导致再 HashMap 中，后面存储的数据，会将前面的覆盖掉。
 * 
 * 为了解决这个问题，可以使用 拉链法：
 * - 当给一个 hashCode 的位置存储数据时，创建一个链表，将数据存入链表中
 * - 如果下次遇到相同的 hashCode 需要存储数据，则遍历该链表到尾部，将数据存入新的链表节点中
 * 
 * 需重写 增删查 的功能
 */
module.exports = class HashMapSeparateChaining extends HashMap {
  set(key, value) {
    if (!key || !value) return false;

    const position = this.hashCode(key);
    if (this.table[position]) {
      const linkedList = this.table[position];
      linkedList.push(new ValuePair(key, value));
    } else {
      const linkedList = new LinkedList((a, b) => a.key === b);
      linkedList.push(new ValuePair(key, value));
      this.table[position] = linkedList;
    }
    return true;
  }

  remove(key) {
    if (!key) return false;

    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (!linkedList) {
      return false;
    }
    else {
      linkedList.remove(key);
      if (linkedList.size() === 0) {
        delete this.table[position];
      }
      return true;
    }
  }

  get(key) {
    if (!key) return undefined;

    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (!linkedList) {
      return undefined;
    }
    else {
      let valuePair = linkedList.get(key);
      if (key === 'Sue') {
        console.log('>>>', valuePair);
      }
      return valuePair ? valuePair.toString() : undefined;
    }
  }
}
