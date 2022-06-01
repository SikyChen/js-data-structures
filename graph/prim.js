/**
 * Prim 算法（P算法）
 * 
 * 邻接表的实现
 * 
 * 求解有权无向连通图的最小生成树。在图中，每个顶点可能被多条边连通，使用的边的权重之和如果最小，则成为最小生成树
 * 
 * 有权、无向、贪心
 * 
 * 一个用邻接表表示的有权无向图如下
 * 
 * A -> B(2) C(4)
 * B -> A(2) C(2) D(4) E(2)
 * C -> A(4) B(2) E(3)
 * D -> B(4) E(3) F(2)
 * E -> B(2) C(3) D(3) F(2)
 * F -> D(2) E(2)
 * 
 * 跟 K 算法不同， P 算法是从顶点出发。由于是连通图，所有点都是连接的，所以从任一点出发都可以，我们从 A 点出发
 * 过程中需要记录两项数据
 * 1. 每个顶点的前置顶点
 * 2. 每个顶点与其前置顶点的距离
 * 3. 已处理完成的顶点
 * 
 * 过程如下：
 * 1. 初始化前置顶点和距离为无穷大
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    -  -  -  -  -  -
 *    前置    -  -  -  -  -  -
 *    已访问顶点 []
 * 
 * 2. 从 A 出发，则其前置顶点无，距离0
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    0  -  -  -  -  -
 *    前置    -  -  -  -  -  -
 *    已访问顶点 []
 * 
 * 3. 遍历所有未处理的顶点，找到距离最小的一个，找到了 A
 * 4. 找到 A 的所有相邻顶点（未处理完成的），若与 A 距离小于它所记录的最小距离，则记录它与 A 的距离
 * 5. 将 A 记录为已处理完成
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    0  2  4  -  -  -
 *    前置    -  A  A  -  -  -
 *    已访问顶点 [A]
 * 
 * 6. 重复 3、4、5
 * 
 * 3. 遍历所有未处理的顶点，找到距离最小的一个，找到了 B
 * 4. 找到 B 的所有相邻顶点（未处理完成的），若与 B 距离小于它所记录的最小距离，则记录它与 B 的距离
 *    （此时 C 记录的距离是 4，BC 距离为 2，则改为记录 2 且修改前置节点为 B）
 * 5. 将 B 记录为已处理完成
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    0  2  2  4  2  -
 *    前置    -  A  B  B  B  -
 *    已访问顶点 [A, B]
 * 
 * 6. 重复 3、4、5
 * 
 * 3. 遍历所有未处理的顶点，找到距离最小的一个，找到了 C 和 E，使用 E 来分析
 * 4. 找到 E 的所有相邻顶点（未处理完成的），若与 E 距离小于它所记录的最小距离，则记录它与 E 的距离
 *    （此时 D 记录的距离是 4，ED 距离为 3，则改为记录 3 且修改前置节点为 E）
 * 5. 将 E 记录为已处理完成
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    0  2  2  3  2  2
 *    前置    -  A  B  E  B  E
 *    已访问顶点 [A, B, E]
 * 
 * 3. 遍历所有未处理的顶点，找到距离最小的一个，找到了 C 和 F，使用 F 来分析
 * 4. 找到 F 的所有相邻顶点（未处理完成的），若与 F 距离小于它所记录的最小距离，则记录它与 F 的距离
 *    （此时 D 记录的距离是 3，FD 距离为 2，则改为记录 2 且修改前置节点为 F）
 * 5. 将 F 记录为已处理完成
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    0  2  2  2  2  2
 *    前置    -  A  B  F  B  E
 *    已访问顶点 [A, B, E, F]
 * 
 * 3. 遍历所有未处理的顶点，找到距离最小的一个，找到了 C 和 D，使用 C 来分析
 * 4. 找到 C 的所有相邻顶点（未处理完成的），若与 C 距离小于它所记录的最小距离，则记录它与 C 的距离
 *    （与 C 相邻的 A B E 顶点，距离都没有比所记录的距离小，所以不做修改）
 * 5. 将 C 记录为已处理完成
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    0  2  2  2  2  2
 *    前置    -  A  B  F  B  E
 *    已访问顶点 [A, B, E, F, C]
 * 
 * 3. 遍历所有未处理的顶点，找到距离最小的一个，找到了 D （只剩 D 了）
 * 4. 找到 D 的所有相邻顶点（未处理完成的），若与 D 距离小于它所记录的最小距离，则记录它与 D 的距离
 *    （与 D 相邻的 B E F 顶点，距离都没有比所记录的距离小，所以不做修改）
 * 5. 将 D 记录为已处理完成
 * 
 *    顶点    A  B  C  D  E  F
 *    距离    0  2  2  2  2  2
 *    前置    -  A  B  F  B  E
 *    已访问顶点 [A, B, E, F, C, D]
 * 
 * 7. 所有顶点遍历完成，输出每个顶点的前置顶点和距离如下
 * A - B  2
 * B - C  2
 * F - D  2
 * B - E  2
 * E - F  2
 * 转为下标显示即
 * 0 - 1  2
 * 1 - 2  2
 * 5 - 3  2
 * 1 - 4  2
 * 4 - 5  2
 * 跟预期一致
 * 
 * 8. 输出新的邻接表图
 * A -> B(2)
 * B -> C(2)
 * F -> D(2)
 * B -> E(2)
 * E -> F(2)
 * 
 */
module.exports = prim = (graph, Graph) => {
  if (graph.isDirected) {
    return new Error('kruskal 算法只支持无向图');
  }

  const adjList = graph.adjList;

  // 已访问顶点集合
  const visited = new Map();
  // 记录各顶点的前置顶点和距离
  const parents = new Map();
  const distances = new Map();

  // 1. 初始化前置顶点和距离为无穷大
  let hasInited = false;
  adjList.forEach((m, v) => {
    visited.set(v, false);
    parents.set(v, null);
    if (!hasInited) {
      // 2. 从 A 出发，则其前置顶点无，距离0
      distances.set(v, 0);
      hasInited = true;
    } else {
      distances.set(v, Infinity);
    }
  });

  // 6. 重复 3、4、5
  adjList.forEach((m, v) => {
    // 3. 遍历所有未处理的顶点，找到距离最小的一个
    const target = getMin(distances, visited);
    // 4. 找到 目标顶点 的所有相邻顶点（未处理完成的），若与 A 距离小于它所记录的最小距离，则记录它与 A 的距离
    adjList.get(target).forEach((distance, v) => {
      if (!visited.get(v) && distance < distances.get(v)) {
        distances.set(v, distance);
        parents.set(v, target);
      }
    });
    // 5. 将 目标顶点 记录为已处理完成
    visited.set(target, true);
  })

  // 7. 生成一个新的图并返回
  const newGraph = new Graph();
  parents.forEach((parent, v) => {
    if (!parent) return;
    newGraph.addEdge(v, parent, distances.get(v));
  });

  return newGraph;
}

function getMin(distances, visited) {
  let minTarget, minTemp = Infinity;
  distances.forEach((distance, v) => {
    if (!visited.get(v) && distance < minTemp) {
      minTemp = distance;
      minTarget = v;
    }
  });
  return minTarget;
}