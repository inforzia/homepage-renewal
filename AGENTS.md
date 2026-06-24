# AGENTS.md

## Project Overview
- This project builds a largely static company homepage with Next.js.
- Hosting target is Netlify.
- Prefer static-first implementation and keep runtime behavior minimal.

## Core Rules
- Use the App Router and default to server components unless client logic is clearly required.
- Figma MCP is not available for this workflow. Treat Figma Sites pages as read-only visual and behavioral references.
- Analyze Figma Sites through Codex Chrome extension, Chrome DevTools, or CDP-based browser inspection.
- Reconstruct screens in project-native React / Next.js code for the final implementation. However, when following `docs/skills/figma-sites-to-nextjs.md` step 1, prioritize bringing the original site over as directly as possible into an analysis-only baseline HTML, and treat any conflicting "do not copy" guidance as lower priority for that baseline artifact. Runtime scripts should still be removed or disabled unless they are strictly required for visual verification.
- Preserve existing business logic, route structure, shared components, tokens, and state behavior unless the user explicitly asks for logic changes.
- When design changes arrive, scope updates to layout, copy, assets, styling, and clearly requested interaction behavior.
- If a skill requires information from the user, or if behavior may differ depending on the user's intent or approval, explicitly request the needed information and obtain the user's consent before proceeding.
- If a task relies on the Figma Sites inspection workflow, explicitly say which skill in `docs/skills/` you are following.
- Follow `.editorconfig` when creating or editing code and stylesheet files, including 4-space indentation and LF line endings.

## Implementation Guidelines
- Keep components small, semantic, and content-oriented.
- Reuse existing shared components before creating new ones.
- Prefer CSS variables and shared tokens before introducing heavier styling patterns.
- Replace obfuscated or machine-generated naming with clear project-native names that describe component purpose.
- Measure spacing, typography, sizing, and responsive behavior from the rendered page instead of approximating by eye.
- Preserve natural asset proportions. Do not upscale logos, icons, or wordmarks beyond their rendered size unless the user explicitly requests a redesign.
- Use semantic HTML and accessible controls for navigation, buttons, inputs, dialogs, and overlays.
- Avoid unnecessary client state, effects, and browser-only code in static sections.
- If interactivity is added later, isolate it in narrowly scoped client components.

## Documentation Workflow
- High-level and task-level work items live in `docs/todo/`.
- Move fully completed todo files into `docs/todo/completed/`.
- Keep references and notes in `docs/note/` when a task needs durable implementation context.
- Keep repeatable task-specific workflows in `docs/skills/`.

## Final Checks
- Confirm the change does not break static hosting assumptions.
- Confirm rendered-site-derived updates did not overwrite hand-written logic.
- Update the relevant skill or notes when workflow expectations materially change.
