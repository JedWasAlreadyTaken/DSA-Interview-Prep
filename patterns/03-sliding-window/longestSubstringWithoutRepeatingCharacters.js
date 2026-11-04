// Longest Substring Without Repeating Characters
/*
Given a string s, find the length of the longest substring without
repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: the answer is "abc", with length 3.

Example 2:

Input: s = "bbbbb"
Output: 1

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: the answer is "wke", with length 3.

Constraints:

0 <= s.length <= 50,000
s consists of English letters, digits, symbols, and spaces.
*/

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let substring = new Set();
    let left = 0;
    let best = 0;

    for (let i = 0; i < s.length; i++) {
      while (substring.has(s[i])) {
        substring.delete(s[left]);
        left = left + 1;
      }
      let length = i - left + 1;
      substring.add(s[i]);

      if (length > best) {
        best = length;
      }
    }

    return best;
  }
}

const sol = new Solution();
console.log(sol.lengthOfLongestSubstring("pwwkew")); // expected: 3
console.log(sol.lengthOfLongestSubstring("bbbbb")); // expected: 1
console.log(sol.lengthOfLongestSubstring("abcabcbb")); // expected: 3
