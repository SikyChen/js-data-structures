const { divider } = require("../utils");
const bubbleSort = require("./bubbleSort");
const countingSort = require("./countingSort");
const insertionSort = require("./insertionSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quickSort");
const selectionSort = require("./selectionSort");

const originArray = [];
for(let i=0; i<10000; i++) {
  originArray.push(Math.floor(Math.random() * 10000));
}
const sortedArray = originArray.concat().sort((a, b) => a - b);

function inspector(sorter, printResult = false) {
  if (typeof sorter !== 'function') {
    return console.error('sorter 不是方法');
  }

  const originArrayTemp = originArray.concat();
  console.time('🏃 speed');
  const resultArray = sorter(originArrayTemp) || [];
  console.timeEnd('🏃 speed');

  if (printResult) {
    console.log('resultArray', resultArray);
  }

  if (resultArray.length !== originArrayTemp.length) {
    return console.error('排序结果有误');
  }

  for(let i=0; i<sortedArray.length; i++) {
    if (sortedArray[i] !== resultArray[i]) {
      return console.error(`❌ 在第 ${i} 位出现错误`);
    }
  }

  console.log('✅ 排序结果正确')
}

divider();
console.log('bubbleSort: ');
inspector(bubbleSort);

divider();
console.log('insertionSort: ');
inspector(insertionSort);

divider();
console.log('selectionSort: ');
inspector(selectionSort);

divider();
console.log('mergeSort: ');
inspector(mergeSort);

divider();
console.log('quickSort: ');
inspector(quickSort);

divider();
console.log('countingSort: ');
inspector(countingSort, true);
