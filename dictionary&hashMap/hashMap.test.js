const { divider } = require("../utils");
const HashMap = require("./hashMap");

const hash = new HashMap();
console.log('hash', hash);
hash.set('Gandalf', 'gandalf@email.com');
hash.set('John', 'johnsnow@email.com');
hash.set('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');
console.log('hash', hash);
divider();

console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined 
divider();

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
console.log('hash', hash);
console.log('size', hash.size());
hash.print();
divider();

const hash2 = new HashMap();
hash2.set('Ygritte', 'ygritte@email.com');
hash2.set('Jonathan', 'jonathan@email.com');
hash2.set('Jamie', 'jamie@email.com');
hash2.set('Jack', 'jack@email.com');
hash2.set('Jasmine', 'jasmine@email.com');
hash2.set('Jake', 'jake@email.com');
hash2.set('Nathan', 'nathan@email.com');
hash2.set('Athelstan', 'athelstan@email.com');
hash2.set('Sue', 'sue@email.com');
hash2.set('Aethelwulf', 'aethelwulf@email.com');
hash2.set('Sargeras', 'sargeras@email.com'); 
hash2.print();
// {9 => [Ygritte: ygritte@email.com]},
// {10 => [Aethelwulf: aethelwulf@email.com]},
// {12 => [Athelstan: athelstan@email.com]},
// {13 => [Jasmine: jasmine@email.com]},
// {14 => [Jake: jake@email.com]},
// {15 => [Sargeras: sargeras@email.com]},
divider();
