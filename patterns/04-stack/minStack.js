// Min Stack
/*
Design a stack that supports push, pop, top, and retrieving the minimum
element in constant time.

Implement the MinStack class:
- MinStack() initializes the stack object.
- void push(val) pushes val onto the stack.
- void pop() removes the element on top of the stack.
- number top() gets the top element of the stack.
- number getMin() retrieves the minimum element in the stack.

Every method must run in O(1) time.

Example 1:

Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output:
[null,null,null,null,-3,null,0,-2]

Explanation:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

Constraints:

-2^31 <= val <= 2^31 - 1
Methods pop, top, and getMin will always be called on a non-empty stack.
At most 30,000 calls will be made to push, pop, top, and getMin.
*/

class MinStack {
  constructor() {}

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {}

  /**
   * @return {void}
   */
  pop() {}

  /**
   * @return {number}
   */
  top() {}

  /**
   * @return {number}
   */
  getMin() {}
}
