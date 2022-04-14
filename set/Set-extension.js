/**
 * 给 es6 提供的 Set 类做的扩展实现，来支持集合运算
 */

/** 求并集 */
Set.prototype._union = function union(otherSet) {
  return new Set([...this, ...otherSet]);
}

/** 求交集 */
Set.prototype._intersection = function intersection(otherSet) {
  return this.size < otherSet.size
          ? new Set([...this].filter(element => otherSet.has(element)))
          : new Set([...otherSet].filter(element => this.has(element)));
}

/** 求当前集合对 otherSet 的差集 */
Set.prototype._difference = function difference(otherSet) {
  return new Set([...this].filter(element => !otherSet.has(element)));
}

/** 求当前集合是否是 otherSet 的子集 */
Set.prototype._isSubsetOf = function isSubsetOf(otherSet) {
  if (this.size > otherSet.size) return false;
  if (this.size === 0) return true;

  return [...this].every(element => otherSet.has(element));
}
