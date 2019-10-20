/**
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node.

leaf is a node with no children
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class Nodee {
  value: number;
  left?: Nodee;
  right?: Nodee;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



const maxDepth = (root: Nodee) => {
  let max = 0;
  function dfs (node: Nodee, level: number) {
    if(node === null) return;
    if( level > max ) max = level;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 1);
  return max;
};


const teste = new Nodee(3);
teste.left = new Nodee(9);
console.log(maxDepth(teste));
