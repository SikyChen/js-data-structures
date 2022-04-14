const { divider } = require('./../utils');
const Set = require("./set");

const set = new Set([1,2,3]);
set.print();
console.log('has 1:', set.has(1));
console.log('has 2:', set.has(2));
console.log('has 3:', set.has(3));
console.log('has 4:', set.has(4));
console.log('size:', set.size());
divider();

set.add(4);
set.add(4);
set.add(5);
set.add(6);
set.print();
console.log('has 5:', set.has(5));
console.log('size:', set.size());
divider();

console.log('delete 1:', set.delete(1));
set.print();
console.log('delete 6:', set.delete(6));
set.print();
console.log('delete 3:', set.delete(3));
set.print();
divider();

set.clear();
set.print();
console.log('has 2:', set.has(2));
divider();

const set1 = new Set([1,2,3,4]);
const set2 = new Set([3,4,5,6,7]);
const set3 = new Set([1,2,3,4,5,6,7,8]);
set1.print();
set2.print();
set3.print();

console.log('union:')
set1.union(set2).print();
set1.union(set3).print();

console.log('intersection:')
set1.intersection(set2).print();
set1.intersection(set3).print();

console.log('difference:')
set1.difference(set2).print();
set1.difference(set3).print();

console.log('set1 isSubsetOf set2', set1.isSubsetOf(set2));
console.log('set1 isSubsetOf set3', set1.isSubsetOf(set3));
