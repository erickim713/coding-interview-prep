class ListNode {
	public val: number;
	public next: ListNode;
	constructor(value: number) {
		this.val = value;
		this.next = null;
	}

}

const hasCycle = (head: ListNode) => {
	const record = new Map<number, boolean>();
	let pointer = head;
	while(pointer !== null) {
		const value = record.get(pointer.val);
		if(value === true) return true;
		else {
			record.set(pointer.val, true);
		}
		pointer = pointer.next;
	}

	return false;
}


const testCase = new ListNode(3);
testCase.next = new ListNode(2);
// testCase.next = new ListNode(2);
// testCase.next.next = new ListNode(0);
// testCase.next.next.next = new ListNode(-4);
// testCase.next.next.next.next = testCase.next;

console.log(hasCycle(testCase));

//apparently for this case the solution doesn't work... then doesnt it' mean that if you we have -1 then we return false, else true ?