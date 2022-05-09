const { divider } = require('./../utils');
const Graph = require("./graph");

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
graph.print();
divider();

graph.BFS(myVertices[0], (v) => {
  console.log('BFS Visited vertex: ' + v);
});
divider();

console.log('getShortestPath:', Graph.getShortestPath(graph, myVertices[0]));
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
console.log('discovery', discovery);
console.log('predecessors', predecessors);
console.log('finished', finished);
divider();

graph2 = new Graph(true); // 有向图
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
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log('s:', s);