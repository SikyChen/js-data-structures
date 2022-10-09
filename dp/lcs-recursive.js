/**
 * 最长公共子序列 递归解法
 * 
 * 子序列的意思就是，只关注字符的顺序，而不必在意是否连续
 * 
 * - 求最值
 * - 穷举法
 * 
 * 对于动态规划问题，要明确以下几点
 * - 【状态】当前题目，变化的状态是： 1. 字符串s1的第m个字符； 2. 字符串s2的第n个字符
 * - 【选择】到某一字符m或n时 ： 1. 选择将 n 和 n 作为最长子序列的字符； 2. 不选择 n 作为最长子序列的字符； 3. 不选择 m 作为最长子序列的字符
 * - 【dp函数/数组的定义】求的是「s1 的前 m 个字符」和「s2 的前 n 个字符」的最长公共子序列是多少：即 dp[m][n]
 * - 【base case】： 1. dp[0][..] = 0; 2. dp[..][0] = 0; 
 * 
 * 由于递归法从前向后递归，则dp定义需要改为：
 * - 「s1 从第 m 个字符到最后的所有字符」和「s2 的从 n 到最后的所有字符」的最长公共子序列是多少
 * 
 * 对于当前问题，需要注意的是
 * - 若 s1 和 s2 开头的第一个字符相同，则该字符一定在 lcs 当中
 */
function longestCommonSubsequence(s1, s2) {
  
  const process = (s1, m, s2, n) => {
    // base case
    if (m === s1.length) return 0;
    if (n === s2.length) return 0;

    if (s1[m - 1] === s2[n - 1]) {
      return 1 + process(s1, m + 1, s2, n + 1);
    }

    const hasNoM = process(s1, m + 1, s2, n);
    const hasNoN = process(s1, m, s2, n + 1);

    return Math.max(hasNoM, hasNoN);
  }

  return process(s1, 0, s2, 0);
}


// test
const s1 = 'acbaed',
  s2 = 'abcadf';

console.log('longestCommonSubsequence:', longestCommonSubsequence(s1, s2));
