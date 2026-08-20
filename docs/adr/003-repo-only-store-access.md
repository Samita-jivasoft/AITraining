# ADR-0003: Repository-only access to the store

- **Status:** Proposed
- **Date:** 2026-08-13
- **Deciders:** Samita S.

## Context

- The server enforces a layered request flow: route → service → repository → store. 
- Services own everything the repositories deliberately.
- Nothing at the type level stops a service from importing `db/store.ts` directly, or a repository from adding a validation check 

## Decision

Use a lint rule to allow db/store.ts only in repositories, and keep cross-entity checks in services.

## Consequences

- Good: Services use repositories instead of importing `db/store.ts` directly.
- Good: Services keep cross-entity validation and activity recording where business intent is known.
- Bad: Moving persistence, referential checks, or activity semantics into the wrong layer can corrupt data, create orphaned references, or lose meaningful events.
