

/**
 * 背包问题，递归解法
 * 
 * - 求最值
 * - 穷举法
 * 
 * 对于动态规划问题，要明确以下几点
 * - 【状态】当前题目，变化的状态是： 1. 可选的前(后) N 个物品； 2. 背包的剩余容量 W
 * - 【选择】到某一个物品 i ： 1. 将 i 放入背包中； 2. 不将 i 放入背包中
 * - 【dp函数/数组的定义】要求的是 前 N 个物品，装入容量为 W 的背包中，最大价值是多少：即 dp[N][W]
 * - 【base case】： 1. dp[0][..] = 0; 2. dp[..][0] = 0; 
 * 
 * @param {Number} capacity 背包的容量
 * @param {Array} weights 物品重量的集合，如 [2,3,4]
 * @param {Array} values 物品价值的结合，如 [3,4,5]
 * @param {Number} n 物品的数量，其实也是前面 weights 和 values 的数组长度
 */
function knapSack(W, N, weights, values) {
  // base case
  if (W <= 0) return 0;
  if (N <= 0) return 0;

  // 如果当前物品重量，大于背包容量，那么只能选择不将 i 放入背包中
  if (W - weights[N - 1] < 0) {
    return knapSack(W, N - 1, weights, values);;
  }

  // 将第 i 个放入背包中，最大价值
  const hasN = knapSack(W - weights[N - 1], N - 1, weights, values) + values[N - 1];
  // 不将第 i 放入背包中，最大价值
  const hasNoN = knapSack(W, N - 1, weights, values);

  return Math.max(
    hasN,
    hasNoN,
  )
}

// test
// const values = [3, 4, 5],
//   weights = [2, 3, 4],
//   W = 5,
//   N = values.length;
const values = [6, 3, 5, 4, 6],
  weights = [2, 2, 6, 5, 4],
  W = 10,
  N = values.length;
console.log('总价值：', knapSack(W, N, weights, values));
