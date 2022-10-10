/**
 * 解数独
 * 
 * 关键点也是 递归+回溯法
 * 
 * 思路
 * - 从前向后填写空的格子
 * - 每个格子从 1 开始尝试填入格子，然后递归下一个格子
 * - 假如下一个格子不能填入有效的值，那么将当前格子的值置空，改为 2 后重新递归下一个格子
 * - 以此类推
 * - base case 若所有格子都能有效填完，那么返回 true
 */
function solveSudoku(matrix) {

  let records = [];
  let count = 0;

  const res = backtrack(matrix, 0, 0);

  if (res) {
    let content = '';
    matrix.forEach(row => {
      content += row.join(' ') + '\n';
    })
    console.log(content);
    console.log('count', count);
    console.log('success');
    return records;
  }
  return 'faild';

  function backtrack(matrix, m, n) {

    // base case
    if (m >= matrix.length) {
      return true;
    }

    // 边界1 超过最后一列后，换行
    if (n >= matrix[m].length) {
      return backtrack(matrix, m + 1, 0);
    }

    // 边界2 如果当前位置有数字，则填写下一个位置
    if (matrix[m][n] !== 0) {
      return backtrack(matrix, m, n + 1);
    }

    // 递归 + 回溯
    for (let i = 1; i <= 9; i++) {

      if (isValid(m, n, i)) {
        matrix[m][n] = i;
        records.push(JSON.parse(JSON.stringify(matrix)));
        count++;

        if (backtrack(matrix, m, n + 1)) {
          return true;
        }

        matrix[m][n] = 0;
        records.push(JSON.parse(JSON.stringify(matrix)));
      }

    }

    return false;
  }

  function isValid(m, n, i) {

    for (let k = 1; k <= 9; k++) {
      // 检查当前行是否有 i
      if (matrix[m][k - 1] === i) {
        return false;
      }

      // 检查当前列是否有 i
      if (matrix[k - 1][n] === i) {
        return false;
      }

      // 检查当前3*3方框是否存在 i
      //  5 * 4
      //  3*3 -> 5*5
      if (matrix[m - (m % 3) + Math.floor((k - 1) / 3)][n - (n % 3) + (k - 1) % 3] === i) {
        return false;
      }

    }

    return true;
  }

}


// test
test();
function test() {
  const sudokuGrid = [
    // [5, 3, 0, 0, 7, 0, 0, 0, 0],
    // [6, 0, 0, 1, 9, 5, 0, 0, 0],
    // [0, 9, 8, 0, 0, 0, 0, 6, 0],
    // [8, 0, 0, 0, 6, 0, 0, 0, 3],
    // [4, 0, 0, 8, 0, 3, 0, 0, 1],
    // [7, 0, 0, 0, 2, 0, 0, 0, 6],
    // [0, 6, 0, 0, 0, 0, 2, 8, 0],
    // [0, 0, 0, 4, 1, 9, 0, 0, 5],
    // [0, 0, 0, 0, 8, 0, 0, 7, 9]

    [0, 0, 2, 1, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 8, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 7, 0, 0],
    [0, 0, 7, 0, 0, 0, 3, 0, 0]

    // [0, 6, 0, 1, 7, 0, 0, 0, 0],
    // [0, 0, 4, 8, 0, 0, 0, 0, 6],
    // [0, 8, 0, 2, 0, 4, 0, 0, 0],
    // [0, 0, 8, 0, 0, 0, 1, 2, 4],
    // [0, 2, 0, 0, 0, 0, 3, 9, 0],
    // [1, 0, 3, 9, 2, 0, 0, 0, 0],
    // [6, 0, 2, 0, 0, 0, 0, 0, 9],
    // [4, 0, 0, 0, 0, 0, 2, 0, 0],
    // [0, 5, 0, 3, 9, 0, 0, 6, 0],
  ];

  solveSudoku(sudokuGrid);
}
