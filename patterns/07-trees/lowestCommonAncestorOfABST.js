// Lowest Common Ancestor of a Binary Search Tree
/*
Given a binary search tree (BST), find the lowest common ancestor (LCA)
node of two given nodes p and q in the BST.

The lowest common ancestor is defined as the lowest node in the tree that
has both p and q as descendants (where a node can be a descendant of
itself).

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2

Constraints:

The number of nodes in the tree is in the range [2, 100,000].
-10^9 <= Node.val <= 10^9
All Node.val are unique.
p != q, and both p and q exist in the BST.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {}
}
