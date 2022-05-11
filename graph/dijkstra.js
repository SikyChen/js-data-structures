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
    if (lockedVertices.includes(v)) return;

    // 若当前节点的出度（没有指出去的相邻顶点），则return
    if (!adjList.get(v)) return;

    // 当前顶点 v 的所有相邻顶点中的
    // 跟距离顶点 v 最近的顶点的距离
    let minDistance = Infinity;
    // 距离顶点 v 最近的顶点
    let minDistanceVertex;

    // 遍历顶点 v 的所有相邻节点
    adjList.get(v).forEach((d, w) => {
      // 如果顶点已经被处理完成，则不再进行计算
      if (lockedVertices.includes(w)) return;

      // 当前顶点 w 经过顶点 v 的最小距离
      // 如果此距离比之前保存的距离小，那么记录此距离
      const curDistance = distances[v] + d;
      if (!distances[w] || curDistance < distances[w]) {
        distances[w] = curDistance;
      }

      // 判断当前顶点是否为距离 v 的所有相邻顶点中最近的顶点，若是则记录
      if (curDistance < minDistance) {
        minDistance = curDistance;
        minDistanceVertex = w;
      }
    })

    // 锁定处理完成的节点
    lockedVertices.push(v);

    // 递归处理最近的相邻顶点
    minDistanceVertex && process(minDistanceVertex);
  }

  process(originVertex);

  return distances;
}