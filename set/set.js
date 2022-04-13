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
 * add(element)       向集合添加一个新元素。
 * delete(element)    从集合移除一个元素。
 * has(element)       如果元素在集合中，返回 true，否则返回 false。
 * clear()            移除集合中的所有元素。
 * size()             返回集合所包含元素的数量。它与数组的 length 属性类似。
 * values()           返回一个包含集合中所有值（元素）的数组。
 * print()            打印所有元素。
 */
class Set {
  constructor(array) {
    this.items = {};
    if (array && array.length) {
      array.forEach(element => this.add(element));
    }
  }

  add(element) {
    if (this.has(element)) return false;
    this.items[element] = element;
    return true;
  }

  delete(element) {
    if (!this.has(element)) return false;
    delete this.items[element];
    return true;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
    return true;
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }

  print() {
    console.log(this.values().join());
  }
}

module.exports = Set;
