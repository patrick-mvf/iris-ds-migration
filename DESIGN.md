---
version: alpha
name: Iris
description: Multi-brand design system powering MVF Global's portfolio of comparison and review sites. This file encodes the Core/System defaults — each brand (Eco Experts, HearClear, ClearLiving, Expert Reviews, Lasik Eyes) overrides a consistent subset of these tokens. See brands.json for per-brand deltas.
colors:
  # Core / System — primary brand (indigo)
  primary:            "#4444ca"
  primary-lightest:   "#fbfbfe"
  primary-lighter:    "#f3f3fc"
  primary-light:      "#eeeefb"
  primary-dark:       "#252590"
  primary-darker:     "#0f0f4b"
  primary-darkest:    "#08082b"

  # Interactive — inherits primary in Core; brands override
  interactive:          "#4444ca"
  interactive-lightest: "#fbfbfe"
  interactive-lighter:  "#f3f3fc"
  interactive-light:    "#eeeefb"
  interactive-dark:     "#252590"
  interactive-darker:   "#0f0f4b"
  interactive-darkest:  "#08082b"

  # Surface
  surface:          "#c2c2f1"
  surface-lightest: "#fbfbfe"
  surface-lighter:  "#f3f3fc"
  surface-light:    "#eeeefb"

  # Neutral scale
  neutral-white:    "#ffffff"
  neutral-lightest: "#fafafa"
  neutral-lighter:  "#f4f4f5"
  neutral-light:    "#eeeeef"
  neutral-default:  "#c6c6c9"
  neutral-dark:     "#9f9fa5"
  neutral-darker:   "#565660"
  neutral-darkest:  "#36363d"
  neutral-black:    "#18181c"

  # Semantic — info / warning / error / success
  info:     "#0075ff"
  info-dark:    "#005ecc"
  info-lightest: "#e5f1ff"
  warning:  "#ff9a00"
  warning-dark: "#cc7b00"
  warning-darker: "#663e00"
  warning-lightest: "#ffebcc"
  error:    "#ed2012"
  error-dark:   "#8e130b"
  error-lightest: "#fbd2d0"
  success:  "#73b44b"
  success-dark: "#5c903c"
  success-darker: "#456c2d"
  success-lightest: "#e3f0db"

  # Text
  text-default:   "{colors.neutral-black}"
  text-heading:   "{colors.neutral-black}"
  text-secondary: "{colors.neutral-darker}"
  text-tertiary:  "{colors.neutral-dark}"
  text-inverted:  "{colors.neutral-white}"
  text-brand:     "{colors.primary}"
  text-link:      "{colors.primary}"
  text-link-hover: "{colors.primary-dark}"

  # Background
  background:         "{colors.neutral-white}"
  background-brand:   "{colors.surface-lighter}"
  background-primary: "{colors.primary}"
  background-footer:  "{colors.primary-dark}"
  background-disabled: "{colors.neutral-light}"
  background-placeholder: "{colors.neutral-light}"

  # Focus — WCAG-compliant orange (not brand colour, for accessibility)
  focus: "#ff9a00"

typography:
  heading-2xl:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: "700"
    lineHeight: 4rem
    letterSpacing: -0.03em
  heading-xl:
    fontFamily: Inter
    fontSize: 2.75rem
    fontWeight: "700"
    lineHeight: 3.375rem
    letterSpacing: -0.02em
  heading-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: "600"
    lineHeight: 2.875rem
    letterSpacing: -0.01em
  heading-md:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: "600"
    lineHeight: 2.625rem
    letterSpacing: -0.01em
  heading-sm:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: "600"
    lineHeight: 2.25rem
  heading-xs:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: "600"
    lineHeight: 2rem
  body-xl:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: "400"
    lineHeight: 2rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: "400"
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: "400"
    lineHeight: 1.625rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: "400"
    lineHeight: 1.5rem
  body-xs:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: "400"
    lineHeight: 1rem
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: "600"
    lineHeight: 1.25rem
    letterSpacing: 0.03em

rounded:
  none: "0"
  xs:   0.25rem
  sm:   0.5rem
  md:   0.75rem
  lg:   1rem
  xl:   1.5rem
  "2xl": 2rem
  full: 9999px

spacing:
  unit:   8px
  "5xs":  2px
  "4xs":  4px
  "3xs":  8px
  "2xs":  12px
  xs:     16px
  sm:     24px
  md:     32px
  lg:     40px
  xl:     48px
  "2xl":  80px
  "3xl":  104px
  container:        1256px
  container-narrow: 808px
  section-v:        32px
  section-v-home:   40px
  section-h:        24px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverted}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    height: 56px
    padding: 16px 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-darker}"
  button-primary-focus:
    borderColor: "{colors.focus}"
    borderWidth: 4px
  button-primary-disabled:
    backgroundColor: "{colors.neutral-light}"
    textColor: "{colors.neutral-dark}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    borderColor: "{colors.primary}"
    borderWidth: 2px
    rounded: "{rounded.xs}"
    height: 56px
    padding: 16px 48px
  button-transparent:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    textDecoration: underline
  button-inverse:
    backgroundColor: "{colors.neutral-white}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"

  input-field:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.neutral-darker}"
    borderWidth: 1px
    rounded: "{rounded.sm}"
    typography: "{typography.body-md}"
    textColor: "{colors.text-default}"
    padding: 12px 16px
    height: 48px
  input-field-focus:
    borderColor: "{colors.primary}"
  input-field-disabled:
    backgroundColor: "{colors.background-disabled}"
    borderColor: "{colors.neutral-light}"
  input-field-error:
    borderColor: "{colors.error}"
  input-field-success:
    borderColor: "{colors.success}"

  card:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.neutral-lighter}"
    borderWidth: 2px
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    imageRounded: "{rounded.lg}"
  card-featured:
    backgroundColor: "{colors.surface-lightest}"

  badge-brand:
    backgroundColor: "{colors.primary-lighter}"
    borderColor: "{colors.primary-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  badge-success:
    backgroundColor: "{colors.success-lightest}"
    borderColor: "#c7e1b7"
    textColor: "{colors.success-darker}"
    rounded: "{rounded.sm}"
  badge-error:
    backgroundColor: "{colors.error-lightest}"
    borderColor: "#f8a6a0"
    textColor: "{colors.error-dark}"
    rounded: "{rounded.sm}"
  badge-warning:
    backgroundColor: "{colors.warning-lightest}"
    textColor: "{colors.warning-darker}"
    rounded: "{rounded.sm}"
  badge-info:
    backgroundColor: "{colors.info-lightest}"
    textColor: "{colors.info-dark}"
    rounded: "{rounded.sm}"

  tag:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-default}"
    rounded: "{rounded.xs}"
  tag-hover:
    backgroundColor: "{colors.surface-lighter}"

  hero-cta:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.neutral-light}"
    borderWidth: 2px
    rounded: "{rounded.lg}"
  hero-cta-strap:
    backgroundColor: "{colors.surface-lighter}"
    textColor: "{colors.text-secondary}"

  table:
    headerBackgroundColor: "{colors.primary-lightest}"
    borderColor: "{colors.neutral-darker}"
    bannerColor: "{colors.primary}"
---

## Overview

Iris is the design system behind MVF Global's portfolio of comparison and review sites. It is deliberately **content-led and conversion-focused**: the components it ships — hero CTAs, comparison tables, pros/cons panels, rating+price cards, trust badges, editorial long-form layouts — exist to move a reader from an editorial page to a lead capture or affiliate click. Iris does **not** ship dashboard, admin, or application-shell patterns. If you need a modal, toast, tabbed data grid, or navigation drawer, Iris is not the right system.

The YAML above encodes the **Core/System** baseline — the default brand (labelled MVF/Core) whose values every other brand inherits and overrides a small subset of. The live portfolio runs on **six** brands with dedicated styling (Core, Eco Experts, HearClear, ClearLiving, Expert Reviews, Lasik Eyes), plus ten more brand sets expressed in the W3C token exports but not yet styled in the live theme. The per-brand deltas are kept in [`brands.json`](./brands.json) alongside this file.

Five principles shape everything:

1. **Content leads, layout follows.** Pages are content-first. Components adapt to the shape of the content (variable-length article cards, flexible tables, responsive hero straps), not the reverse.
2. **Conversion is the job.** CTA cards, sticky straps, trust badges, and comparison-table buttons are top-tier components with strong token support.
3. **One contract, many brands.** Every component is authored once against semantic + contextual tokens. Brand variation happens through a small, consistent override set — never by forking components.
4. **Tokens are the interface.** Colour, type, spacing, radius, shadow, border — all come through a token. Components consume `var(--token, fallback)`. That is the boundary between Iris and its consumers.
5. **Figma is the source; the repo is the contract.** Tokens originate in Figma variables and are re-exported on change. Hand-edits are out-of-band and temporary.

## Colors

Iris uses a three-layer token model that the YAML above flattens for agent consumption:

- **Primitives** — raw colour scales (`primitive.tokens.json`).
- **Semantic** — system + per-brand role mappings (`semantic.tokens.json`).
- **Contextual** — component-role slots for Light mode (`contextual.light.tokens.json`).

The Core/System palette is an indigo primary (`#4444ca`) with a full 7-step ramp from `primary-lightest` (`#fbfbfe`) through `primary-darkest` (`#08082b`). The `interactive` ramp is a separate semantic role that in Core happens to equal `primary`, but in most brands diverges (Eco Experts uses green, ClearLiving uses magenta, Lasik Eyes uses pink). Always reach for `interactive-*` when styling something clickable — never `primary-*` — so brand overrides resolve correctly.

Semantic status colours (`info`, `warning`, `error`, `success`) each ship a 7-step ramp from `-lightest` to `-darkest` and are **not** brand-overridable; they must stay consistent across the portfolio for accessibility and comprehension. The `focus` colour (`#ff9a00`) is a WCAG-contrast orange used for keyboard focus rings on every brand — intentionally not the brand colour, so focus is always visible on every surface.

### Per-brand overrides

Each brand overrides a consistent subset:

| Brand | Primary | Interactive | Font | Shadow | Radius |
|---|---|---|---|---|---|
| Core / MVF | indigo `#4444ca` | indigo | Inter | soft | 16px (card) |
| Eco Experts | navy `#053c5e` | green `#04ab49` | Be Vietnam Pro | soft | 16px |
| HearClear | dark-navy `#2d3350` | teal `#1c7d68` | Manrope | flat | 16px |
| ClearLiving | navy `#081e47` | magenta `#e80b54` | Public Sans | flat | 8px |
| Expert Reviews | plum `#32052D` | magenta `#850049` | Plus Jakarta Sans | flat | 8px |
| Lasik Eyes | royal-blue `#0D489E` | pink `#CE3272` | Open Sans | soft | 16px |

Full override data — including surface palettes, typography weight overrides, and tertiary accents — lives in [`brands.json`](./brands.json).

## Typography

A single type family (Inter in Core, brand-swapped elsewhere) serves a 12-step scale: six headings (`heading-xs` through `heading-2xl`, 24–56px), five body sizes (`body-xs` through `body-xl`, 12–20px), and a single `label-sm` for tagged meta. Heading sizes use a small negative letter-spacing (−1% to −3%) that tightens as size grows, a deliberate choice to keep long headlines from feeling loose.

Body copy defaults to weight 400, headings to 600, and display copy to 700. Two brands (HearClear and ClearLiving) shift this up a tier — body to 500, headings to 800 — to improve legibility for their older-skewing demographics. Link text is always one tier heavier than surrounding body copy in every brand.

Line heights are fixed at authoring time (the YAML above), not derived. The comment-to-asset ratio of Iris pages is high, so precise rhythm matters more than fluid type-scaling.

## Layout

Iris is built on an 8px grid. The spacing scale runs from `5xs` (2px) up to `3xl` (104px) and is the source of every margin, padding, and gap value in the system. Semantic spacing aliases (`section-v`, `section-v-home`, `section-h`, `container`) step up across four breakpoints:

```
default       /* mobile-first base */
@media (width >= 768px)    { /* tablet    */ }
@media (width >= 992px)    { /* laptop    */ }
@media (width >= 1200px)   { /* desktop   */ }
```

For example, section vertical padding moves `md → lg → xl → 2xl` (32 → 40 → 48 → 80px) as viewport width increases. The Figma file expresses seven breakpoints (320/576/768/992/1200/1400/1920) but those collapse to the four CSS breakpoints above — the extra Figma frames are visual references, not distinct CSS tiers.

Container widths come in two sizes: `container` (1256px) for default pages, `container-narrow` (808px) for editorial long-form reading. Article bodies use the narrow container; listings, comparison tables, and homepage compositions use the wide container.

## Elevation & Depth

Iris has five shadow tokens: `none`, `xs`, `sm`, `md`, `lg`, `xl`. The xs–xl range all use the same spread/blur pattern (`Y-offset, blur, negative spread`) with increasing offsets and opacity from 12% (xs) to 24% (xl). Cards default to `sm` (`0 12px 16px -8px rgb(0 0 0 / 12%)`); overlays and popovers use `lg` or `xl`.

Shadow is **brand-variable**: HearClear, ClearLiving, and Expert Reviews all flatten cards to `none`, using border and surface-lightness instead to create layering. Eco Experts, Core, and Lasik Eyes keep the `sm` shadow. Check the brand before assuming elevation is available.

For glassmorphism / translucency / backdrop-filter — Iris does not use these patterns. All surfaces are opaque.

## Shapes

The radius scale runs `none → xs (4) → sm (8) → md (12) → lg (16) → xl (24) → 2xl (32) → full`. Most components use `xs` (buttons, inputs, tags) or `md` (cards, dropdowns). Hero CTAs and images use `lg`. Avatars use `sm` or `full` depending on context (`full` for byline avatars, `sm` for in-article page avatars).

Corner radius is a **brand signal**: ClearLiving and Expert Reviews globally tighten card/image/hero-cta radius to `sm` (8px) instead of the Core `md`/`lg` — the result reads as more editorial / serious. Tag radius is deliberately `xs` across most brands but `none` (square) in Expert Reviews.

## Components

Iris ships roughly 45 components across Atomic Design levels, plus ~30 authoring blocks for composing pages. The YAML above encodes the **shapes and states of the most load-bearing ones** — Button (×4 types × 5 states), Card, Input (×5 states), Badge (×5 tones), Tag, Hero CTA, Table.

Full catalog: [`components.md`](./components.md). Reference implementations (React, framework-agnostic inline styles): [`examples/`](./examples/).

At a glance the catalog contains:

- **Atoms (~6)** — Button, Icon, Tag, Rating stars, Award badge.
- **Molecules (~30)** — article card, author card, breadcrumbs, dropdowns, nav primitives, form rows, table cells, icon-list, badge, hero, hero-form.
- **Organisms (~12)** — Header, Footer, Hero CTA (basic / centered / detailed), article-content, related-grid, sidebar, overlays.
- **Templates (~18)** — homepage, full-width, medium-width editorial, archive, taxonomy, author, category, tag, search, sitemap, error.
- **Authoring blocks (~30)** — CtaCard, ComparisonTable, ProsCons, HighlightBox, IconsGrid, Logos, Newsletter, RadioCta, RatingPrice, Accordion, Gallery, TextBlock, plus wrappers for Amazon, Stickee, Sovrn, Lytics, Chameleon, Flourish, TablePress, uCalc (Iris does not style these — they carry third-party chrome).

### Composition rules

- **Reach for the lowest-level component that does the job.** A `RatingPrice` is not three stacked molecules — it's its own component because it has deal-tracking attributes that a bare card doesn't.
- **Buttons never live in isolation in a content block.** They always sit inside a CTA card, a hero, a comparison-table cell, a pros-cons summary, or a newsletter unit. Bare `<Button>` at document level is an anti-pattern.
- **Don't introduce new atoms without a Figma source.** If a component needs a new visual primitive, that primitive is authored in Figma first, tokenised, then implemented.

## Do's and Don'ts

### Do
- **Reference contextual tokens from components.** `var(--button-background-default, …)` not `var(--primary-default, …)`.
- **Always include a fallback in `var()`.** The repo is published standalone; consumers may not have compiled the tokens yet.
- **Scope brand overrides with `[data-brand="…"]` or similar.** Never fork a component file per brand.
- **Keep the `focus` colour accessible.** It's orange in every brand on purpose; don't collapse it into the brand's primary.
- **Pattern-match from `examples/`.** Seven reference components span Figma-extracted and Blade-ported styles; new components should follow their conventions.
- **Bump `package.json` on breaking changes** (renamed tokens, removed roles). Additive changes (new tokens, new brands) bump the patch.

### Don't
- **Don't hardcode colours, radii, or font sizes in components.** Every value comes through a token.
- **Don't reach across token layers.** Components → contextual → semantic → primitive. Never skip a level.
- **Don't add dashboard / admin / app-shell components.** Iris is a conversion DS; it's not the right place for toasts, modals, drawers, tabbed data grids, settings forms, or navigation rails.
- **Don't migrate tokens to a different schema.** W3C DTCG is the contract. DESIGN.md YAML here is a digest; the JSON files remain authoritative.
- **Don't add CSS frameworks** (Tailwind, Bootstrap, Stitches, etc.) to `examples/`. Inline styles + CSS custom properties keep the references framework-agnostic.
- **Don't style the third-party widgets** (Amazon, Stickee, Sovrn, Lytics, Chameleon, Flourish, TablePress, uCalc, Instagram). They carry their own chrome by contract.
- **Don't assume Dark mode works.** Only `contextual.light.tokens.json` exists today. `contextual.dark.tokens.json` is a planned follow-up.
- **Don't "fix" the two stray top-level tokens** (`✏️ Product Intro Label` in semantic, `brand-element` in contextual) without coordinating in Figma first. They are intentional but sit outside the hierarchy.
