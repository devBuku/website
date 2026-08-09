---
publish: true
---

# Becoming a Better Engineer

## Goal

Build deeper engineering fundamentals instead of continuously adding technologies.

Focus on:

* DSA
* Core CS fundamentals

  * [[Operating Systems]]
  * [[Computer Networks]]
  * [[DBMS]]
* Linux and systems
* PostgreSQL
* Web development
* Backend engineering
* Distributed systems
* System design
* Practical engineering through projects

The goal is to move from:

> "I know this technology."

to:

> "I understand why this works and can reason about it."

## Current Stack

* Arch Linux
* i3wm
* Neovim
* Git
* PostgreSQL
* Docker
* React
* Node.js / Express
* TypeScript
* Python / Flask

## Editor

Use **Neovim** rather than turning the editor itself into a major learning project.

Focus on:

* Vim motions
* Buffers
* Splits
* Search
* File navigation
* LSP
* Diagnostics
* Formatting
* Git
* Debugging

Principle:

> The editor should support engineering work, not become the engineering work.

Avoid spending excessive time tweaking the configuration.

## Linux

Learn Linux beyond commands.

### Focus

* Processes
* Threads
* Files
* File descriptors
* Signals
* Pipes
* Permissions
* Environment variables
* System calls
* Filesystems
* Networking
* Services
* Logs
* SSH
* Shell scripting
* `systemd`

### Useful Tools

```text
ps
top / htop
kill
jobs
fg / bg
systemctl
journalctl
ss
ip
curl
dig
grep
sed
awk
find
xargs
chmod
chown
mount
df
du
lsof
strace
```

### Deeper Goal

Understand:

```text
Shell
  ↓
Process
  ↓
System call
  ↓
Kernel
  ↓
CPU / Memory / Filesystem / Network
```

Eventually understand basic Linux system calls through C:

```text
fork()
exec()
wait()
pipe()
dup2()
open()
read()
write()
socket()
```

## Computer Science Fundamentals

### DSA

Focus on understanding and recognition rather than collecting solutions.

* Arrays
* Strings
* Hashing
* Linked Lists
* Stacks
* Queues
* Trees
* Heaps
* Graphs
* Recursion
* Backtracking
* Greedy
* Dynamic Programming
* Sorting
* Searching
* Complexity analysis

For problem solving:

* Understand the pattern.
* Understand why the solution works.
* Know the complexity.
* Identify when the pattern applies.
* Avoid memorizing individual solutions.

## Operating Systems

Focus on:

* Processes
* Threads
* Scheduling
* Virtual memory
* Paging
* Synchronization
* Deadlocks
* Filesystems
* System calls

Related:

[[Processes]]

[[Threads]]

[[Virtual Memory]]

[[Deadlocks]]

[[Linux]]

## Computer Networks

Focus on understanding what happens when applications communicate.

```text
Application
    ↓
HTTP
    ↓
TCP
    ↓
IP
    ↓
Network
```

Important concepts:

* DNS
* HTTP / HTTPS
* TCP
* UDP
* Sockets
* Routing
* TLS
* TCP reliability
* TCP congestion
* Proxies
* Load balancers

Related:

[[HTTP]]

[[TCP]]

[[DNS]]

[[Sockets]]

## DBMS

Focus on understanding what the database is doing internally.

* Relational model
* SQL
* Indexes
* B-Trees
* Query planning
* `EXPLAIN ANALYZE`
* Transactions
* Isolation levels
* Locking
* MVCC
* WAL
* Replication
* Connection pooling

Important question:

> Why is this query slow?

Rather than only:

> How do I write this query?

Related:

[[PostgreSQL]]

[[Indexes]]

[[Transactions]]

[[MVCC]]

## PostgreSQL

Go deeper into PostgreSQL instead of learning more database technologies for now.

Focus on:

```text
SQL
 ↓
Query Planner
 ↓
Indexes
 ↓
Execution Plan
 ↓
Transactions
 ↓
MVCC
 ↓
WAL
 ↓
Storage
```

Practice understanding query plans and database behavior.

## Web Development

Do not keep adding frameworks without understanding the underlying concepts.

### Browser

Understand:

```text
URL
 ↓
DNS
 ↓
TCP
 ↓
TLS
 ↓
HTTP
 ↓
Server
 ↓
HTML / CSS / JS
 ↓
Browser
```

Focus on:

* HTTP
* Cookies
* Sessions
* CORS
* CSRF
* XSS
* Authentication
* Authorization
* WebSockets
* Browser storage
* Event Loop
* Async programming
* HTTP caching

### Backend

Focus on:

* Request lifecycle
* Middleware
* Connection pools
* Transactions
* Caching
* Queues
* Rate limiting
* Logging
* Background workers
* Retries
* Idempotency
* Failure handling
* Observability

Related:

[[Backend]]

[[HTTP]]

[[Authentication]]

[[Caching]]

[[Event Loop]]

## Projects

Use projects to connect different areas of knowledge.

Prefer one project that becomes progressively more complex over many small tutorial projects.

### Example Progression

1. Build a simple HTTP server.
2. Add routing.
3. Add PostgreSQL.
4. Add authentication.
5. Add Redis.
6. Add background jobs.
7. Dockerize it.
8. Deploy it.
9. Add logging and monitoring.
10. Load test it.
11. Find bottlenecks.
12. Improve the system.

### Learning Connections

```text
HTTP Server
    ↓
Networking
    ↓
Linux
    ↓
Backend
    ↓
PostgreSQL
    ↓
Redis
    ↓
Docker
    ↓
Deployment
    ↓
System Design
```

The project should be used to understand concepts, not just to add another project to the resume.

## Distributed Systems

Learn this after becoming comfortable with Linux, networking, databases, and backend systems.

Focus on:

* Replication
* Sharding
* Caching
* Message queues
* Consistency
* Distributed locks
* Load balancing
* Rate limiting
* Horizontal scaling
* Observability
* Failure handling

Possible technologies:

* Redis
* Kafka
* Docker

Do not learn Kubernetes just because it appears in job descriptions.

Understand the underlying concepts first.

## System Design

Think in terms of progression:

```text
Single Process
      ↓
Multithreading
      ↓
Client / Server
      ↓
Database
      ↓
Cache
      ↓
Queue
      ↓
Multiple Servers
      ↓
Load Balancer
      ↓
Distributed System
```

Focus on understanding why each layer becomes necessary.

Related:

[[System Design]]

[[Distributed Systems]]

[[Caching]]

[[Load Balancing]]

## Learning Principles

* Prefer depth over technology breadth.
* Understand fundamentals before abstractions.
* Build things instead of only watching tutorials.
* Ask why something works.
* Learn concepts that transfer between technologies.
* Don't collect frameworks.
* Don't turn tooling into the main hobby.
* Use projects to connect CS concepts with practical engineering.
* Revisit concepts regularly.
* Keep notes concise.
* Write down understanding, not documentation.

## Priority

### High Priority

* [[DSA]]
* [[Operating Systems]]
* [[Computer Networks]]
* [[DBMS]]
* [[Linux]]
* [[PostgreSQL]]
* [[Web Development]]

### Next

* Backend Engineering
* Docker
* Redis
* System Design
* Distributed Systems

### Supporting Tools

* Neovim
* Git
* tmux
* Shell
* i3wm

## Rule

Before learning another technology, ask:

> What problem does it solve?

> What underlying concept does it teach me?

> Do I understand the problem well enough to need this technology?

If the answer is no, strengthen the fundamentals first.

## TODO

- [ ] Build a deeper Linux foundation
- [ ] Become comfortable with Neovim
- [ ] Revisit DSA systematically
- [ ] Revisit OS fundamentals
- [ ] Revisit networking fundamentals
- [ ] Revisit DBMS fundamentals
- [ ] Go deeper into PostgreSQL
- [ ] Strengthen HTTP and web fundamentals
- [ ] Build one progressively complex backend/system project
- [ ] Learn distributed systems after the fundamentals are solid
- [ ] Learn system design through actual systems and trade-offs
