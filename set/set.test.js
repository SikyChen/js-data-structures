const { divider } = require('./../utils');
const Set = require("./set");

const set = new Set([1,2,3]);
set.print();
divider();

set.add(4);
set.add(5);
set.add(6);
set.print();
console.log('has 4:', set.has(4));
console.log('has 5:', set.has(5));
console.log('has 6:', set.has(6));
divider();

console.log('delete 1:', set.delete(1));
set.print();
console.log('delete 6:', set.delete(6));
set.print();
console.log('delete 3:', set.delete(3));
set.print();
