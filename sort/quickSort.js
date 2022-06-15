/**
 * 快速排序
 * 
 * 1. 先 patition 数组，将数组分为 小于p 等于p 大于p 三部分
 * 2. 对左右两部分 patition ，不停递归直到只有一个数元素无法继续 patition 为止
 */
module.exports = quickSort = arr => {

  sort(arr, 0, arr.length - 1);
  return arr;

  function sort(arr, start, end) {
    if (start < end) {
      const [left, right] = patition(arr, start, end);
      sort(arr, start, left - 1);
      sort(arr, right + 1, end);
    }
  }

  function patition(arr, start, end) {
    let left = start;
    let right = end;
    let index = start;
    let p = arr[start + Math.floor((end - start) / 2)];

    while(index <= right) {
      if (arr[index] < p) {
        swap(arr, index, left);
        index++;
        left++;
      }
      else if (arr[index] > p) {
        swap(arr, index, right);
        right--;
      }
      else {
        index++;
      }
    }

    return [left, right];
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
  }
}
