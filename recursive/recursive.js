/**
 * 递归
 * 
 * 1. 函数内部直接调用自身
 * 2. 函数内部间接调用自身
 * 3. 基线条件 Base case
 */

/**
 * 1. 直接调用自身
 * - 无 Base case ，会溢出
*/
function recursiveFunction(params) {
  recursiveFunction(params);
}

/**
 * 2. 间接调用自身
 * - 无 Base case ，会溢出
 */
function recursiveFunction1(params) {
  recursiveFunction2(params);
}
function recursiveFunction2(params) {
  recursiveFunction1(params);
}

/**
 * 3. 基线条件 Base case
 * - 使用基线条件作为停止点，以防无止境递归
 */
function understandRecursion(doIunderstandRecursion) {
  const answer = confirm('Do I understand?');
  // 基线条件：当为 true 时，停止递归
  if (answer === true) {
    return true;
  }

  // 否则继续递归调用
  understandRecursion(answer);
}
