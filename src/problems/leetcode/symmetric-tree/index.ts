/**

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

 */

// function TreeNode(val: number) {
//   this.val = val;
//   this.left = this.right = null;
// }


const compare = (t1: TreeNode, t2: TreeNode): boolean => {
  if(t1 === null && t2 === null) {
    return true;
  }
  if(t1 === null || t2 === null) {
    return false;
  }

  return (t1.val === t2.val) && compare(t1.left, t2.right) && compare(t1.right, t2.left);
}

const symmetric_tree = (input: TreeNode) => {
  return compare(input, input);
};

class TreeNode {
  public val: number;
  public left: TreeNode;
  public right: TreeNode;
  constructor (val: number) {
    this.left = this.right = null;
    this.val = val;
  }
}
const testCase1 = new TreeNode(1);
testCase1.left = new TreeNode(2);
testCase1.right = new TreeNode(2);
testCase1.left.right = new TreeNode(3);
testCase1.right.right = new TreeNode(3);

const testCase2 = new TreeNode(1);
testCase2.left = new TreeNode(2);
testCase2.right = new TreeNode(2);
testCase2.left.left = new TreeNode(3);
testCase2.right.right = new TreeNode(3);
testCase1.left.right = new TreeNode(4);
testCase1.right.left = new TreeNode(4);


console.log(symmetric_tree(testCase1));
console.log(symmetric_tree(testCase2));