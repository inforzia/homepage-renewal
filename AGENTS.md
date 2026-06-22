# AGENTS.md

## Project Overview
- This project builds a largely static company homepage with Next.js.
- Hosting target is Netlify.
- Prefer static-first implementation and keep runtime behavior minimal.

## Core Rules
- Use the App Router and default to server components unless client logic is clearly required.
- Figma integration is only for design reflection. Business logic and non-visual behavior are implemented manually in code.
- Never modify the original Figma design file or its source frames. Treat the Figma source as read-only reference material at all times.
- When design changes arrive, preserve existing logic as much as possible and scope updates to layout, copy, assets, and styling.
- Do not apply Figma-driven sync automatically unless the user explicitly requests comparison and application.

## Figma Mapping Workflow
- Manage frame-to-code mapping in `docs/note/figma-screen-map.md`.
- Do not edit, rearrange, rename, detach, or overwrite anything in the original Figma source while inspecting or mapping designs.
- For each mapped frame, record:
  - Figma frame name
  - Figma URL
  - Node ID if available
  - Route or screen purpose
  - Target component or page file
  - Sync status
  - Notes about reusable components and implementation rules
- If a frame changes, summarize the design delta first and propose the code impact before editing.

## Implementation Guidelines
- Keep components small, semantic, and content-oriented.
- Prefer CSS variables and shared tokens before introducing heavier styling patterns.
- Avoid unnecessary client state, effects, and browser-only code in static sections.
- If interactivity is added later, isolate it in narrowly scoped client components.

## Documentation Workflow
- High-level and task-level work items live in `docs/todo/`.
- Move fully completed todo files into `docs/todo/completed/`.
- Keep references, notes, and design linkage docs in `docs/note/`.

## Final Checks
- Confirm the change does not break static hosting assumptions.
- Confirm Figma-derived updates did not overwrite hand-written logic.
- Update docs when routes, mappings, or implementation rules change.
