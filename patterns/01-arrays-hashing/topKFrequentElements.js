// Top K Frequent Elements
/*
Given an integer array nums and an integer k, return the k most frequent
elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 100,000
-10,000 <= nums[i] <= 10,000
k is between 1 and the number of distinct elements in nums.
It is guaranteed the answer is unique.

Follow-up: your algorithm's time complexity must be better than O(n log n)
where n is the array's size.
*/
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let count = new Map();
    let bucket = [];
    for (let i = 0; i <= nums.length; i++) {
      bucket.push([]);
    }
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      count.set(nums[i], (count.get(nums[i]) ?? 0) + 1);
    }
    for (const [n, c] of count) {
      bucket[c].push(n);
    }
    for (let i = bucket.length - 1; i >= 0; i--) {
      if (bucket[i]) result.push(...bucket[i]);
      if (result.length === k) break;
    }
    return result;
  }
}

const sol = new Solution();
console.log(sol.topKFrequent([1, 1, 1, 2, 2, 3], 2)); // expected: [1, 2]
console.log(sol.topKFrequent([1], 1)); // expected: [1]
