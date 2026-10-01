// Reverse Linked List
/*
Given the head of a singly linked list, reverse the list, and return the
reversed list's head.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is in the range [0, 5000].
-5000 <= Node.val <= 5000
*/

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {}
}
