/**
 * 迷宫老鼠问题
 * 
 * 回溯法
 * 
 * @param {Array[][]} maze 用于表示迷宫的二维数组
 */
function ratInMaze(maze, startX, startY, endX, endY, callback) {

  const findPath = (maze, x, y, from) => {

    if (maze[x] && maze[x][y] === 1) {
      
      if (maze[x][y] === 1) {
        maze[x][y] = 2;
        callback && callback(x, y, maze);
  
        if (x === endX && y === endY) {
          return true;
        }
    
        if (
          findPath(maze, x + 1, y, 1) ||
          findPath(maze, x - 1, y, 2) ||
          findPath(maze, x, y + 1, 3) ||
          findPath(maze, x, y - 1, 4)
        ) {
          return true;
        }
    
        maze[x][y] = 1;
        if (callback) {
          switch (from) {
            case 1:
              callback(x - 1, y, maze);
              break;
            case 2:
              callback(x + 1, y, maze);
              break;
            case 3:
              callback(x, y - 1, maze);
              break;
            case 4:
              callback(x, y + 1, maze);
              break;
          }
        }
        return false;
      }
    }
    
    return false;
  }

  if (findPath(maze, startX, startY)) {
    return maze;
  }
  return null;
}


// test
// test();
function test() {
  const maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1]
  ];
  console.log(ratInMaze(maze, 0, 0, 3, 3));
  
  const maze2 = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [0, 1, 0, 1, 1]
  ];
  console.log(ratInMaze(maze2, 0, 0, 4, 4, (x, y) => console.log(x, y)));
}
