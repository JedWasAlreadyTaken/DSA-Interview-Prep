// Day 1 — Syntax refresh: destructuring, spread/rest, template literals, arrow functions
// Per PLAN.md: throwaway snippets exercising each, no LeetCode yet.
// Fill in each function below from scratch. No looking up syntax you can avoid —
// the point is to force it back into muscle memory.

// ---------------------------------------------------------------------------
// 1. Object destructuring
// Given a user object, extract `name` and `age` into standalone variables,
// and give `city` a default value of "Unknown" if it's missing.
function destructureUser(user) {
  // e.g. destructureUser({ name: "Jed", age: 30 })
  // should work even though `city` isn't present
  let { name, age, city = "Unknown" } = user;
  return { name, age, city };
}

// ---------------------------------------------------------------------------
// 2. Array destructuring — swap two variables in one line (no temp variable).
function swap(a, b) {
  // return [swapped a, swapped b] using array destructuring
  return [b, a];
}

// ---------------------------------------------------------------------------
// 3. Spread — merge two arrays into one new array (don't mutate either input).
function mergeArrays(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  return arr3;
}

// Spread — clone an object and override a single field, without mutating the original.
function cloneWithOverride(obj, key, value) {
  // return a new object equal to obj but with obj[key] = value
  return { ...obj, [key]: value };
}

// ---------------------------------------------------------------------------
// 4. Rest params — sum an arbitrary number of arguments.
function sum(...nums) {
  let total = 0;

  for (const num of nums) {
    total += num;
  }
  return total;
}

// ---------------------------------------------------------------------------
// 5. Template literals — build a multi-line greeting using a template literal
// (no string concatenation with +).
function greet(name, day) {
  // should return something like:
  // "Hi Jed,\nHope your Monday is going well."
  return `Hi ${name},\nHope your ${Monday} is going well.`;
}

// ---------------------------------------------------------------------------
// 6. Arrow functions
// Rewrite as an arrow function (single expression, implicit return):
function double(n) {
  return n * 2;
}
const doubleArrow = (n) => n * 2; // replace with an arrow function equivalent

// Gotcha: write an arrow function `makePoint(x, y)` that implicitly returns
// an OBJECT literal { x, y }. Remember object literals need parens around
// the body to avoid being parsed as a function block.
const makePoint = (x, y) => {
  (x, y);
}; // replace with an arrow function

module.exports = {
  destructureUser,
  swap,
  mergeArrays,
  cloneWithOverride,
  sum,
  greet,
  double,
  doubleArrow,
  makePoint,
};
