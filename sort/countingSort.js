/**
 * 计数排序
 * 
 * 只能排序由正整数组成的数组
 * 声明一个临时数组，将每个数出现的次数，以该数作为下标存在临时数组中
 * 然后遍历临时数组，按次数将下标对应的数存入结果数组中即可
 * 
 * 不用通过比较进行排序的方法
 */
module.exports = countingSort = arr => {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (!temp[arr[i]]) {
      temp[arr[i]] = 1;
    }
    else {
      temp[arr[i]]++;
    }
  }

  for (let i = 0, k = 0; i < temp.length;) {
    if (temp[i] && temp[i] > 0) {
      arr[k] = i;
      temp[i]--;
      k++;
    }
    else {
      i++;
    }
  }

  return arr;
}
