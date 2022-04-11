const Deque = require("./deque");

/**
 * 回文检查器
 * 
 * 使用双端队列，即分别从头部和尾部取出一个字符进行比较，如果一直相同则为回文，否则返回false
 * 
 * @param {String} str 待检查的字符串
 * @returns {Boolean} 是否为回文
 */
function palindromeChecker(str) {
  if (!str) return false;

  const deque = new Deque();
  deque.enqueue(...str.toLocaleLowerCase().split(' ').join('').split(''));

  while(deque.size() > 1) {
    const head = deque.dequeue();
    const tail = deque.pop();
    if (head !== tail) {
      return false;
    }
  }

  return true;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
console.log('I am not a palindrome', palindromeChecker('I am not a palindrome'));
