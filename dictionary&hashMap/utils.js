exports.defaultToStringFn = function defaultToStringFn(item) {
  if (item === null) {
    return 'NULL';
  }
  if (typeof item === 'undefined') {
    return 'UNDEFINED';
  }
  if (typeof item === 'string') {
    return `string-${item}`;
  }
  if (typeof item === 'object') {
    return `${typeof item}-${JSON.stringify(item)}`;
  }
  if (typeof item.toString === 'function') {
    return `${typeof item}-${item.toString()}`;
  }
  return `${item}`;
}