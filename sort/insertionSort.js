/**
 * 插入排序
 * 
 * 类似打扑克一样，
 * 每次拿到一张牌，就跟手中所有牌的最右一个比较，如果比最右小，就向左一张牌再进行比较
 * 依次类推，直到比某一张牌大的时候，就停下，放入该位置
 * 
 * 在原数组上修改，
 * 在某一待排序位置取值，存入temp
 * 与前面的值进行比较，若前值更大，则将前值右移一个位置
 * 
 * O(n^2)
 */
module.exports = insertionSort = arr => {

  for(let i=1; i<arr.length; i++) {
    let temp = arr[i];
    let preIndex = i - 1;
    while(preIndex >= 0 && arr[preIndex] > temp) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = temp;
  }

  return arr;
}
