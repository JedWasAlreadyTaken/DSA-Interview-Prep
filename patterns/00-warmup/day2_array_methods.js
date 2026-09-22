// Day 2 — Array methods, Map/Set, Object.entries/keys/values
// Per PLAN.md: throwaway snippets exercising each, no LeetCode yet.
// Fill in each function below from scratch.

// ---------------------------------------------------------------------------
// 1. map — double every number in an array (return a new array).
function doubleAll(nums) {
  return nums.map((num) => num * 2);
}

// ---------------------------------------------------------------------------
// 2. filter — return only the even numbers.
function evensOnly(nums) {
  return nums.filter((num) => num % 2 === 0);
}

// ---------------------------------------------------------------------------
// 3. reduce — sum an array of numbers using reduce (not a for loop).
function sumWithReduce(nums) {
  return nums.reduce((total, nums) => total + nums, 0);
}

// reduce — count how many times each word appears in an array of strings,
// returning a plain object, e.g. ["a","b","a"] -> { a: 2, b: 1 }
function wordFrequency(words) {
  return words.reduce((counts, word) => {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {});
}

// ---------------------------------------------------------------------------
// 4. sort — sort an array of { name, age } objects by age, ascending.
// Remember: sort() mutates in place and its default compare is string-based —
// return a NEW sorted array without mutating the input.
function sortByAge(people) {
  return [...people].sort((a, b) => a.age - b.age);
}

// ---------------------------------------------------------------------------
// 5. flat — flatten a nested array by one level, e.g. [[1,2],[3],[4,5]] -> [1,2,3,4,5]
function flattenOneLevel(nested) {
  return nested.flat();
}

// ---------------------------------------------------------------------------
// 6. Map — build a Map counting frequency of items in an array
// (same idea as wordFrequency, but using a real Map instead of an object).
function frequencyMap(items) {
  return items.reduce((counts, item) => {
    counts.set(item, (counts.get(item) ?? 0) + 1);
    return counts;
  }, new Map());
}

// ---------------------------------------------------------------------------
// 7. Set — dedupe an array, preserving the first occurrence's order.
function dedupe(arr) {
  return [...new Set(arr)];
}

// ---------------------------------------------------------------------------
// 8. Object.entries / keys / values
// Given an object of { itemName: price }, return an array of
// "itemName: $price" strings using Object.entries.
function formatPrices(prices) {
  return Object.entries(prices).map(([key, value]) => `${key}: $${value}`);
}

// Given an object, return true if every value is truthy, using Object.values.
function allValuesTruthy(obj) {
  return Object.values(obj).every((item) => !!item);
}

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
