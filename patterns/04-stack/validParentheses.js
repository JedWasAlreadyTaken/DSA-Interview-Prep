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

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const pairs = { ")": "(", "]": "[", "}": "{" };
    /*

    */
    for (const char of s) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
    return stack.length === 0;
  }
}
