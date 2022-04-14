/**
 * Set 类
 * 
 * 集合，没有重复项的无序数据结构
 * 
 * 这里使用对象实现集合，要保存的数据都存为对象的key
 * 所以，存入的数据都会转为字符串，例如 数字 1 会变为 '1' , {} 会变为 '[object Object]'
 * 所以这里实现的是一个只能传入数字的 Set 类
 * 
 * 支持的操作实例的方法
 * 1. add(element)        向集合添加一个新元素
 * 2. delete(element)     从集合移除一个元素
 * 3. has(element)        如果元素在集合中，返回 true，否则返回 false
 * 4. clear()             移除集合中的所有元素
 * 5. size()              返回集合所包含元素的数量。它与数组的 length 属性类似
 * 6. values()            返回一个包含集合中所有值（元素）的数组
 * 7. print()             打印所有元素
 * 
 * 8. union(otherSet)         求并集
 * 9. intersection(otherSet)  求交集
 * 10. difference(otherSet)   求当前集合对 otherSet 的差集
 * 11. isSubsetOf(otherSet)   求当前集合是否是 otherSet 的子集
 */
class Set {
  constructor(array) {
    this.items = {};
    if (array && array.length) {
      array.forEach(element => this.add(element));
    }
  }

  /** 向集合添加一个新元素 */
  add(element) {
    if (this.has(element)) return false;
    this.items[element] = element;
    return true;
  }

  /** 从集合移除一个元素 */
  delete(element) {
    if (!this.has(element)) return false;
    delete this.items[element];
    return true;
  }

  /** 如果元素在集合中，返回 true，否则返回 false */
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  /** 移除集合中的所有元素 */
  clear() {
    this.items = {};
    return true;
  }

  /** 返回集合所包含元素的数量。它与数组的 length 属性类似 */
  size() {
    return Object.keys(this.items).length;
  }

  /** 返回一个包含集合中所有值（元素）的数组 */
  values() {
    return Object.keys(this.items);
  }

  /** 打印所有元素 */
  print() {
    if (this.size() === 0) {
      console.log('Set: empty');
    }
    else {
      console.log('Set:', this.values().join());
    }
  }

  /** 求并集 */
  union(otherSet) {
    const unionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  /** 求交集 */
  intersection(otherSet) {
    const intersectionSet = new Set();
    let lessValues = this.values();
    let moreValues = otherSet.values();

    if (lessValues.length > moreValues.length) {
      [lessValues, moreValues] = [moreValues, lessValues];
    }

    for (let i = 0; i < lessValues.length; i++) {
      if (moreValues.includes(lessValues[i])) {
        intersectionSet.add(lessValues[i]);
      }
    }

    return intersectionSet;
  }

  /** 求当前集合对 otherSet 的差集 */
  difference(otherSet) {
    const differenceSet = new Set();

    this.values().forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    })

    return differenceSet;
  }

  /** 求当前集合是否是 otherSet 的子集 */
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;
    if (this.size() === 0) return true;

    return this.values().every(element => {
      return otherSet.has(element);
    });
  }
}

module.exports = Set;
