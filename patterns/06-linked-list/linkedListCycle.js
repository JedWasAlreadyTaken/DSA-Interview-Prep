// Linked List Cycle
/*
Given head, the head of a linked list, determine if the linked list has a
cycle in it.

There is a cycle in a linked list if there is some node in the list that
can be reached again by continuously following the next pointer.

Return true if there is a cycle in the linked list, otherwise return
false.

Example 1:

Input: head = [3,2,0,-4], pos = 1 (tail connects to index 1)
Output: true

Example 2:

Input: head = [1,2], pos = -1 (no cycle)
Output: false

Constraints:

The number of nodes in the list is in the range [0, 10,000].
-100,000 <= Node.val <= 100,000
pos is -1 or a valid index in the linked list.

Follow-up: can you solve it using O(1) (constant) memory?
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
   * @return {boolean}
   */
  hasCycle(head) {}
}
