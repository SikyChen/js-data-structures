/**
 * Kruskal 算法（K算法）
 * 
 * 邻接表的实现
 * 
 * 求解有权无向连通图的最小生成树。在图中，每个顶点可能被多条边连通，使用的边的权重之和如果最小，则成为最小生成树
 * 
 * 有权、无向
 * 
 * K 算法的描述：
 * 1. 在图中，找出所有边，并按权重从大到小排序
 * 2. 在所有边中，找出权重最小的一条边，即最后一条边
 * 3. 判断最小边的两个顶点是否已经被连接过，通过判断两个顶点是否同时出现在某个集合 set 中，
 *    若为是，则说明被连接过，舍弃此边，pop出去
 *    若为否，则说明没有被连接过，pop后记录此边，并将顶点存入一个新集合 set 中
 * 4. 判断两个顶点是否分别单独存在某个集合 set 当中，
 *    若为是，说明联通了几个已经连接过的顶点，那么将两个连接的集合合并
 * 5. 重复2的步骤，直到所有边都找完
 * 6. 重新生成一个图的邻接矩阵，只使用已记录的边，返回新的图矩阵
 */
module.exports = kruskal = (graph, Graph) => {
  if (graph.isDirected) {
    return new Error('kruskal 算法只支持无向图');
  }

  const adjList = graph.adjList;
  const edges = graph.edges;

  // 将所有边存入一个集合
  const edgesArray = [];
  edges.forEach((distance, edge) => {
    edgesArray.push(edge);
  })

  // 将边集按从大到小排序
  edgesArray.sort((a, b) => edges.get(a) - edges.get(b));

  // 记录已连接的点
  const map = {};
  // 记录最小生成树的边
  const record = new Map();

  // 按边从小到大遍历
  for (let i = 0; i < edgesArray.length; i++) {
    // 每次找到的都是未使用过的最小边
    const shortestEdge = edgesArray[i];
    // 当前边的两个顶点
    const v1 = shortestEdge[0];
    const v2 = shortestEdge[1];
    // 若两个顶点已被记录在同一集合中，说明两个顶点已经被连接过了，不需要再连接
    if (map[v1] && map[v1].has(v2)) {
      continue;
    }
    // 否则该边属于最小生成树的边，记录下来
    else {
      record.set([v1, v2], adjList.get(v1).get(v2));
      union(map, v1, v2);
    }
  }

  // 根据最小生成树的边，生成一个新的图并返回
  const newGraph = new Graph();
  record.forEach((distance, [v, w]) => {
    newGraph.addEdge(v, w, distance);
  });

  return newGraph;
}

function union(map, v1, v2) {
  const set = new Set([...(map[v1] || [v1]), ...(map[v2] || [v2])]);
  set.forEach(v => {
    map[v] = set;
  })
}
