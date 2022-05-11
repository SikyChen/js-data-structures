const { divider } = require('./../utils');
const Graph = require("./graph");

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B', 3);
graph.addEdge('A', 'C', 4);
graph.addEdge('A', 'D');
graph.addEdge('C', 'D', 6);
graph.addEdge('C', 'G', 2);
graph.addEdge('D', 'G', 10);
graph.addEdge('D', 'H', 12);
graph.addEdge('B', 'E', 7);
graph.addEdge('B', 'F', 9);
graph.addEdge('E', 'I', 5);
graph.print();
divider();

graph.BFS(myVertices[0], (v) => {
  console.log('BFS Visited vertex: ' + v);
});
divider();

console.log('getShortestPathByBFS:', Graph.getShortestPathByBFS(graph, myVertices[0]));
divider();

graph.DFS((v) => {
  console.log('DFS Visited vertex: ' + v);
});
divider();

let count = 0;
const discovery = {};
const predecessors = {};
const finished = {};
graph.DFS(
  v => discovery[v] = ++count,
  (v, w) => predecessors[w] = v,
  v => finished[v] = ++count,
)
// 根据前中后序遍历，可以分别得到
// 1. 每个顶点第一次被访问的时间
// 2. 每个顶点的前置顶点
// 3. 每个顶点最后一次被访问的时间
console.log('discovery', discovery);
console.log('predecessors', predecessors);
console.log('finished', finished);
divider();

// 根据后续遍历结果，倒序，得到有向图的一种拓扑排序
const graph2 = new Graph(true); // 有向图
const myVertices2 = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVertices2.length; i++) {
  graph2.addVertex(myVertices2[i]);
}
graph2.addEdge('A', 'C');
graph2.addEdge('A', 'D');
graph2.addEdge('B', 'D');
graph2.addEdge('B', 'E');
graph2.addEdge('C', 'F');
graph2.addEdge('F', 'E');
let count2 = 0;
const fTimes = {};
graph2.DFS(null, null, v => fTimes[v] = ++count2);
console.log('fTimes', fTimes);
s = '';
for (let count = 0; count < myVertices2.length; count++) {
  let max = 0;
  let maxName = null;
  for (i = 0; i < myVertices2.length; i++) {
    if (fTimes[myVertices2[i]] > max) {
      max = fTimes[myVertices2[i]];
      maxName = myVertices2[i];
    }
  }
  s += (count ? ' - ' : '') + maxName;
  delete fTimes[maxName];
}
console.log('s:', s);
divider();

const graph3 = new Graph(true);
for (i = 0; i < myVertices2.length; i++) {
  graph3.addVertex(myVertices2[i]);
}
graph3.addEdge('A', 'B', 2);
graph3.addEdge('A', 'C', 4);
graph3.addEdge('B', 'C', 2);
graph3.addEdge('B', 'D', 4);
graph3.addEdge('B', 'E', 2);
graph3.addEdge('C', 'E', 3);
graph3.addEdge('E', 'D', 3);
graph3.addEdge('E', 'F', 2);
graph3.addEdge('D', 'F', 2);
graph3.print();
console.log('dijkstra:', Graph.dijkstra(graph3, 'A'));
