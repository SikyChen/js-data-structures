require('./setBySet');

const set = new Set([1,2,3,4,5]);
const set1 = new Set([4,5,6,7,8]);
const set2 = new Set([1,2,3,4,5,6,7,8,9]);

console.log('union', set._union(set1));               // Set { 1, 2, 3, 4, 5, 6, 7, 8 }
console.log('intersection', set._intersection(set1)); // Set { 4, 5 }
console.log('difference', set._difference(set1));     // Set { 1, 2, 3 }
console.log('isSubsetOf 1', set._isSubsetOf(set1));   // false
console.log('isSubsetOf 2', set._isSubsetOf(set2));   // true
