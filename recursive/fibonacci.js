/**
 * 斐波那契数列
 * - 0 1 1 2 3 5 8 13 21 34 55
 * 
 * 特点：
 * 1. 第 0 位是 0
 * 2. 第 1 位是 1
 * 3. 从第 2 位开始，每个位置上的数，都是前两位上的数之和(如：5=3+2)
 */

/** 求斐波那契数列第n位的数 迭代法 */
function fibonacciIterative(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let pre1 = 0;
  let pre2 = 1;
  let cur = 1;

  for(let i=2; i<=n; i++) {
    cur = pre2 + pre1;
    pre1 = pre2;
    pre2 = cur;
  }

  return cur;
}

/**
 * 求斐波那契数列第n位的数 递归法
 */
function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  return fibonacciRecursive(n-1) + fibonacciIterative(n-2);
}

/**
 * 求斐波那契数列第n位的数 递归法
 * 
 *                f(5)
 *         f(3)     +     f(4)
 *   f(1)  +  f(2)     f(2)  +  f(3)
 *                            f(1) + f(2)
 * 
 * 由图示分析可知，在计算 f(5) 的时候，递归重复计算了两次 f(3)，
 * 如果把 f(3) 的结果缓存，那么就会节省很多重复计算
 * 
 * 记忆法优化
 */
function fibonacciMemoization(n) {
  let memo = [0, 1];

  function process(n) {
    if (memo[n] === undefined) {
      memo[n] = process(n-1) + process(n-2);
    }
    return memo[n];
  }
  
  return process(n);
}


// TEST
console.log('fibonacciIterative(50)', fibonacciIterative(50));
console.log('fibonacciRecursive(50)', fibonacciRecursive(50));
console.log('fibonacciMemoization(50)', fibonacciMemoization(50));

// 当 n 比较大的时候，单纯的递归法耗时会更明显
// 相反当 n 比较小的时候，单纯的递归法反而快一点
console.time('fibonacciIterative')
fibonacciIterative(3000);
console.timeEnd('fibonacciIterative')
console.time('fibonacciRecursive')
fibonacciRecursive(3000);
console.timeEnd('fibonacciRecursive')
console.time('fibonacciMemoization')
fibonacciMemoization(3000);
console.timeEnd('fibonacciMemoization')
