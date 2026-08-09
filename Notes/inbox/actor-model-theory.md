---
publish: true
date: 2026-08-01
tags: [concurrency, message-passing]
---

# Actor Model Theory

The actor model treats **actors** as the universal primitive of concurrent computation. An actor can:

- send messages to other actors,
- create new actors,
- decide how to handle each incoming message.

## Why Actors

- No shared locks — actors communicate only via immutable messages.
- State changes are driven entirely by message delivery.
- Failures are isolated to a single actor's mailbox.

## Detail

```go
type mailbox chan Message

func spawn(fn Actor) mailbox {
  in := make(chan Message)
  for m := range in {
    fn(m)
  }
  return in
}
```

## Related

- [[stateless-boundary]] links to a published note by slug.
- [[Stateless boundary]] also links to it, case-insensitively.
- [[Neverland Goblins Protocol]] is an unresolved wikilink → plain text.
- Web link to its own page: [[actor-model-theory|detail on the actor model]].

![[actor-hero.png]]

![[concurrency-diagram.png]]

- [ ] write the note
- [x] publish it