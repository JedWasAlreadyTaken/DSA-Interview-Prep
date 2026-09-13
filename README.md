# DSA Interview Prep

I'm a frontend/full-stack developer rebuilding data structures & algorithms fundamentals in JS, running in parallel with my [Rust + wgpu project](https://github.com/JedWasAlreadyTaken/Jed-s-Rust-wgpu-Summer-Project), aiming to be technical-interview-ready for summer internship applications.

## Background

Most of my work has been shipping real products (see [newdryve](https://github.com/JedWasAlreadyTaken), NEAT, Sudo London), which builds product/engineering judgement but doesn't exercise algorithmic problem-solving the way technical interviews do. This repo tracks that separately: pattern-based practice, working through [NeetCode 150](https://neetcode.io/) in plain JS.

Structured as a daily plan — see [PLAN.md](./PLAN.md) — targeting interview-readiness in about 1-2 months at roughly an hour a day.

---

## Progress

- [x] Repo structure set up
- [ ] Warm-up: JS syntax refresh (array/object methods, destructuring, `Map`/`Set`)
- [ ] Arrays & Hashing
- [ ] Two Pointers
- [ ] Sliding Window
- [ ] Stack
- [ ] Binary Search
- [ ] Linked List
- [ ] Trees
- [ ] Heap / Priority Queue
- [ ] Backtracking
- [ ] Graphs
- [ ] 1-D Dynamic Programming
- [ ] Mock interview / review buffer

Day-by-day breakdown lives in [PLAN.md](./PLAN.md); this checklist is the phase-level view.

---

## Roadmap

Full daily schedule: [PLAN.md](./PLAN.md). Summary, following [NeetCode's roadmap](https://neetcode.io/roadmap):

- **Warm-up** — destructuring, spread/rest, `map`/`filter`/`reduce`, `Set`/`Map`, arrow functions
- **Arrays/Hashing** — two sum, valid anagram, group anagrams, top-k frequent, product of array except self
- **Two Pointers** — valid palindrome, 3sum, container with most water
- **Sliding Window** — best time to buy/sell stock, longest substring without repeating characters
- **Stack** — valid parentheses, min stack
- **Binary Search** — classic binary search, search in rotated sorted array
- **Linked List** — reverse linked list, merge two sorted lists, reorder list, cycle detection
- **Trees** — invert/max depth, same tree, level order (BFS), validate BST, kth smallest
- **Heap / Priority Queue** — kth largest, last stone weight, k closest points
- **Backtracking** — subsets, combination sum, permutations, word search
- **Graphs** — number of islands, clone graph, course schedule (topological sort)
- **1-D DP** — climbing stairs, house robber, longest palindromic substring, coin change, word break

**Resources**
- [NeetCode 150 roadmap](https://neetcode.io/roadmap)
- [NeetCode YouTube](https://www.youtube.com/@NeetCode)
- [LeetCode](https://leetcode.com/)

---

## Session mechanics

- 1 hour per sitting, not a marathon — short and frequent beats long and rare
- Per problem: ~20-25 min genuine attempt, then check the editorial/video if stuck — no grinding past 30 min this early
- Progress tracked both in [PLAN.md](./PLAN.md) (daily) and NeetCode's built-in checklist; this README's checklist is the phase-level view

---

## Repo structure

```
patterns/
  00-warmup/                JS syntax refresh
  01-arrays-hashing/
  02-two-pointers/
  03-sliding-window/
  04-stack/
  05-binary-search/
  06-linked-list/
  07-trees/
  08-heap-priority-queue/
  09-backtracking/
  10-graphs/
  11-1d-dp/
```

Each pattern folder holds one file per problem (`problem-name.js`), plus a short `NOTES.md` on the pattern once a few problems are done.

### Running solutions

```bash
npm install
node patterns/01-arrays-hashing/two-sum.js
npm test          # runs any *.test.js files with vitest
```
