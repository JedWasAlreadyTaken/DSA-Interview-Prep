// Last Stone Weight
/*
You are given an array of integers stones where stones[i] is the weight
of the ith stone.

Each turn, choose the two heaviest stones and smash them together. Say
the two stones have weights x and y with x <= y. The result of the smash
is:
- if x == y, both stones are destroyed
- if x != y, the stone of weight x is destroyed, and the stone of weight
  y has new weight y - x

Repeat until there is at most one stone left. Return the weight of the
last remaining stone, or 0 if none remain.

Example 1:

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: combine 7&8 -> 1, combine 2&4 -> 2, combine 1&2 -> 1,
combine 1&1 -> 0, leaving stone of weight 1.

Example 2:

Input: stones = [1]
Output: 1

Constraints:

1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/

class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones) {}
}
