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
  ThreeSum(nums) {
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
          results.push([nums[left], nums[right], nums[i]]);
        }
        left++;
        right--;
        if (nums[i] === nums[i - 1] && left < right) {
          left++;
        }
      }
    }
    return results;
  }
}
const sol = new Solution();
console.log(sol.ThreeSum([-1, 0, 1, 2, -1, -4])); // expected: [[-1, -1, 2], [-1, 0, 1]]
console.log(sol.ThreeSum([0, 1, 1])); // expected: []
console.log(sol.ThreeSum([0, 0, 0])); // expected: [[0, 0, 0]]

// Valid Parentheses
/*
Given a string s containing just the characters '(', ')', '{', '}', '[',
and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets are closed by the same type of bracket.
2. Open brackets are closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()[]{}"
Output: true

Example 2:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 10,000
s consists only of the characters '()[]{}'.
*/

class StackSolution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const pairs = { ")": "(", "]": "[", "}": "{" };

    for (const char of s) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
    return stack.length === 0;
  }
}
const stackSol = new StackSolution();
console.log(stackSol.isValid("()[]{}"));
console.log(stackSol.isValid("(]"));
console.log(stackSol.isValid("([)]"));
console.log(stackSol.isValid("{[]}"));
console.log(stackSol.isValid("("));

// Best Time to Buy and Sell Stock
/*
You are given an array prices where prices[i] is the price of a given
stock on the ith day.

You want to maximize your profit by choosing a single day to buy one
stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve. If you cannot achieve any
profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: buy on day 2 (price 1), sell on day 5 (price 6), profit 5.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: prices only fall, no profitable transaction exists.

Constraints:

1 <= prices.length <= 100,000
0 <= prices[i] <= 10,000
*/

class SlidingSolution {
  /**
   * @param {number[]} prices
   * @return {number}
   */

  stock(prices) {
    let bestprofit = 0;
    let cheapest = Infinity;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] - cheapest > bestprofit) {
        bestprofit = prices[i] - cheapest;
      }

      if (prices[i] < cheapest) {
        cheapest = prices[i];
      }
    }
    return bestprofit;
  }
}
const slidingsol = new SlidingSolution();
console.log(slidingsol.stock([7, 6, 4, 3, 1])); // expected: 0
console.log(slidingsol.stock([3, 8, 1, 2])); // expected: 5
console.log(slidingsol.stock([7, 1, 5, 3, 6, 4])); // expected: 5
