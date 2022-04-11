const Queue = require("./queue");

/**
 * 击鼓传花游戏
 * 
 * 给定一个人员数组，和击鼓次数(击鼓次数每轮都是固定不变的)，每轮击鼓结束的一人被淘汰
 * 直到只剩最后一人胜利时结束
 */
function hotPotato(humanList, num) {
  if (!humanList.length) return null;
  if (humanList.length === 1) {
    return console.log(`胜利者是：${humanList[0]}`);
  }

  let queue = new Queue();

  queue.enqueue(...humanList);

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(queue.dequeue(), '被淘汰了！');
  }

  console.log(`胜利者是：${queue.dequeue()}`);
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
hotPotato(names, 7);
// Camila 被淘汰了！
// Jack 被淘汰了！
// Carl 被淘汰了！
// Ingrid 被淘汰了！
// 胜利者是：John