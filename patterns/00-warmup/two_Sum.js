// Two Sum CHallenge in Js
/*
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]
Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]
Constraints:

2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000
Only one valid answer exists.
*/

// Brute Force Solution
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    // Outer loop: try every index i as the "first" number.
    for (let i = 0; i < nums.length; i++) {
      // Inner loop starts at i + 1 (not 0) so we never pair an index
      // with itself and never re-check a pair we've already tried.
      for (let j = i + 1; j < nums.length; j++) {
        // Check every pair's sum against target — this is what makes
        // it O(n^2): for each i we may scan almost the whole rest of the array.
        if (nums[i] + nums[j] === target) {
          // BUG: `nums[(i, j)]` uses the comma operator, which evaluates
          // i then j and discards i, so this is really just `nums[j]` —
          // a single VALUE from the array, not the pair of INDICES we want.
          // Should be: return [i, j];
          return nums[(i, j)];
        }
      }
    }
  }

  MapSolution(nums, target) {
    const num_to_index = {}; // number value -> index where it was seen

    // Pass 1: record every number's index. Note: if a value repeats,
    // this OVERWRITES the earlier index with the later one.
    for (let i = 0; i < nums.length; i++) {
      num_to_index[nums[i]] = i;
    }

    // Pass 2 (intended): for each i, compute the complement needed to
    // reach target, then look it up in the map built above.
    // BUG: num_needed is declared with `const` INSIDE this loop's block,
    // so it goes out of scope every iteration — nothing outside the loop
    // can see it.
    for (let i = 0; i < nums.length; i++) {
      const num_needed = target - nums[i];
    }

    // BUG: this whole `if` sits OUTSIDE both loops, so it only ever runs
    // once, after the second loop has already finished — using i and
    // num_needed left over from the last iteration, not checked per-i.
    // BUG: `numb_to_index` is a typo for `num_to_index` — ReferenceError.
    // BUG: even if this ran per-iteration, `[i, num_to_index]` returns the
    // whole map object as the second element instead of the index of the
    // complement — should be `num_to_index[num_needed]`.
    if (
      numb_to_index[num_needed] !== undefined &&
      num_to_index[num_needed] !== i
    ) {
      return [i, num_to_index];
    }
  }

  // One-pass hash map solution
  // Instead of building the whole map first and then scanning (two passes),
  // we build the map and check for the complement in the SAME loop.
  // This works because by the time we reach index i, the map already
  // contains every index that came before i — so if the complement was
  // seen earlier, we'll find it. We just have to check BEFORE inserting
  // the current number, otherwise nums[i] could "match itself".
  OnePassSolution(nums, target) {
    const num_to_index = {}; // maps: number value -> index where we saw it

    for (let i = 0; i < nums.length; i++) {
      // What value would we need to have seen already to hit the target?
      const num_needed = target - nums[i];

      // Have we already stored that value in the map (from an earlier index)?
      if (num_to_index[num_needed] !== undefined) {
        // Found it — smaller index first, since num_to_index[num_needed]
        // was necessarily recorded on an earlier iteration than i.
        return [num_to_index[num_needed], i];
      }

      // Not found yet — remember this number's index for future iterations,
      // then move on. (Done AFTER the check so nums[i] never pairs with itself.)
      num_to_index[nums[i]] = i;
    }
  }
}
