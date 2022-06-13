/**
 * 归并排序
 * 
 * 分治法，递归
 * 
 * 1. 将数组二分为两个数组，递归拆分直到最小数组只有一个元素
 * 2. 合并，将两个数组从左到右依次取值放入临时数组，产生一个新的有序数组
 * 3. 合并直到最后一个大数组
 * 
 * O(n log n)
 */
module.exports = mergeSort = (arr, start = 0, end = arr.length - 1) => {
  let temp = [];
  sort(start, end);
  return arr;

  function sort(start, end) {
    if (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      sort(start, mid);
      sort(mid + 1, end);
      merge(start, mid, end);
    }
  }

  function merge(start, mid, end) {
    let l = start;
    let r = mid + 1;
    temp = [];

    while(l <= mid && r <= end) {
      if (arr[l] <= arr[r]) {
        temp.push(arr[l]);
        l++;
      }
      else {
        temp.push(arr[r]);
        r++;
      }
    }

    while(l <= mid) {
      temp.push(arr[l]);
      l++;
    }

    while(r <= end) {
      temp.push(arr[r]);
      r++;
    }

    l = start;
    r = 0;
    while (r < temp.length) {
      arr[l] = temp[r];
      l++;
      r++;
    }
  }
}