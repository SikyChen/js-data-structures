const COMPARE = {
  LESS: -1,
  MORE: 1,
  EQUAL: 0,
}

function defaultCompareFn(a, b) {
  if (a > b) return COMPARE.MORE;
  if (a < b) return COMPARE.LESS;
  return COMPARE.EQUAL;
}

module.exports = {
  COMPARE,
  defaultCompareFn,
}
