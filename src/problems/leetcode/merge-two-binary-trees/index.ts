import { TreeNode } from "../../../data-structure/tree/treenode";

/**
 * Given two binary trees and image that when you put one of them to cover the other,
 * some nodes of the two trees are overlapped while the others are not.
 *
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap,
 * then sum node values up as the new value of the mreged node. Otherwise, the NOT null
 * node will be used as the node of the new tree.
 *
 *
 * @param t1 first tree node
 * @param t2 second tree node
 */

const mergeTrees = (t1: TreeNode, t2: TreeNode): TreeNode => {
  // if t1 and t2 are both null then there is no need to make one
  if (t1 === null && t2 === null) {
    return null;
  }

  let newTree = new TreeNode(0);

  // if t1 is not null then update
  if (t1 !== null) {
    traverseTheTreeWithAddition(t1, newTree);
  }

  // if t2 is not null then update
  if (t2 !== null) {
    traverseTheTreeWithAddition(t2, newTree);
  }

  // return the new tree
  return newTree;
};

const traverseTheTreeWithAddition = (t1: TreeNode, newTree: TreeNode) => {
  if (t1 === null) {
    return;
  }
  newTree.val = newTree.val + t1.val;

  if (t1.left !== null) {
    if (newTree.left === null) {
      newTree.left = new TreeNode(0);
    }
    traverseTheTreeWithAddition(t1.left, newTree.left);
  }

  if (t1.right !== null) {
    if (newTree.right === null) {
      newTree.right = new TreeNode(0);
    }
    traverseTheTreeWithAddition(t1.right, newTree.right);
  }
};

let t1 = null;
let t2 = null;
console.log(mergeTrees(t1, t2));
