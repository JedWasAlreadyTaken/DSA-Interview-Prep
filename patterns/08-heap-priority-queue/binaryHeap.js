// Implement a Min Binary Heap
/*
Not a LeetCode problem — an implementation warmup for this pattern folder,
per PLAN.md Day 26 ("implement a small binary heap, then Kth Largest
Element in an Array").

Implement a MinHeap class backed by an array, supporting:
- push(val): insert a value, maintaining the heap property
- pop(): remove and return the minimum value
- peek(): return the minimum value without removing it
- size(): return the number of elements currently in the heap

All operations except peek/size should run in O(log n).
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {}

  /**
   * @return {number}
   */
  pop() {}

  /**
   * @return {number}
   */
  peek() {}

  /**
   * @return {number}
   */
  size() {
    return this.heap.length;
  }
}
