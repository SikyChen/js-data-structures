const { defaultToStringFn } = require("./utils");
const ValuePair = require("./ValuePair");

/**
 * HashMap 类
 * 
 * 哈希表/散列表
 * 结构跟 Dictionary 类非常类似，但是实例是使用 hashCode 来作为 key 的
 * 
 * 在其它一些语言如 Java 中，是没有 JS 对象的概念的，其 HashMap 底层使用数组来实现。
 * 将 hashCode 的值作为数组的下标进行查询，速度会比较快。
 * 同时 hashCode() 函数可以将任意类型的数据转为数字类型，这样可以实现键值对的键使用除字符串外其它类型的能力。
 * 
 * 实现 增删查 的功能
 */
class HashMap {
  constructor(toStringFn = defaultToStringFn) {
    this.toStringFn = toStringFn;
    this.table = {};
  }

  /**
   * hash函数
   * 一个常用的，将任意类型的key转为数字下标的方法
   * 数字下标可能重复，此方法的碰撞概率较高，不适合实际使用，但有助于后面学习如何处理碰撞
   */
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStringFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  set(key, value) {
    if (!key || !value) return false;

    const position = this.hashCode(key);
    this.table[position] = new ValuePair(key, value);
    return true;
  }

  remove(key) {
    if (!key) return false;

    const position = this.hashCode(key);
    delete this.table[position];
    return true;
  }

  get(key) {
    if (!key) return undefined;

    const position = this.hashCode(key);
    return this.table[position] ? this.table[position].value : undefined;
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},\n{${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }
    return objString;
  }

  print() {
    if (this.isEmpty()) {
      console.log('print: empty');
    }
    else {
      console.log('print:');
      console.log(this.toString());
    }
  }
}

module.exports = HashMap;
