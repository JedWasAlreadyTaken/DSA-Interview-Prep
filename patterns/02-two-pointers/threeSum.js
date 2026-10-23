// 3Sum
/*
Given an integer array nums, return all the triplets [nums[i], nums[j],
nums[k]] such that i != j, i != k, and j != k, and
nums[i] + nums[j] + nums[k] == 0.

The solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = [0,1,1]
Output: []

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]

Constraints:

3 <= nums.length <= 3,000
-100,000 <= nums[i] <= 100,000
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    let results = [];
    let seenkeys = new Set();
    // Outer loop: try every index i as the first number of the triplet.
    for (let i = 0; i < nums.length; i++) {
      // Middle loop starts at i + 1 so j never reuses index i and we
      // never re-check a combination we've already tried.
      for (let j = i + 1; j < nums.length; j++) {
        // Inner loop starts at j + 1 for the same reason, so i, j and k
        // are always three different indices. Three nested loops over
        // the array is what makes this brute force O(n^3).
        for (let k = j + 1; k < nums.length; k++) {
          // A valid triplet sums to exactly 0. Duplicate triplets (same
          // values, different indices or order) must only be kept once.
          if (nums[i] + nums[j] + nums[k] === 0) {
            results.push(nums.sort((a, b) => a - b).join(" "));
          }
        }
      }
    }
    return results;
  }
}

const sol = new Solution();
console.log(sol.threeSum([-1, 0, 1, 2, -1, -4])); // expected: [[-1, -1, 2], [-1, 0, 1]]
console.log(sol.threeSum([0, 1, 1])); // expected: []
console.log(sol.threeSum([0, 0, 0])); // expected: [[0, 0, 0]]
