// Group Anagrams
/*
Given an array of strings strs, group the anagrams together. You can
return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Constraints:

1 <= strs.length <= 10,000
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let map = new Map();
    for (const str of strs) {
      const key = str.split("").sort().join("");
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
    return [...map.values()];
  }
}
