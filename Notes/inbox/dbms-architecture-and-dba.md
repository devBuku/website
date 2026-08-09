---
publish: true
---
# DBMS Architecture

## Why DBMS Uses Abstraction

A DBMS provides an abstract view of data so users do not need to know:

- How the data is stored
- Where the data is stored
- Which data structures are used internally

Goals:

- Simplify user interaction with the database
- Provide personalized views for different users

---

## Three-Schema Architecture

### 1. Physical (Internal) Level

#### What

- Lowest level of abstraction
- Describes how data is physically stored
- Uses the **Physical Schema** to define the physical storage structure of the database

#### Goal

- Efficient storage and data access
- Data is ultimately stored as bits and bytes

---

### 2. Logical (Conceptual) Level

#### What

- Describes **what** data is stored
- Defines the relationships between data
- Hides physical storage details from users
- Uses the **Conceptual Schema**


#### Goal

- Easy to understand and use

#### Key Point

- Users at this level do not need to know how the data is physically stored.
- Provides **physical data independence**.
  - Changes to physical storage (e.g. moving data from an HDD to an SSD) do not affect the logical schema.

---

### 3. View (External) Level

#### What

- Highest level of abstraction
- Provides different views of the same database for different users
- Uses **View Schemas** (Subschemas) to expose only the required part of the database

#### Goal

- Simplify interaction for end users
- Hide unnecessary data
- Improve security by restricting access

![[Pasted image 20260801112452.png]]

---

## Database Instance

### What

- The collection of information stored in the database at a particular point in time.
- Changes whenever data is inserted, updated, or deleted.

---

> **Interview Note:** When interviewers say "database schema," they usually mean the **Logical (Conceptual) Schema** unless stated otherwise.

## Database Schema (Logical Schema)

### What

The logical structure of the database.

It defines:

- Tables and their attributes (e.g. name, phone, address)
- Constraints (e.g. `NOT NULL`, `PRIMARY KEY`)
- Relationships between tables

### Why

- Acts as the blueprint of the database.
- Developers use the logical schema to design and build applications.

---

## Data Models

### What

- A way to describe the design of a database at the logical level.

---

## TODO

- Research: Run-Length Encoding (RLE) for image storage/compression.

---

## Related

- [[Database]]
- [[Database Management System]]
- [[Schema]]
- [[Data Independence]]
- [[Storage]]
- [[Database Security]]
