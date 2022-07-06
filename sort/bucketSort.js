const insertionSort = require("./insertionSort");

/**
 * 桶排序
 * 
 * 将所有的数，分散到不同的桶中，分别排序之后（例如使用插入排序），再合到一起
 * 这是一种分布式排序算法（假如可以操作多个线程同时执行，那么速度会翻倍）
 * 
 * 关键是在分散到不同桶中的时候，需要让每个桶也有顺序，所以用商来区分桶
 * 
 * @param { Array } arr 待排序数组
 * @param { Number } bucketCount 桶的数量
 */
module.exports = bucketSort = (arr, bucketCount = 5) => {

  if (arr.length < 2) return arr;

  // 所有的桶
  const buckets = new Array(bucketCount).fill().map(() => []);

  let minValue = Infinity;
  let maxValue = -Infinity;
  arr.forEach(item => {
    if (item < minValue) {
      minValue = item;
    }
    if (item > maxValue) {
      maxValue = item;
    }
  })

  // 每个桶的分布元素区间的大小
  const bucketSize = Math.floor((maxValue - minValue) / bucketCount) + 1;

  // 将所有数放入不同的桶中
  arr.forEach(item => {
    bucketIndex = Math.floor((item - minValue) / bucketSize);
    buckets[bucketIndex].push(item);
  });

  // 对每个桶进行排序，然后结构到最终结果中
  const res = [];
  buckets.forEach(bucket => {
    res.push(...insertionSort(bucket));
  })

  return res;
}

// bucketSort([5,4,13,2,6,37,1,7,10,9,8,12,30,3,16])
