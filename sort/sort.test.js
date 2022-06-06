const bubbleSort = require("./bubbleSort");

const originArray = [];
for(let i=0; i<100; i++) {
  originArray.push(Math.floor(Math.random() * 1000));
}
const sortedArray = originArray.concat().sort((a, b) => a - b);
console.log('sortedArray')

function inspector(sorter) {
  if (typeof sorter !== 'function') {
    return console.error('sorter 不是方法');
  }

  const originArrayTemp = originArray.concat();
  console.time('speed');
  const resultArray = sorter(originArrayTemp) || [];console.log(4444)
  console.timeEnd('speed');

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

inspector(bubbleSort);
