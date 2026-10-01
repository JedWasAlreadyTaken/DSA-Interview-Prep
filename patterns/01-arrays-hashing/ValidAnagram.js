// Valid Anagram
/*
Given two strings s and t, return true if t is an anagram of s, and false
otherwise. An anagram is a word formed by rearranging the letters of
another, using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 50,000
s and t consist of lowercase English letters.
*/

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const sortedS = s.split("").sort().join();
    const sortedT = t.split("").sort().join();
    return sortedS == sortedT;
  }

  isMapAnagram(s, t) {
    if (s.length != t.length) return false;

    const counts = new Map();

    for (const char of s) {
      counts.set(char, (counts.get(char) ?? 0) + 1);
    }

    for (const char of t) {
      const remainings = counts.get(char);
      if (remainings === undefined || remainings === 0) return false;
      counts.set(char, remainings - 1);
    }
    return true;
  }
}
