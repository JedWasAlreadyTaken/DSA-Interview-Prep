# DSA Interview Prep

I'm a frontend/full-stack developer rebuilding data structures & algorithms fundamentals in JS/TS, running in parallel with my [Rust + wgpu project](https://github.com/JedWasAlreadyTaken/Jed-s-Rust-wgpu-Summer-Project), aiming to be technical-interview-ready for summer internship applications.

## Background

Most of my work has been shipping real products (see [newdryve](https://github.com/JedWasAlreadyTaken), NEAT, Sudo London), which builds product/engineering judgement but doesn't exercise algorithmic problem-solving the way technical interviews do. This repo tracks that separately: pattern-based practice, working through [NeetCode 150](https://neetcode.io/) in JS/TS.

Deliberately low-commitment to start (5-10h/fortnight, fit around a full course load and the Rust project), scaling up as more time frees up.

---

## Progress

- [x] Repo structure set up
- [ ] Warm-up: JS/TS syntax refresh (array/object methods, destructuring, `Map`/`Set`)
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

---

## Roadmap

### Phase 0: Warm-up
Rebuild JS/TS fluency before pattern work — destructuring, spread/rest, `map`/`filter`/`reduce`, `Set`/`Map`, arrow functions, basic TS generics. A handful of trivial Easy problems, not pattern practice yet.

### Phase 1: Core patterns (this fortnight onward)
Highest-frequency, lowest-overhead patterns first, via [NeetCode's roadmap](https://neetcode.io/roadmap):
- **Arrays/Hashing** — two sum, valid anagram, group anagrams, top-k frequent, product of array except self
- **Two Pointers** — valid palindrome, 3sum, container with most water
- **Sliding Window** — best time to buy/sell stock, longest substring without repeating characters
- **Stack** — valid parentheses, min stack
- **Binary Search** — classic binary search, search in rotated sorted array

### Phase 2: Beyond (once more time frees up)
Linked Lists → Trees (BFS/DFS) → Heaps → Backtracking → Graphs → 1-D DP, following the same NeetCode 150 progression.

**Resources**
- [NeetCode 150 roadmap](https://neetcode.io/roadmap)
- [NeetCode YouTube](https://www.youtube.com/@NeetCode)
- [LeetCode](https://leetcode.com/)

---

## Session mechanics

- 2 sessions/fortnight, ~2-3h each
- Per problem: ~20-25 min genuine attempt, then check the editorial/video if stuck — no grinding past 30 min this early
- Progress tracked via NeetCode's built-in checklist; this README's checklist is the phase-level view

---

## Repo structure

```
patterns/
  00-warmup/            JS/TS syntax refresh
  01-arrays-hashing/
  02-two-pointers/
  03-sliding-window/
  04-stack/
  05-binary-search/
```

Each pattern folder holds one file per problem (`problem-name.ts`), plus a short `NOTES.md` on the pattern once a few problems are done.

### Running solutions

```bash
npm install
npx tsx patterns/01-arrays-hashing/two-sum.ts
npm test          # runs any *.test.ts files with vitest
```
