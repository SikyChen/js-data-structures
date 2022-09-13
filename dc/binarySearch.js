/**
 * 分治 divide and conquer
 */

/**
 * 二分搜索
 */
function binarySearch(arr, n) {
  arr.sort((a, b) => a - b);

  return binarySearchRecursive(arr, n, 0, arr.length - 1);
}

function binarySearchRecursive(arr, n, low, high) {
  if (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] < n) {
      return binarySearchRecursive(arr, n, mid + 1, high);
    }
    else if (arr[mid] > n) {
      return binarySearchRecursive(arr, n, low, mid - 1);
    }
    else {
      return mid;
    }
  }

  return -1;
}

// 二分搜索迭代法
function binarySearchByLoop(arr, n) {
  arr.sort((a, b) => a - b);

  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] < n) {
      low = mid + 1;
    }
    else if (arr[mid] > n) {
      high = mid - 1;
    }
    else {
      return mid;
    }
  }

  return -1;
}

// test
let arr = [2, 8, 10, 6, 1, 5, 3, 4, 7, 9];
console.log('binarySearch', binarySearch(arr, 1));
console.log('binarySearchByLoop', binarySearchByLoop(arr, 1));
