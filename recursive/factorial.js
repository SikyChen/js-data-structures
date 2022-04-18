/**
 * n 的阶乘
 * 
 * n * (n-1) * (n-2) * ... * 3 * 2 * 1
 * 
 * - 迭代法
 */
function factorialIterative(n) {
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
}

/**
 * n 的阶乘
 * - 递归法
 */
function factorial(n) {
  console.trace()
  // 基线条件 Base case
  if (n === 1 || n === 0) {
    return 1;
  }

  // 递归调用
  return n * factorial(n - 1);
}

// TEST
factorialIterative(5);    // 120
factorial(5);             // 120

/**
 * 调用栈
 * stack []
 * 
 * factorial(5)
 * > stack [5]
 * 
 * factorial(4)
 * > stack [5, 4]
 * 
 * factorial(3)
 * > stack [5, 4, 3]
 * 
 * 
 * factorial(2)
 * > stack [5, 4, 3, 2]
 * 
 * 
 * factorial(1)
 * > stack [5, 4, 3, 2, 1]
 * 
 */
