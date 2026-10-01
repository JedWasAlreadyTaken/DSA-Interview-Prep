// Valid Palindrome
/*
A phrase is a palindrome if, after converting all uppercase letters to
lowercase and removing all non-alphanumeric characters, it reads the same
forward and backward.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false

Constraints:

1 <= s.length <= 200,000
s consists of printable ASCII characters.
*/

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      while (left < right && !/[a-z0-9]/i.test(s[left])) {
        left++;
      }

      while (left < right && !/[a-z0-9]/i.test(s[right])) {
        right--;
      }

      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
