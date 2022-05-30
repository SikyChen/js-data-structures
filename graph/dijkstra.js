/**
 * dijkstra 算法
 * 
 * 一种有权图的算法。求从某一源顶点到其余各顶点的最短距离。
 * 
 * 根据描述可知，返回的结果中，每个顶点都对应一个距离，该距离是从源顶点到当前顶点的最短距离。
 * 
 * 使用邻接表表示的图中，如
 * - A -> B(2) C(4)
 * - B -> C(2) D(4) E(2)
 * - C -> E(3)
 * - D -> F(2)
 * - E -> D(3) F(2)
 * - F -> undefined
 * 
 * 若源顶点为 A ，则各顶点距离 A 顶点的最小距离为
 * - A - 0
 * - B - 2
 * - C - 4
 * - D - 6
 * - E - 4
 * - F - 6
 * - 注：D 的另一种可能的路径可以为 A-B-C-E-D ，总长为 2+2+3+3=10，则不是最短的路径了
 * 
 * 描述：
 * 从某一源顶点出发，求出到所有顶点的最短距离。
 * 1. 首先声明一个 distances 对象，用于存储各顶点和其最短距离的关系；
 *    可知，源顶点的距离是 0 。
 *    注：可将所有其它顶点，在这一步都将距离设置为无穷大。而这里的算法未进行该设置，无法到达的顶点的距离就用 undefined 表示了。
 * 2. 声明一个数组 lockedVertices 用于存储已处理过的顶点；
 *    注：当一个顶点，以该顶点计算过其相邻顶点距离后，该顶点记为处理完成。
 * 3. 以源顶点作为当前处理顶点，做如下处理：
 * 4. 遍历当前顶点的所有相邻顶点，给每个未处理的顶点设置其距离。距离为 当前顶点到源点的距离 + 两顶点间距离；
 * 5. 将当前顶点标记为处理完成；
 * 6. 从所有未处理完成的顶点中，找到距离源顶点最短的顶点；
 * 7. 以该最短顶点作为当前处理顶点，重复 4、5、6 步骤。
 * 8. 最终返回 distances ，得到各顶点到源顶点的最短距离。
 */
module.exports = dijkstra = (graph, originVertex) => {
  if (!graph || !originVertex) return false;

  // 用于存储每个顶点距离源顶点的最小距离，也是返回值
  const distances = {
    [originVertex]: 0,
  }
  const lockedVertices = [];

  const adjList = graph.getAdjList();

  function process(v) {

    // 遍历顶点 v 的所有相邻节点
    (adjList.get(v) || []).forEach((d, w) => {
      // 如果顶点已经被处理完成，则不再进行计算
      if (lockedVertices.includes(w)) return;

      // 当前顶点 w 距离顶点 v 的最小距离
      // 如果此距离比之前保存的距离小，那么记录此距离
      const curDistance = distances[v] + d;
      if (!distances[w] || curDistance < distances[w]) {
        distances[w] = curDistance;
      }
    })

    // 锁定处理完成的节点
    lockedVertices.push(v);

    // 从所有未处理顶点中，找出距离源顶点最近的顶点
    const minDistanceVertex = getMinDistanceVertex();
    // 以该顶点递归
    minDistanceVertex && process(minDistanceVertex);
  }

  // 从所有未处理顶点中，找出距离源顶点最近的顶点
  function getMinDistanceVertex() {
    let minDistanceVertex;
    for(let key in distances) {
      if (!lockedVertices.includes(key) && (!minDistanceVertex || distances[key] < distances[minDistanceVertex])) {
        minDistanceVertex = key;
      }
    }
    return minDistanceVertex;
  };

  process(originVertex);

  return distances;
}