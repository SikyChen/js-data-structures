/**
 * 洗牌算法
 * 
 * 这是一种随机排序算法，是将已有的数组打乱顺序
 * 
 * 原理是从最后一位开始遍历，每个数字跟前面任意位置的数字进行交换，直到遍历结束
 */
module.exports = shuffle = arr => {
  for(let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
}

// 测试代码
console.log(shuffle([1,2,3,4,5,6,7,8,9,10]));
