/**
 * 选择排序
 * 
 * 比较暴力的排序方法：
 * 1. 遍历第一次，找到最小值，放在第一个位置
 * 2. 遍历第二次，找到最小值，放在第二个位置
 * ...
 * 
 * O(n^2)
 */
module.exports = selectionSort = arr => {
  
  for(let i=0; i<arr.length; i++) {
    let minIndex = i;
    for(let j=i; j<arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}
