const { defaultToStringFn } = require("./utils");
const ValuePair = require("./ValuePair");

/**
 * Dictionary 类
 * 
 * 字典，其内部的数据结构如下
 * Dictionary {
 *   'a': {
 *     key: 'a',
 *     value: 'aValue',
 *   },
 *   '15': {
 *     key: 15,
 *     value: 1234567,
 *   },
 *   '{a:1}': {
 *     key: { a: 1 },
 *     value: { a: 1, b: 2, c: 3 },
 *   },
 *   'NULL': {
 *     key: null,
 *     value: 'My key is Null',
 *   },
 * }
 *
 * 当保存数据时，是通过 {key, value} 的键值对进行保存的，
 * 无论是 key 还是 value，都可以是任意的数据类型（当然在具体实现中，可能只满足部分数据类型）
 * 
 * 使用对象实现字典，由于对象原本的键只能是字符串，不能使其它数据类型，
 * 所以保存的时候，把原本的键作为索引，其索引值通过 key.toString() 转换得来，
 * 而真正保存的数据作为右侧的对象保存下来。
 * 
 * 支持的操作实例的方法
 * 1. set(key,value)       向字典中添加新元素。如果 key 已经存在，那么已存在的 value 会被新的值覆盖。
 * 2. remove(key)          通过使用键值作为参数来从字典中移除键值对应的数据值。
 * 3. hasKey(key)          如果某个键值存在于该字典中，返回 true，否则返回 false。
 * 4. get(key)             通过以键值作为参数查找特定的数值并返回。
 * 5. clear()              删除该字典中的所有值。
 * 6. size()               返回字典所包含值的数量。与数组的 length 属性类似。
 * 7. isEmpty()            在 size 等于零的时候返回 true，否则返回 false。
 * 8. keyValues()          将字典中所有[键，值]对返回。
 * 9. keys()               将字典所包含的所有键名以数组形式返回。
 * 10. values()            将字典所包含的所有数值以数组形式返回。
 * 11. forEach(callbackFn) 迭代字典中所有的键值对。callbackFn 有两个参数：key 和value。该方法可以在回调函数返回 false 时被中止（和 Array 类中的 every 方法相似）。
 * 12. toString()
 */
class Dictionary {
  constructor(toStringFn = defaultToStringFn) {
    this.toStringFn = toStringFn;
    this.table = {};
  }

  set(key, value) {
    const tableKey = this.toStringFn(key);
    this.table[tableKey] = new ValuePair(key, value);
    return true;
  }

  remove(key) {
    if (!this.hasKey(key)) return false;

    delete this.table[this.toStringFn(key)];
    return true;
  }

  hasKey(key) {
    return !!this.table[this.toStringFn(key)];
  }

  get(key) {
    if (!this.hasKey(key)) return undefined;

    return this.table[this.toStringFn(key)];
  }

  clear() {
    this.table = {};
    return true;
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map(item => item.key);
  }

  values() {
    return this.keyValues().map(item => item.value);
  }

  forEach(callbackFn) {
    const keyValues = this.keyValues();
    for (let i = 0; i < keyValues.length; i++) {
      const { key, value } = keyValues[i];
      const isBreak = !callbackFn(key, value);
      if (isBreak) break;
    }
  }

  toString() {
    if (this.isEmpty()) return '';

    const keyValues = this.keyValues();
    const objString = keyValues[0].toString();
    for (let i = 1; i < keyValues.length; i++) {
      objString += `,${keyValues[i].toString()}`;
    }
    return objString;
  }
}

module.exports = Dictionary;
