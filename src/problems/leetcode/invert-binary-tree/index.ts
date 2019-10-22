import { TreeNode } from "../../../data-structure/tree/treenode";


// invert a binary tree
// famous question: Max Howell: person who created homebrew. He applied to google but failed to pass the interview process
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can't invert a binary tree on a whiteboard so f**k off

const invertTree = (root: TreeNode) => {
	if (root === null) return root;
	flip(root);
	return root;
}

const flip = (node: TreeNode) =>{
	if(node === null) {
		return;
	}
	if(node.left === null && node.right === null) {
		return;
	} 
	const temp = node.left;
	node.left = node.right;
	node.right = temp;
	flip(node.left);
	flip(node.right);
}

const testcase = new TreeNode(1);
testcase.left = new TreeNode(2);



invertTree(testcase);