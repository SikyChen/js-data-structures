const Queue = require('./../queue/queue');
const dijkstra = require('./dijkstra');
const getShortestPathByBFS = require('./getShortestPathByBFS');

/**
 * 图
 * 
 * 图的表示方法有多种
 * 1. 邻接矩阵
 * 2. 邻接表
 * 3. 关联矩阵
 * 等...
 */

/**
 * Graph 类
 * 
 * 使用邻接表的表示方法创建一个图类
 */
module.exports = class Graph {
  constructor(isDirected = false) {
    // 是否有向图
    this.isDirected = isDirected;
    // 所有顶点名字
    this.vertices = [];
    /**
     * 邻接表
     * key: 顶点名字
     * value: {Set} 当前顶点的所有相邻顶点的集合
     */
    this.adjList = new Map();
  }

  /** 向图中添加顶点 */
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, new Map());
      return true;
    }
    return false;
  }

  /** 向图中添加边 */
  addEdge(v, w, distance = 1) {
    // 若没有两个顶点，就添加顶点
    this.addVertex(v);
    this.addVertex(w);
    // 将 w 顶点加入 v 的邻接表中，并设置权重
    this.adjList.get(v).set(w, distance);
    // 若无向图，则将 v 顶点也加入 w 的邻接表中，并设置权重
    if (!this.isDirected) {
      this.adjList.get(w).set(v, distance);
    }
  }

  /** 返回顶点列表 */
  getVertices() {
    return this.vertices;
  }

  /** 返回邻接表 */
  getAdjList() {
    return this.adjList;
  }

  /** Print */
  print() {
    console.log('Graph Print:')
    this.vertices.forEach(v => {
      let str = `${v} ->`;
      new Map().keys
      this.adjList.get(v).forEach((d, w) => {
        str += ` ${w}(${d})`;
      })
      console.log(str);
    })
  }

  /**
   * 宽度优先遍历
   * 支持无向图，有向图可能无法遍历到所有顶点
   * @param {v} startVertex 遍历七点
   * @param {Function} callback 回调
   * @returns void
   */
  BFS(startVertex, callback) {
    if (!startVertex || !this.vertices.includes(startVertex)) return false;

    // 所有已经入队过的顶点的集合，所有顶点都只能入队一次，以保证只会被处理一次
    const enqueuedVertices = new Set();
    // 队列，用于宽度优先遍历
    const queue = new Queue();

    queue.enqueue(startVertex);
    enqueuedVertices.add(startVertex);

    while (!queue.isEmpty()) {
      const v = queue.dequeue();
      this.adjList.get(v).forEach((d, w) => {
        // 将未处理过的相邻顶点加入待处理队列
        if (!enqueuedVertices.has(w)) {
          queue.enqueue(w);
          // 将入队的顶点 w 放入已入队集合
          enqueuedVertices.add(w);
        }
      });
      // 使用顶点 v 作为参数执行 callback
      typeof callback === 'function' && callback(v);
    }
  }

  /**
   * 深度优先遍历
   * 支持无向图和有向图，会从所有顶点各出发一次进行遍历
   * 
   * @param {*} preCallback 先序回调
   * @param {*} inCallback 中序回调
   * @param {*} postCallback 后续回调
   */
  DFS(preCallback, inCallback, postCallback) {
    const visitedVetices = new Set();
    const vertices = this.vertices;
    const adjList = this.adjList;

    vertices.forEach(v => {
      if (!visitedVetices.has(v)) {
        process(v);
      }
    })

    function process(v) {
      visitedVetices.add(v);
      typeof preCallback === 'function' && preCallback(v);

      adjList.get(v).forEach((d, w) => {
        if (!visitedVetices.has(w)) {
          typeof inCallback === 'function' && inCallback(v, w, d);
          process(w);
        }
      })

      typeof postCallback === 'function' && postCallback(v);
    }
  }

  // 根据 BFS 查询最短路径（以边数量计）
  static getShortestPathByBFS = getShortestPathByBFS;

  // dijkstra 算法，单源最短路径算法
  static dijkstra = dijkstra;
}
