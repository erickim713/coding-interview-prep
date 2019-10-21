/**
 * definition for singly linked list
 * used in leetcode
 */
export class ListNode {
	public val: number;
	public next: ListNode;

	constructor(val: number) {
		this.val = val;
		this.next = null;
	}
}