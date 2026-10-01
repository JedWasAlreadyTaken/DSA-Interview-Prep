// Clone Graph
/*
Given a reference of a node in a connected undirected graph, return a
deep copy (clone) of the graph. Each node contains a value and a list of
its neighbors.

Example 1:

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: node 1's neighbors are 2 and 4, node 2's neighbors are 1 and
3, and so on.

Example 2:

Input: adjList = [[]]
Output: [[]]
Explanation: the graph has one node with no neighbors.

Constraints:

The number of nodes in the graph is in the range [0, 100].
1 <= Node.val <= 100
Node.val is unique for each node.
There are no repeated edges and no self-loops.
The graph is connected and all its nodes can be visited starting from the
given node.
*/

class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {}
}
