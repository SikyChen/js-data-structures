const { defaultCompareFn, COMPARE } = require("../utils/compare");

/**
 * 堆排序方法
 */
function heapSort(array, compareFn = defaultCompareFn) {
  buildMaxHeap(array, compareFn);

  let index = array.length - 1;
  while (index > 0) {
    swap(array, 0, index);
    index--;
    heapify(array, 0, index, compareFn);
  }

  return array;
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length - 1, compareFn);
  }
}

function heapify(array, begin, end, compareFn) {
  let index = begin;
  let leftIndex = getLeftIndex(index);
  let rightIndex = getRightIndex(index);

  if (
    (leftIndex <= end && compareFn(array[index], array[leftIndex]) === COMPARE.LESS) ||
    (rightIndex <= end && compareFn(array[index], array[rightIndex]) === COMPARE.LESS)
  ) {
    if (rightIndex <= end && compareFn(array[rightIndex], array[leftIndex]) === COMPARE.MORE) {
      swap(array, index, rightIndex);
      heapify(array, rightIndex, end, compareFn);
    }
    else {
      swap(array, index, leftIndex);
      heapify(array, leftIndex, end, compareFn);
    }
  }
}

function getLeftIndex(index) {
  return index * 2 + 1;
}

function getRightIndex(index) {
  return index * 2 + 2;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

// TEST
const array = [7, 6, 3, 5, 4, 1, 2];
heapSort(array);
console.log('max heap sort', array);
heapSort(array, (a, b) => defaultCompareFn(b, a));
console.log('min heap sort', array);
