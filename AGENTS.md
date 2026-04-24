# AGENTS.md

Brief for AI coding agents (Claude Design, Claude Code, Cursor, Copilot, etc.) working against this repo.

## What this repo is

**Iris** is MVF Global's multi-brand, multi-site design system. This repo is its source of truth — tokens + reference components — exported from Figma and consumed by WordPress (live production), React, and Figma itself. It is **not** a component library you can `npm install` and render; it is the design contract the downstream systems agree on.

## What lives here

| Path | Purpose |
|---|---|
| `primitive.tokens.json` | Raw colour + size primitives. W3C Design Tokens format. |
| `semantic.tokens.json` | System + per-brand semantic layer. References primitives. |
| `contextual.light.tokens.json` | Component-role tokens for Light mode. Maps the live theme's CSS variables 1:1. |
| `brands.json` | Distilled per-brand palette/font/radius summary for the 6 brands with dedicated styling. |
| `components.md` | Canonical catalog of all ~45 Iris components. Start here to understand scope. |
| `examples/*.tsx` | Reference components (Button, Card, Input, PageTemplate, CtaCard, ProsCons, HighlightBox). Pattern-match from these. |
| `DESIGN.md` | System overview. Follows the [Google Labs DESIGN.md](https://github.com/google-labs-code/design.md) v1-alpha spec — YAML front matter of Core/System tokens + markdown prose in the prescribed 8 sections (Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts). Can be linted / diffed / exported via the `design.md` CLI. |
| `README.md` | User-facing introduction. |

## How to think about Iris

- **Content/conversion-focused, not dashboard.** Iris powers comparison tables, lead-capture forms, editorial hero sections, trust badges, sticky CTAs, long-form review pages. It does NOT ship sidebars, data tables, modals, toasts, form-heavy app shells, or admin UI patterns.
- **Multi-brand.** The same semantic slots resolve to different palettes across Amazon, Clearliving, Connect Hearing, Core, Eco Experts, Expert Market, Expert Reviews, FindPro USA, GoWizard, HearClear, Lasik Eyes, MVF, Startups, Techco, WBE. Switch via the `brand-element` variable in `contextual.light.tokens.json`, or via the brand data in `brands.json`.
- **Three token strata, not one.** Primitive → Semantic → Contextual. When a component references a token, it should reference the lowest layer that makes semantic sense (contextual > semantic > primitive). Primitives are the fallback value, not the source call.
- **Light only, for now.** `contextual.light.tokens.json` is the only contextual layer. Dark is a planned follow-up (export as `contextual.dark.tokens.json` alongside).

## Rules for agents doing work here

1. **Never invent new token paths.** If a component needs a colour, map it to an existing token. If no token fits, flag it — don't silently coin a new name.
2. **Reference contextual tokens first.** Components (atoms onwards) should consume `--button/*`, `--card/*`, `--input/*`, `--hero-cta/*`, etc. — not raw primitives. The contextual layer is what the live site uses.
3. **Preserve escaped slashes in CSS variable names.** The W3C export uses `/` in token paths (e.g. `button/default`). In CSS this becomes `var(--button\/default, fallback)`. In the `examples/*.tsx` files this is written `var(--button\\/default, fallback)` because JSX string-escapes the backslash. Follow the existing convention.
4. **Include fallback values on every `var()`.** The repo is published standalone; consumers may not have compiled the tokens yet. Fallbacks let examples render meaningfully in isolation.
5. **When adding a reference component, pattern-match `examples/Button.tsx` / `examples/Card.tsx`.** Same file header format (Figma node id, variant matrix, token refs), same `containerStyle` / `innerStyle` function structure, same prop-typed variant enums.
6. **Don't add production tooling.** No Style Dictionary config, no build scripts, no test runners — this repo is deliberately just source JSON + reference components. Downstream consumers own compilation.
7. **Don't touch the exported token JSON files by hand.** They are generated from Figma. Changes belong in Figma and are re-exported. The only exception is tidying the two stray top-level tokens noted in README.md's "Known gaps".

## Common asks and where to go

| Ask | Look at |
|---|---|
| "What brands are supported and how do they differ?" | `brands.json` |
| "What components exist in Iris?" | `components.md` |
| "How do I recreate the Button in my framework?" | `examples/Button.tsx` |
| "What does the real live site look like?" | README.md §"Live examples" |
| "Where's the Dark theme?" | Not available — see README.md §"Known gaps" |
| "Can I use a token I don't see in the exports?" | No. Ask first. |

## Things NOT to do

- Don't assume this is a generic boilerplate DS — it has specific brand semantics and conversion-focused intent.
- Don't migrate the tokens to a different schema. W3C DTCG format is the contract.
- Don't hardcode colours in reference components. Every visual value must come via `var(--token, fallback)`.
- Don't add CSS frameworks (Tailwind, Bootstrap, Stitches, etc.) — the examples are deliberately styled with inline styles + CSS custom properties so they're framework-agnostic.
- Don't generate documentation files proactively — this file, `components.md`, `DESIGN.md`, and `README.md` are the full docset. Update in place.
