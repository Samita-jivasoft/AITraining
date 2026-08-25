# TaskBoard — Agent Guide

Project conventions for AI coding agents. TaskBoard is a task-board training app:
React 18 + Vite client, Express 5 API, and a JSON-file database behind a
repository layer, in an npm-workspaces monorepo (`client/`, `server/`, `shared/`).
Detailed, path-scoped rules live in `.claude/rules/` (Claude loads each when
editing matching files).

## Rule sets

- **Backend** — `.claude/rules/backend.md` (API, services, data access)
- **Frontend** — `.claude/rules/frontend.md` (components, styling, state)
- **Planning** — `.claude/rules/planning.md` (feature breakdown)
- **Testing** — `.claude/rules/testing.md` (hand-authored; Vitest conventions)

See `docs/rules-format.md` (in the Hypr plugin) for the rule block format.
