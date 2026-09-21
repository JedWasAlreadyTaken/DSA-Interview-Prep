// Day 2 — Array methods, Map/Set, Object.entries/keys/values
// Per PLAN.md: throwaway snippets exercising each, no LeetCode yet.
// Fill in each function below from scratch.

// ---------------------------------------------------------------------------
// 1. map — double every number in an array (return a new array).
function doubleAll(nums) {}

// ---------------------------------------------------------------------------
// 2. filter — return only the even numbers.
function evensOnly(nums) {}

// ---------------------------------------------------------------------------
// 3. reduce — sum an array of numbers using reduce (not a for loop).
function sumWithReduce(nums) {}

// reduce — count how many times each word appears in an array of strings,
// returning a plain object, e.g. ["a","b","a"] -> { a: 2, b: 1 }
function wordFrequency(words) {}

// ---------------------------------------------------------------------------
// 4. sort — sort an array of { name, age } objects by age, ascending.
// Remember: sort() mutates in place and its default compare is string-based —
// return a NEW sorted array without mutating the input.
function sortByAge(people) {}

// ---------------------------------------------------------------------------
// 5. flat — flatten a nested array by one level, e.g. [[1,2],[3],[4,5]] -> [1,2,3,4,5]
function flattenOneLevel(nested) {}

// ---------------------------------------------------------------------------
// 6. Map — build a Map counting frequency of items in an array
// (same idea as wordFrequency, but using a real Map instead of an object).
function frequencyMap(items) {}

// ---------------------------------------------------------------------------
// 7. Set — dedupe an array, preserving the first occurrence's order.
function dedupe(arr) {}

// ---------------------------------------------------------------------------
// 8. Object.entries / keys / values
// Given an object of { itemName: price }, return an array of
// "itemName: $price" strings using Object.entries.
function formatPrices(prices) {}

// Given an object, return true if every value is truthy, using Object.values.
function allValuesTruthy(obj) {}

module.exports = {
  doubleAll,
  evensOnly,
  sumWithReduce,
  wordFrequency,
  sortByAge,
  flattenOneLevel,
  frequencyMap,
  dedupe,
  formatPrices,
  allValuesTruthy,
};
