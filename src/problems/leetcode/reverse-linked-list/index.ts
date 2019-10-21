import { ListNode } from '../../../data-structure/linked-list/listnode';

/**
Reverse a singly linked list.

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

const reverse_linked_list = (head: ListNode): ListNode => {
  // an easy way of doing it is, probably just use an array and store the numbers in order
  // then reverse it using a for loop.
  const storage = [];
  let pointer = head;
  while (pointer !== null) {
    storage.push(pointer);
    pointer = pointer.next;
  }
  let headpointer = new ListNode(storage[storage.length - 1].val);
  let currentPointer = headpointer;
  for (let i = storage.length - 2; i >= 0; i--) {
    currentPointer.next = new ListNode(storage[i].val);
    currentPointer = currentPointer.next;
  }
  return headpointer;
};

let testNode = new ListNode(1);
testNode.next = new ListNode(2);
testNode.next.next = new ListNode(3);

console.log(reverse_linked_list(testNode));
