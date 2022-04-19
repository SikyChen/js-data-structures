const { divider } = require("../utils");
const HashMapSeparateChaining = require("./hashMapSeparateChaining");

const hash = new HashMapSeparateChaining();
console.log('hash', hash);
hash.set('Gandalf', 'gandalf@email.com');
hash.set('John', 'johnsnow@email.com');
hash.set('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');
console.log('hash', hash);
divider();

console.log('get', hash.get('Gandalf')); // gandalf@email.com
console.log('get', hash.get('Loiane')); // undefined 
divider();

console.log('remove', hash.remove('Gandalf'));
console.log('get', hash.get('Gandalf'));
console.log('hash', hash);
console.log('size', hash.size());
hash.print();
divider();

const hash2 = new HashMapSeparateChaining();
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
// {10 => [Jonathan: jonathan@email.com],[Jamie: jamie@email.com],[Sue: sue@email.com],[Aethelwulf: aethelwulf@email.com]},
// {12 => [Jack: jack@email.com],[Athelstan: athelstan@email.com]},
// {13 => [Jasmine: jasmine@email.com]},
// {14 => [Jake: jake@email.com]},
// {15 => [Nathan: nathan@email.com],[Sargeras: sargeras@email.com]}
divider();

console.log('remove', hash2.remove('Jamie'));
console.log('remove', hash2.remove('Nathan'));
console.log('get', hash2.get('Sue'));
console.log('get', hash2.get('Jamie'));
hash2.print();
// {9 => [Ygritte: ygritte@email.com]},
// {10 => [Jonathan: jonathan@email.com],[Sue: sue@email.com],[Aethelwulf: aethelwulf@email.com]},
// {12 => [Jack: jack@email.com],[Athelstan: athelstan@email.com]},
// {13 => [Jasmine: jasmine@email.com]},
// {14 => [Jake: jake@email.com]},
// {15 => [Sargeras: sargeras@email.com]}
divider();
