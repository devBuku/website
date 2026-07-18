---
title: "My Journey Preparing for Software Engineering Interviews"
date: "2025-07-01"
readTime: "6 min read"
tags: ["Career", "DSA", "Interview Prep", "Learning"]
excerpt: "How I'm preparing for software engineering interviews — my DSA roadmap, core CS revision strategy, project building philosophy, and staying consistent through the process."
---

## Why I'm Writing This

I'm currently in my final semester of B.Tech (8th semester completed, result pending), actively preparing for software engineering roles starting August 1. This post documents my preparation strategy — not because I've "made it," but because I believe the process itself is worth sharing.

## The DSA Roadmap

I follow a structured approach rather than randomly solving problems:

### Phase 1: Fundamentals (Weeks 1-2)
- **Arrays & Hashing** — Two-pointer, sliding window, prefix sum
- **Strings** — Pattern matching, anagrams, palindromes
- **Linked Lists** — Reversal, cycle detection, merge operations

### Phase 2: Core Data Structures (Weeks 3-5)
- **Trees** — BST, traversals, LCA, path problems
- **Graphs** — BFS, DFS, Dijkstra, topological sort, union find
- **Stacks & Queues** — Monotonic stacks, deque applications

### Phase 3: Advanced Topics (Weeks 6-8)
- **Dynamic Programming** — 0/1 KnapSack, LCS, LIS, grid DP, DP on trees
- **Heaps** — Top K problems, median finding
- **Tries** — Prefix matching, autocomplete systems

### Phase 4: Revision & Mock Interviews (Ongoing)
- 5 random problems daily from previously solved topics
- Weekly mock interviews with peers
- Time-bound practice sessions

## LeetCode Strategy

Quality over quantity is my approach:

```javascript
// My practice template
function solveProblem(problem) {
  // 1. Understand — 5 min (no coding)
  // 2. Brute force — state the obvious solution
  // 3. Optimize — identify bottlenecks
  // 4. Code — clean, structured, edge cases
  // 5. Test — walk through examples, edge cases

  // Time complexity analysis
  // Space complexity analysis
}
```

**Target**: 150-200 quality problems (not 500+ random problems)

### Key Patterns I Focus On

| Pattern | Example Problems |
|---------|-----------------|
| Sliding Window | Longest Substring Without Repeating, Min Window Substring |
| Two Pointers | 3Sum, Container With Most Water, Trapping Rain Water |
| BFS/DFS on Trees | Level Order, Max Depth, Serialize/Deserialize |
| Graph Traversal | Number of Islands, Course Schedule, Word Ladder |
| DP Patterns | Climbing Stairs, Coin Change, Edit Distance, LCS |

## Core CS Revision

Interviews test fundamental CS knowledge beyond DSA:

### Operating Systems
- Process vs Thread, scheduling algorithms, deadlock
- Memory management, paging, segmentation
- System calls, IPC mechanisms
- Synchronization: mutex, semaphore, monitors

### Database Management Systems
- Normalization (1NF through BCNF)
- SQL queries, joins, indexing
- Transactions, ACID properties, isolation levels
- NoSQL vs SQL design decisions

### Computer Networks
- OSI/TCP-IP model, HTTP/HTTPS, DNS
- TCP vs UDP, congestion control, flow control
- Load balancing, CDN, caching strategies
- Web security: CORS, XSS, CSRF, HTTPS

### Object-Oriented Programming
- Encapsulation, inheritance, polymorphism, abstraction
- SOLID principles
- Design patterns: Singleton, Factory, Observer, Strategy

## Project-Based Learning

I believe projects teach you what theory cannot. My preparation includes:

1. **Building** — The College ERP was my flagship project. Going through the full cycle of design, development, deployment, and maintenance taught me more than any course.

2. **Architecting** — I spend time thinking about system design: how would I scale the ERP for 10,000 users? What database would I choose for a real-time chat app?

3. **Documenting** — Writing these blog posts forces me to organize my thoughts and identify gaps in my understanding.

## Staying Consistent

Consistency is the hardest part of interview preparation:

### My Daily Routine

```
Morning (2 hours) — DSA Practice
  2 LeetCode problems (1 new + 1 review)
  Pattern recognition exercise

Afternoon (1 hour) — Core CS
  Study one topic with active recall
  Write summary notes

Evening (1 hour) — Project Work
  Build features, refactor code, or write docs
  Deploy something

Night (30 min) — Revision
  Review flashcards
  Plan tomorrow's focus
```

### Tools I Use

- **Anki** — Spaced repetition for core CS concepts
- **Notion** — Track problems solved, patterns learned, topics covered
- **LeetCode** — Primary practice platform
- **NeetCode** — For pattern-based problem organization

## What I've Learned So Far

1. **Start before you're ready** — I delayed interview prep for months thinking I needed to be "better prepared." The best time to start was yesterday.

2. **Understanding > Memorizing** — Knowing *why* a solution works is more important than memorizing the code. Interviews test your thinking process.

3. **Teach to learn** — Explaining a concept to someone else reveals gaps in your understanding. I practice by writing these posts and mentoring juniors.

4. **Rest is productive** — Burnout is real. Taking breaks, sleeping well, and stepping away from the screen leads to better problem-solving.

## What's Next

For the remainder of July, my focus is:

- Complete Core CS revision (OS, DBMS, CN, OOP)
- Reach 150 LeetCode problems solved with written explanations
- Prepare concise project explanations (what, why, how, impact)
- Practice behavioral questions using the STAR method
- Apply to companies starting August 1

---

*I'll update this post as my journey progresses. If you're on a similar path, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/shubhayan-bagchi-b83522275). Would love to connect with fellow preparers.*
