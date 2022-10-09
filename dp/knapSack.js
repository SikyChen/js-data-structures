

/**
 * 背包问题
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
 * 这里之所以用 dp[N][W] 的二维数组，就是为了将所有的「前 N 个物品，装入容量为 W 的背包中的最大价值」穷举出来，再通过比较得出最大值
 * 
 * 通过以上可以得出伪代码如下：
 * 
 * ``` js
 * dp[0][..] = 0;
 * dp[..][0] = 0;
 * 
 * for(let i=1; i<=N; i++) {
 *   for(let w=1; w<=W; w++) {
 *     dp[i][w] = max(
 *       选择1：将 i 放入背包中,
 *       选择2：不将 i 放入背包中,
 *     )
 *   }
 * }
 * ```
 * 
 * @param {Number} capacity 背包的容量
 * @param {Array} weights 物品重量的集合，如 [2,3,4]
 * @param {Array} values 物品价值的结合，如 [3,4,5]
 * @param {Number} n 物品的数量，其实也是前面 weights 和 values 的数组长度
 */
function knapSack(W, N, weights, values) {

  // 两个状态，所以是二维数组
  // 根据 base case 填充默认值为 0
  let dp = [];
  for (let i = 0; i <= N; i++) {
    dp[i] = [];
    for (let w = 0; w <= W; w++) {
      dp[i][w] = 0;
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      // 若当前物品重量，比背包剩余容量大，那么当前物品就不可以再放入背包了
      if (w - weights[i - 1] < 0) {
        dp[i][w] = dp[i - 1][w];
      }
      else {
        dp[i][w] = Math.max(
          // 选择1：将 i 放入背包中,
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          // 选择2：不将 i 放入背包中,
          dp[i - 1][w],
        );
      }
    }
  }

  // 找出装入背包的物品
  let i = N;
  let w = W;
  while (i > 0 && w > 0) {
    if (dp[i][w] != dp[i - 1][w]) {
      console.log(`装入了第${i}个物品，重量为${weights[i - 1]}，价值为${values[i - 1]};`);
      i--;
      w -= weights[i - 1];
    }
    else {
      i--;
    }
  }

  return dp[N][W];
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
