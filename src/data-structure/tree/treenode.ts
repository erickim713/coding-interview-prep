export class TreeNode {
	public val: number;
	public left: TreeNode;
	public right: TreeNode;

	constructor(val: number) {
		this.val = val;
		this.left = this.right = null;
	}
}