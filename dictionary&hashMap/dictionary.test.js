const { divider } = require('./../utils');
const Dictionary = require("./dictionary");

const dict = new Dictionary();
dict.set();
dict.set(1, 1);
dict.set('2', 2);
dict.set(false, function () { return false });
dict.set({ a: 1 }, { a: 1, b: 2, c: 3 });
dict.set('1', 3);
dict.set('2', 4);
console.log(dict.table);
console.log('hasKey number 2', dict.hasKey(2));
console.log('hasKey string 2', dict.hasKey('2'));
console.log('keyValues', dict.keyValues());
console.log('keys', dict.keys());
console.log('values', dict.values());
divider();

console.log('remove string 2', dict.remove('2'));
console.log('hasKey string 2', dict.hasKey('2'));
divider();

console.log('get string 2', dict.get('2'));
console.log('get string 1', dict.get('1'));
console.log('get { a: 1 }', dict.get({ a: 1 }));
divider();

console.log('clear', dict.clear());
console.log('get string 1', dict.get('1'));
console.log('isEmpty', dict.isEmpty());
divider();

dict.set(1, 1);
dict.set(2, 2);
dict.set(3, 3);
dict.set(4, 4);
console.log('size', dict.size());
console.log('isEmpty', dict.isEmpty());
console.log('keyValues', dict.keyValues());
console.log('keys', dict.keys());
console.log('values', dict.values());
divider();

dict.forEach((key, value) => {
  console.log(1, key, value);
  return true;
});
dict.forEach((key, value) => {
  console.log(2, key, value);
  if (key === 2) return false;
  return true;
})
divider();
