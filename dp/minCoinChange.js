/**
 * 最小硬币找零问题
 * 
 * 动态规划
 * - 动态规划的思想是把一个复杂问题分解为多个子问题，通过解决一个个子问题，再把子问题合并比较，从而解决复杂问题的思想（跟分治法不同的地方是，分治法的子问题之间，不做相互比较合并）
 * - 爬楼梯问题就是经典的动态规划算法
 * 
 * 思路
 * - 硬币面额集合 [1,5,10,25]
 * - 面额总值 36
 * - 取第一个硬币是 1 美分，则只需求出 35 美分的最小硬币集合，在加上 1 美分即可，res 即 [1, ...minCoinChange(coins, 35)]
 * - 取第一个硬币是 5 美分，则只需求出 31 美分的最小硬币集合，再加上 5 美分即可，res 即 [5, ...minCoinChange(coins, 31)]
 * - 依次类推，再对比哪个集合的长度更小，说明是最小硬币数集合
 * 
 * @param {Array} coins 硬币类型集合，例如 [1,5,10,25]
 * @param {Number} amount 硬币面额总值，例如 36分
 */
function minCoinChange(coins, amount) {
  const cache = {};

  const process = value => {
    if (value <= 0) return [];

    if (cache[value]) {
      return cache[value];
    }

    let min = [];

    coins.forEach(coin => {
      const newValue = value - coin;

      // 如果使用当前硬币，刚好完成总数
      if (newValue === 0) {
        min = [coin];
      }

      // 如果使用当前硬币后，还未完成总数
      else if (newValue > 0) {
        const newMin = process(newValue);

        // 由于还需要更多硬币，所以 newMin 中必须有硬币，才是有效的
        if (
          newMin.length &&
          (!min.length || (newMin.length + 1 < min.length))
        ) {
          min = [coin].concat(newMin);
        }
      }
    });

    cache[value] = min;

    return min;
  }

  return process(amount)
}

/**
 * 最小硬币找零问题
 * 
 * 贪心算法
 * - 贪心算法是指在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，只做出在某种意义上的局部最优解
 * - 贪心算法是对动态规划的穷举法的优化，优化点就是贪心的点，此处贪的是更大的面值，因为更大面值代表更少的硬币数
 * - 即 每次递归的遍历，都是从小于当前需求值的最大面值开始遍历，从大到小遍历
 * 
 * 贪心的问题
 * - 贪心是局部最优解，但局部最优解求出的结果，不一定是全局最优解
 * - 若仅仅贪图大面值，可能会造成的问题，如 [5,4,1] 12 中
 * - 取 5 余 7
 * - 再取 5 余 2
 * - 再取 1 余 1
 * - 再取 1 余 0
 * - 共 4 个硬币
 * - 但其实 4,4,4 才是更少的结果
 * - 所以在使用局部最优解求值后，还是需要进行一个全局的对比，来获得全局最优解
 * - 即 将 5 开头的硬币按从大到小取一遍，然后再以 4 开头从大到小取一遍，对比后再求最优解
 * 
 * 思路
 * - 硬币面额集合 [1,5,10,25]
 * - 面额总值 36
 * - 从大到小取硬币，先拿出 25，求 11 的最小硬币找零问题
 * - 再拿出 10 ，求 1 的最小硬币找零问题
 * - 再拿出 1
 * 
 * - 硬币面额集合 [5,3,2]
 * - 面额总值 9
 * - 先拿出 5， 求 4
 * 
 * - 拿出 3， 求 1
 * - 无解， 返回 []
 * 
 * - 拿出 2，求 2
 * - 拿出 2，余 0，方法可行
 * 
 * @param {Array} coins 硬币类型集合，例如 [1,5,10,25]
 * @param {Number} amount 硬币面额总值，例如 36分
 */
function minCoinChange1(coins, amount) {
  const cache = {};
  coins = coins.sort((a, b) => b - a);

  const process = (coins, amount) => {
    if (amount <= 0) return [];

    if (cache[amount]) {
      return cache[amount];
    }

    let min = [];

    coins.forEach(coin => {
      const restAmount = amount - coin;
  
      if (restAmount === 0) {
        min = [coin];
      }
      else if (restAmount > 0) {
        let restCoins = restAmount >= coin ? coins : coins.slice(1);
        let newMin = process(restCoins, restAmount);
  
        if (
          newMin.length &&
          (!min.length || (newMin.length + 1 < min.length))
        ) {
          min = [coin, ...newMin];
        }
      }
    });

    return min;
  }

  return process(coins, amount);
}


// test
let coins = [5, 4, 1];
let amount = 12;
console.log('minCoinChange: ', minCoinChange(coins, amount));
console.log('minCoinChange1: ', minCoinChange1(coins, amount));
