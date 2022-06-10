/**
 * 冒泡 算法
 * 
 * 遍历比较相邻的两个元素，将大的元素交换到后面的位置。
 * 这样比较一轮之后，最大的数会被移到最后的位置；
 * 
 * 从头再次进行遍历比较，会将剩余元素的最大值交换到倒数第二的位置。
 * 
 * 依次类推，得到从小到大的顺序
 * 
 * O(n^2)
 */
module.exports = bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}