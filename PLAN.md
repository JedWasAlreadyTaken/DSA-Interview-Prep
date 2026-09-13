# 8-Week Plan (1 hour/day, ~5 days/week)

Starting point: comfortable with JS syntax historically, rusty from months off, no active pattern practice yet. Goal: technical-interview ready in 1-2 months.

40 sessions below. Life happens — if a day slips, don't double up, just shift everything right. Finishing in 7-9 weeks at this pace is still on target.

**Per-session shape (~60 min):**
- 5 min: skim previous day's solution, re-run it from memory
- 35-40 min: genuine attempt at today's problem(s), no notes/editorial
- 10-15 min: if stuck, check the editorial/NeetCode video, re-implement from scratch after (don't just read and move on)
- Log the pattern/gotcha in the folder's `NOTES.md` (create one per pattern once you've done a couple of problems)

Check off both `PLAN.md` and the per-pattern `README.md` as you go.

---

## Week 1 — JS refresh + Arrays/Hashing

- [ ] **Day 1** — `00-warmup`: destructuring, spread/rest, template literals, arrow functions. Write throwaway snippets exercising each, no LeetCode yet.
- [ ] **Day 2** — `00-warmup`: array methods (`map`/`filter`/`reduce`/`sort`/`flat`), `Map`/`Set`, `Object.entries`/`keys`/`values`. Same drill style.
- [ ] **Day 3** — `01-arrays-hashing`: Two Sum, Contains Duplicate
- [ ] **Day 4** — `01-arrays-hashing`: Valid Anagram, Group Anagrams
- [ ] **Day 5** — `01-arrays-hashing`: Top K Frequent Elements

## Week 2 — Finish Arrays/Hashing + Two Pointers

- [ ] **Day 6** — `01-arrays-hashing`: Product of Array Except Self
- [ ] **Day 7** — `02-two-pointers`: Valid Palindrome
- [ ] **Day 8** — `02-two-pointers`: 3Sum (part 1 — get brute force, then optimize)
- [ ] **Day 9** — `02-two-pointers`: 3Sum (finish), Container With Most Water
- [ ] **Day 10** — Review day: redo one problem from days 3-9 cold, no notes, timed 15 min

## Week 3 — Sliding Window + Stack

- [ ] **Day 11** — `03-sliding-window`: Best Time to Buy and Sell Stock
- [ ] **Day 12** — `03-sliding-window`: Longest Substring Without Repeating Characters
- [ ] **Day 13** — `04-stack`: Valid Parentheses
- [ ] **Day 14** — `04-stack`: Min Stack
- [ ] **Day 15** — Review day: redo one sliding-window + one stack problem, timed

## Week 4 — Binary Search + Linked List

- [ ] **Day 16** — `05-binary-search`: Binary Search, Search in Rotated Sorted Array
- [ ] **Day 17** — `06-linked-list`: Reverse Linked List, Merge Two Sorted Lists
- [ ] **Day 18** — `06-linked-list`: Reorder List
- [ ] **Day 19** — `06-linked-list`: Remove Nth Node From End of List, Linked List Cycle
- [ ] **Day 20** — Review day: redo binary search + one linked-list problem, timed

## Week 5 — Trees

- [ ] **Day 21** — `07-trees`: Invert Binary Tree, Maximum Depth of Binary Tree
- [ ] **Day 22** — `07-trees`: Same Tree, Subtree of Another Tree
- [ ] **Day 23** — `07-trees`: Binary Tree Level Order Traversal (BFS), Lowest Common Ancestor of a BST
- [ ] **Day 24** — `07-trees`: Validate Binary Search Tree, Kth Smallest Element in a BST
- [ ] **Day 25** — Review day: redo two tree problems (one DFS, one BFS), timed

## Week 6 — Heap + Backtracking

- [ ] **Day 26** — `08-heap-priority-queue`: implement a small binary heap, then Kth Largest Element in an Array
- [ ] **Day 27** — `08-heap-priority-queue`: Last Stone Weight, K Closest Points to Origin
- [ ] **Day 28** — `09-backtracking`: Subsets
- [ ] **Day 29** — `09-backtracking`: Combination Sum, Permutations
- [ ] **Day 30** — `09-backtracking`: Word Search

## Week 7 — Graphs

- [ ] **Day 31** — `10-graphs`: graph representations recap, Number of Islands (BFS/DFS)
- [ ] **Day 32** — `10-graphs`: Clone Graph, Max Area of Island
- [ ] **Day 33** — `10-graphs`: Pacific Atlantic Water Flow
- [ ] **Day 34** — `10-graphs`: Course Schedule, Course Schedule II (topological sort)
- [ ] **Day 35** — `10-graphs`: Number of Connected Components, Graph Valid Tree

## Week 8 — 1-D DP + Mock Interviews

- [ ] **Day 36** — `11-1d-dp`: Climbing Stairs, House Robber
- [ ] **Day 37** — `11-1d-dp`: House Robber II, Longest Palindromic Substring
- [ ] **Day 38** — `11-1d-dp`: Palindromic Substrings, Decode Ways
- [ ] **Day 39** — `11-1d-dp`: Coin Change, Maximum Product Subarray
- [ ] **Day 40** — `11-1d-dp`: Word Break, Longest Increasing Subsequence

## Buffer / Weeks 9+ — Mock interviews and gap-filling

Once Day 40 is done, switch from new patterns to interview simulation:

- Pick 1 random problem/day from a pattern you haven't touched in 2+ weeks, solve cold in 25-30 min, talking out loud as if in an interview (state brute force first, then optimize, state time/space complexity).
- Redo any problem that took more than one attempt to get right the first time.
- If a pattern still feels shaky, spend a day re-reading that pattern's `NOTES.md` and redoing its hardest problem from scratch.
- Optional stretch problems once core patterns feel solid: Trapping Rain Water, Longest Repeating Character Replacement, Koko Eating Bananas, Word Break II.

---

## Running solutions

```bash
npm install
node patterns/01-arrays-hashing/two-sum.js
npm test          # runs any *.test.js files with vitest
```
