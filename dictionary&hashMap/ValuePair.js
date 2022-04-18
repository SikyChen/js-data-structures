
/**
 * ValuePair 类
 * 
 * 生成键值对数据
 */
module.exports = class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}
