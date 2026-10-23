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
    for (let i = 0; i < nums.length - 2; i++) {
      // Middle loop starts at i + 1 so j never reuses index i and we
      // never re-check a combination we've already tried.
      for (let j = i + 1; j < nums.length - 1; j++) {
        // Inner loop starts at j + 1 for the same reason, so i, j and k
        // are always three different indices. Three nested loops over
        // the array is what makes this brute force O(n^3).
        for (let k = j + 1; k < nums.length; k++) {
          // A valid triplet sums to exactly 0. Duplicate triplets (same
          // values, different indices or order) must only be kept once.
          if (nums[i] + nums[j] + nums[k] === 0) {
            let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
            const key = triplet.join(" ");

            if (!seenkeys.has(key)) {
              seenkeys.add(key);
              results.push(triplet);
            }
          }
        }
      }
    }
    return results;
  }

  optimisedThreeSum(nums) {
    nums.sort((a, b) => a - b);
    let results = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] === nums[i - 1]) {
        continue;
      }
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (nums[left] + nums[right] < -nums[i]) {
          left++;
        } else if (nums[left] + nums[right] > -nums[i]) {
          right--;
        } else if (nums[left] + nums[right] === -nums[i]) {
          results.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] == nums[left - 1] && left < right) {
            left++;
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
console.log("Optimised \n ");
console.log(sol.optimisedThreeSum([-1, 0, 1, 2, -1, -4])); // expected: [[-1, -1, 2], [-1, 0, 1]]
console.log(sol.optimisedThreeSum([0, 1, 1])); // expected: []
console.log(sol.optimisedThreeSum([0, 0, 0])); // expected: [[0, 0, 0]]
