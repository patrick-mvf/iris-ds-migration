# 🧿 Iris Design System

The source of truth for **Iris** — MVF's multi-brand design system. Primitive values, semantic tokens, and component-level contextual tokens for the full portfolio of MVF brands.

This repo is intended to be linked into **Claude Design** as a design-system source, and consumed by any app that imports `@iris/tokens`.

## What's in here

```
tokens/
  primitive.tokens.json          # 879 tokens  — Colours + Size primitives
  semantic.tokens.json           # 640 tokens  — System + per-brand semantic layers
  contextual.light.tokens.json   # 238 tokens  — Component-level tokens, Light mode
```

All files are in the [W3C Design Tokens Community Group](https://tr.designtokens.org/format/) format, exported directly from Figma variables. Each token carries `$type`, `$value`, and Figma-specific metadata under `$extensions` (variable IDs, alias references, scopes).

## Brand coverage

The semantic layer ships `System` tokens plus dedicated token sets for:

Amazon · Clearliving · Connect Hearing · Core · Eco Experts · Expert Market · Expert Reviews · FindPro USA · GoWizard · Hearclear · Lasik-Eyes · MVF · Startups · Techco · WBE

Switch brands via the `brand-element` variable in the contextual layer.

## For Claude Design

Link this repo as a design-system source (**Organization Settings → Design Systems → New → link GitHub repo**). Claude Design will read the tokens and automatically apply Iris's visual language to every new project.

**Primary source of truth:** `semantic.tokens.json` — start here. It references the primitives and is what the component layer and live sites resolve against. `primitive.tokens.json` defines raw colour/size values; `contextual.light.tokens.json` maps semantic tokens to component roles (buttons, cards, inputs, etc.) for Light mode.

**Reference components** live in [`examples/`](./examples) — `Button`, `Card`, `Input`, and a composed `PageTemplate` extracted directly from Figma. They consume the tokens via CSS custom properties (`var(--button/default, #4444ca)` etc.) and are the best place to pattern-match from when recreating components the system doesn't already ship.

## Live examples

These production sites are built on Iris and are the best visual reference for recreating the system. Each uses a different brand set from `semantic.tokens.json` — switch via the `brand-element` variable in the contextual layer.

- **Eco Experts** — https://www.theecoexperts.co.uk/ (brand: `Eco Experts`)
- **Hearclear** — https://www.hearclear.com/ (brand: `Hearclear`)
- **Clearliving** — https://www.clearliving.com/ (brand: `Clearliving`)

Expect: comparison tables, quote/lead-capture forms, trust badges, editorial hero sections, long-form content pages, sticky CTAs. Layouts are content-led and conversion-focused rather than app-shell / dashboard.

## For engineers

Install as a dependency:

```bash
npm install @iris/tokens
```

Generated CSS variables, JS exports, and Tailwind presets can be built from the source JSON via Style Dictionary, Tokens Studio's sync, or any W3C-format-aware build tool. Wire up whichever fits your stack.

## Updating tokens

1. Edit variables in Figma.
2. Re-export via **Figma → Libraries → Variables → Export**, or push from Tokens Studio.
3. Replace the relevant `*.tokens.json` file in `tokens/`, commit, and bump `package.json` if the change is breaking.

## Known gaps

- **Dark mode isn't included yet.** The contextual layer is Light only (`contextual.light.tokens.json`). When Dark is ready, export it as `contextual.dark.tokens.json` alongside.
- Two stray top-level tokens exist in the exports (`✏️ Product Intro Label` in semantic, `brand-element` in contextual). These are intentional variables but sit outside the usual hierarchy — worth tidying in a future pass.

## Version

This repo tracks **Iris v4.7**.
