---
title: "Things I Learned Building Real Projects (Beyond Tutorials)"
date: "2025-07-10"
readTime: "5 min read"
tags: ["Software Engineering", "Best Practices", "Architecture", "Career"]
excerpt: "The most important lessons from shipping production software — clean code, architecture decisions, Git workflows, debugging strategies, deployment wisdom, and working effectively in teams."
---

## Beyond the Tutorial Gap

Every developer hits the wall between finishing tutorials and building real projects. The difference isn't technical skill — it's engineering judgment. Here's what I've learned from shipping production software.

## 1. Clean Code Is About Reading, Not Writing

Your code is read 10x more than it's written. Optimize for the reader:

```javascript
// Hard to understand
function calc(a, b, c) {
  return a * b - c / a + Math.sqrt(b);
}

// Clear
function calculateDiscountedPrice(basePrice, discountPercent, taxRate) {
  const discount = basePrice * (discountPercent / 100);
  const afterDiscount = basePrice - discount;
  const tax = afterDiscount * taxRate;
  return afterDiscount + tax;
}
```

**Naming is the most important optimization** — a well-named function eliminates the need for comments.

### Rule of Thumb
- If you need a comment to explain *what* the code does, rename the variable/function
- If you need a comment to explain *why*, that's a good comment (business logic, workaround, edge case)

## 2. Architecture Is About Trade-offs

There's no perfect architecture. Every decision involves trade-offs:

| Decision | Trade-off |
|----------|-----------|
| Monolith vs Microservices | Simplicity vs Scalability |
| SQL vs NoSQL | Consistency vs Flexibility |
| REST vs GraphQL | Simplicity vs Precision |
| Server-side vs Client-side rendering | SEO vs Interactivity |

The key is making intentional, informed trade-offs — not cargo-culting what big companies use.

### What Worked for the College ERP
- **Monolithic backend** — Four people, one codebase, faster shipping
- **MongoDB** — Flexible schemas for evolving requirements
- **REST** — Simple, well-understood, easy to document

## 3. Git Workflows Matter

My early projects had:
- One branch (`main`)
- Commits like "fix bugs" and "update"
- Panic when merge conflicts appeared

Now I follow:

### Feature Branch Workflow
```bash
git checkout -b feat/attendance-bulk-upload
# ... work ...
git add -p  # Review changes before staging
git commit -m "feat: add bulk attendance upload for faculty"
git push origin feat/attendance-bulk-upload
# Create PR → Code review → Merge
```

### Commit Message Convention
```
type(scope): description

Types: feat, fix, refactor, docs, chore, style
Scope: component or module affected
```

Examples:
- `feat(auth): add JWT refresh token rotation`
- `fix(api): handle null attendance records`
- `refactor(db): extract user schema to separate module`

### What I Avoid
- `git push --force` (unless absolutely necessary and communicated)
- Committing secrets, `.env`, or `node_modules`
- Large, unfocused commits

## 4. Debugging Is a Skill

The best debugging advice I received: **"Read the error message."**

My debugging process:

```
1. Reproduce the bug consistently
2. Read the error message (really read it)
3. Identify what changed since it last worked
4. Add logging at each step of the suspected code path
5. Isolate the minimal reproduction case
6. Fix → Test → Verify
```

### Tools I Rely On
- **console.log** — Still the most effective debugging tool
- **Browser DevTools** — Network tab, React DevTools, performance tab
- **Postman** — API testing without the frontend
- **VS Code debugger** — Step-through for complex logic

## 5. Deployment Is Part of Development

I used to think deployment was an afterthought — build first, figure out deployment later. This caused:

- Midnight debugging sessions
- SSL certificate failures
- Database connection timeouts
- "But it works on my machine" syndrome

Now I think about deployment from day one:

- **Environment variables** — Configured before writing a single API call
- **Logging** — Structured logging from the first route handler
- **Health endpoints** — `/api/health` returns DB connection status, memory usage, uptime
- **Graceful shutdown** — Handle SIGTERM, close DB connections, finish pending requests

```javascript
process.on('SIGTERM', async () => {
  await mongoose.connection.close();
  server.close(() => process.exit(0));
});
```

## 6. Working in Teams Changed Everything

Building solo is easy. Building with a team is where engineering maturity develops.

### Communication Patterns That Worked

**Daily Standups (15 min)**
- What did I do yesterday?
- What will I do today?
- What's blocking me?

**Code Reviews**
- Review within 24 hours
- Focus on logic, not style (use a formatter)
- Ask questions instead of making demands: "What do you think about extracting this to a utility function?"

**Documentation**
- API endpoints documented before implementation
- Architecture decisions recorded with rationale
- README updated with setup instructions

## Putting It All Together

The most important thing I've learned is that **engineering is a craft**. It's not about knowing the most frameworks or writing the cleverest code. It's about:

- Making sound decisions under constraints
- Writing code others can understand and maintain
- Learning from mistakes and documenting them
- Building systems that solve real problems for real people

Every project I ship makes me better at my craft. And that's the real goal.

---

*Have your own lessons learned? I'd love to hear them. Reach out on [GitHub](https://github.com/devBuku) or [LinkedIn](https://www.linkedin.com/in/shubhayan-bagchi-b83522275).*
