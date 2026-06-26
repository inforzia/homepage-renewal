# AGENTS.md

## Project Overview
- This project builds a largely static company homepage with Next.js.
- Hosting target is Netlify.
- Prefer static-first implementation and keep runtime behavior minimal.

## Core Rules
- This repository is PUBLIC. Treat every file, commit, pull request, workflow log, preview artifact, screenshot, and generated output as world-readable.
- Use the App Router and default to server components unless client logic is clearly required.
- Figma MCP is not available for this workflow. Treat Figma Sites pages as read-only visual and behavioral references.
- Analyze Figma Sites through Codex Chrome extension, Chrome DevTools, or CDP-based browser inspection.
- Reconstruct screens in project-native React / Next.js code for the final implementation. However, when following `docs/skills/figma-sites-to-nextjs.md` step 1, prioritize bringing the original site over as directly as possible into an analysis-only baseline HTML, and treat any conflicting "do not copy" guidance as lower priority for that baseline artifact. Runtime scripts should still be removed or disabled unless they are strictly required for visual verification.
- Preserve existing business logic, route structure, shared components, tokens, and state behavior unless the user explicitly asks for logic changes.
- When design changes arrive, scope updates to layout, copy, assets, styling, and clearly requested interaction behavior.
- If a skill requires information from the user, or if behavior may differ depending on the user's intent or approval, explicitly request the needed information and obtain the user's consent before proceeding.
- If a request is ambiguous, clarify the intended scope, target, and direction before proceeding. Use concise follow-up questions or concrete options when they help narrow the task efficiently.
- If a request is open to multiple reasonable interpretations or includes multiple possible cases, confirm which one the user wants before proceeding.
- If a task relies on any workflow document in `docs/skills/`, explicitly say which skill file in `docs/skills/` you are following when you start that work.
- Follow `.editorconfig` when creating or editing code and stylesheet files, including 4-space indentation and LF line endings.

## Public Repo Security Rules
- Never add, paste, commit, upload, or leave behind real secrets in this repository, even temporarily.
- Never expose API keys, access tokens, refresh tokens, OAuth client secrets, passwords, session cookies, SSH keys, private certificates, service account JSON, `.env` files, database URLs, webhook secrets, Netlify or GitHub credentials, cloud credentials, signed URLs, or internal-only endpoints.
- Never expose personal or customer data. This includes email addresses, phone numbers, physical addresses, account identifiers, invoices, contracts, unpublished business documents, private screenshots, exports, logs, or support data unless the user has explicitly confirmed the exact content is safe for a public repository.
- Use placeholders for examples and samples only, such as `YOUR_API_KEY_HERE` or `example@example.com`. Do not include real-looking values copied from tools, browsers, dashboards, emails, screenshots, or local files.
- Keep secrets out of all repository surfaces, especially `public/`, `docs/`, `.github/workflows/`, generated static output, test fixtures, seed data, screenshots, and copied third-party exports.
- If a task would require a secret or sensitive value, stop and ask the user to provide a safe public placeholder or to keep the real value in a platform secret manager or local untracked file. Do not write the real value into the repo for any reason.
- If there is any doubt about whether content is public-safe, treat it as sensitive by default and do not commit it until the user explicitly confirms it is safe to publish.

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
- Re-scan changed files for secrets, signed URLs, internal endpoints, and personal data before finishing.
- Update the relevant skill or notes when workflow expectations materially change.
