/**
 * 最长公共子序列 longestCommonSubsequence
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
 * 对于当前问题，需要注意的是
 * - 若 s1 和 s2 开头的第一个字符相同，则该字符一定在 lcs 当中
 */
function longestCommonSubsequence(s1, s2) {
  const M = s1.length;
  const N = s2.length;
  const dp = [];

  for(let m = 0; m <= M; m++) {
    dp[m] = [];
    for(let n = 0; n <= N; n++) {
      dp[m][n] = 0;
    }
  }

  for(let m = 1; m <= M; m++) {
    for(let n = 1; n <= N; n++) {
      // 此处判断中使用 s1[m - 1] 是因为有一个偏移量
      // 由于 dp[0][0] 已经设置为 base case 的 0 ，所以字符串的下标需要从 1 开始计算，即字符串的对应下标应该是 m - 1
      if (s1[m - 1] === s2[n - 1]) {
        dp[m][n] = 1 + dp[m - 1][n - 1];
      }
      else {
        dp[m][n] = Math.max(
          dp[m - 1][n],
          dp[m][n - 1],
        )
      }
    }
  }

  return dp[M][N];
}


// test
const s1 = 'acbaed',
  s2 = 'abcadf';

console.log('longestCommonSubsequence:', longestCommonSubsequence(s1, s2));
