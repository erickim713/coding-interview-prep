import { TreeNode } from "../../../data-structure/tree/treenode";

const diameterOfBinaryTree = (root: TreeNode) => {
	if(root === null) return 0;
	const left = maxDepth(root.left);
	const right = maxDepth(root.right);
	return left + right;
}

const maxDepth = (root: TreeNode) => {
  let max = 0;
  function dfs (node: TreeNode, level: number) {
    if(node === null) return;
    if( level > max ) max = level;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

	
  dfs(root, 1);
  return max;
};


const testCase = new TreeNode(4);
testCase.left = new TreeNode(-7);

testCase.right = new TreeNode(-3);

testCase.right.right = new TreeNode(-3);
testCase.right.right.left = new TreeNode(-4);

testCase.right.left = new TreeNode(1);
testCase.right.left.left = new TreeNode(1);
testCase.right.left.left.left = new TreeNode(1);
testCase.right.left.left.left.left = new TreeNode(1);
testCase.right.left.left.left.left.right = new TreeNode(1);
testCase.right.left.left.left.right = new TreeNode(1);
testCase.right.left.left.left.right.left = new TreeNode(1);
testCase.right.left.right = new TreeNode(1);
testCase.right.left.right.left = new TreeNode(1);
testCase.right.left.right.left.left = new TreeNode(1);
testCase.right.left.right.right = new TreeNode(1);
testCase.right.left.right.right.left = new TreeNode(1);
testCase.right.left.right.right.left.left = new TreeNode(1);


console.log(diameterOfBinaryTree(testCase));
