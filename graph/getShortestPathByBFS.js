const Queue = require('./../queue/queue');

/**
 * 根据BFS算法查找每个点跟源点的最短路径(以边数记，找最少边的路径)
 * @param {Graph} graph 
 * @param {v} startVertex 
 * @returns {Object} {distances, predecessors}
 */
module.exports = getShortestPathByBFS = (graph, startVertex) => {
  if (!graph || !startVertex) return false;

  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();

  if (!vertices.includes(startVertex)) return false;

  const distances = {};
  const predecessors = {};
  vertices.forEach(v => {
    distances[v] = 0;
    predecessors[v] = null;
  })

  const queue = new Queue();
  const enqueuedVertices = new Set();

  queue.enqueue(startVertex);
  enqueuedVertices.add(startVertex);

  while (!queue.isEmpty()) {
    const v = queue.dequeue();
    adjList.get(v).forEach((d, w) => {
      if (!enqueuedVertices.has(w)) {
        distances[w] = distances[v] + 1;
        predecessors[w] = v;
        queue.enqueue(w);
        enqueuedVertices.add(w);
      }
    });
  }

  const paths = {};
  vertices.forEach(v => {
    const path = [v];
    let cur = v;
    while (predecessors[cur]) {
      path.push(predecessors[cur]);
      cur = predecessors[cur];
    }
    paths[v] = path.reverse().join('-');
  })

  return {
    distances,
    predecessors,
    paths,
  }
}