// Product of Array Except Self
/*
Given an integer array nums, return an array answer such that answer[i]
is equal to the product of all the elements of nums except nums[i].

You must write an algorithm that runs in O(n) time without using the
division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 100,000
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums fits in a 32-bit integer.
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let res = [];
    let start = 1;
    for (let i = 0; i < nums.length; i++) {
      res.push(start);
      start *= nums[i];
    }
    let start2 = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      res[i] = start2 * res[i];
      start2 *= nums[i];
    }
    return res;
  }
}
const sol = new Solution();
console.log(sol.productExceptSelf([1, 2, 3, 4])); // expected: [24, 12, 8, 6]
console.log(sol.productExceptSelf([-1, 1, 0, -3, 3])); // expected: [0, 0, 9, 0, 0]
