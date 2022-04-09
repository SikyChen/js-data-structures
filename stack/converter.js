/**
 * Stack 类的一个应用：进制转换器
 */

const Stack = require("./stack-object");

/**
 * 十进制转二进制
 * 
 * 计算过程：
 * 1. 使用十进制数对2求余，结果是二进制数的最后一位
 * 2. 使用十进制数除以2然后取整，再用该整数对2求余，余数是二进制数的倒数第二位
 * 3. 循环1，2步骤
 * 
 * 可见，最先求出的结果是二进制数的最末位，使用栈存储每次求余的结果，然后按出栈顺序从前到后拼接的字符串就是结果
 * 刚好利用了栈的先进后出、后进先出的特点
 * @param {Number} decNumber 十进制的数字
 */
function decimalToBinary(decNumber) {
  if (isNaN(decNumber)) return new Error(`${decNumber} 不是一个数字`);

  if (decNumber === 0) return '0';

  const stack = new Stack();
  let num = decNumber;
  let base = 2;
  let rem;
  let binaryString = '';

  while (num > 0) {
    rem = num % base;
    stack.push(rem);
    num = Math.floor(num / base);
  }

  while (stack.size() > 0) {
    binaryString += stack.pop();
  }

  return binaryString;
}

exports.decimalToBinary = decimalToBinary;


/**
 * 转成 2~36 内的任意进制
 * @param {Number} decNumber 待转换的十进制数
 * @param {Number} base 2~36的任意进制，默认为2
 * @returns {String} base 转换后对应进制数的字符串
 */
function baseConverter(decNumber, base = 2) {
  if (base < 2 || base > 36) {
    console.error(`需要传入 2~36 以内的数`);
    return '';
  }

  if (decNumber === 0) return '0';

  let digits = '0123456789abcdefghijklmnopqrstuvwxyz';
  let stack = new Stack();
  let num = decNumber;
  let rem;
  let baseString = '';

  while(num > 0) {
    rem = Math.floor(num % base);
    stack.push(rem);
    num = Math.floor(num / base);
  }

  while(stack.size()) {
    baseString += digits[stack.pop()];
  }

  return baseString;
}

exports.baseConverter = baseConverter;
