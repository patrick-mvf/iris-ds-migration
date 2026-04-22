# Iris DS — Example Components

These are extracted from the **Iris Design System v4.7** Figma file as reference for recreation. They are **not** a production library — the goal is to show Claude Designer (and any other consumer) what the components look like in code and how they consume the tokens in this repo.

Every file uses CSS custom properties of the form `var(--token/path, fallback)`. The token paths map one-to-one onto the JSON in `semantic.tokens.json` and `contextual.light.tokens.json`, so when those are compiled to CSS variables the components will inherit the live values automatically.

## Files

| File | Figma node | Shows |
|---|---|---|
| [`Button.tsx`](./Button.tsx) | `13300:27640` (❖ Button) | 4 types × 5 states × 3 sizes × 2 modifiers. Token refs: `--button/default`, `--button/hover`, `--button/pressed`, `--button/focus`, `--button/disabled`, `--button/inverted/*`, `--button/button-radius`, `--button/padding-*` |
| [`Card.tsx`](./Card.tsx) | `51:8366` (🟢 article-card) | Image + title + body + rating/price + author/date. Includes `Rating` sub-component. Token refs: `--card/image`, `--text/color/*`, `--text/link/*`, `--background/placeholder` |
| [`Input.tsx`](./Input.tsx) | `13300:270725` (❖ Input) | 10 states: Default, Hover, Focus, Typing, Entered, Disabled, Informational, Success, Warning, Error. Token refs: `--input/radius`, `--input/background/*`, `--input/border/*` |
| [`PageTemplate.tsx`](./PageTemplate.tsx) | `20186:304191` (Homepage section) | Full page composition: Nav → Hero → 6-card article grid → Call-out → 6-card mini-card grid → Footer. Encodes the responsive rules from all 7 breakpoints (1920, 1400, 1200, 992, 768, 576, 320) into a single responsive layout. |

## Typography scale (as referenced by the components)

| Token | Default px | Used for |
|---|---|---|
| `--typography/font-size/h1` | 44 | Hero / page title |
| `--typography/font-size/h2` | 32 | Section header |
| `--typography/font-size/body` | 18 | Intro / summary copy |
| `--system/typography/font-size/body-xl` | 20 | Card title |
| `--system/typography/font-size/body-md` | 16 | Body, input value, button label |
| `--system/typography/font-size/body-sm` | 14 | Labels, help text, meta |
| `--system/typography/font-size/body-xs` | 12 | Badges |

## Core colours (Core brand → MVF)

| Token | Default | Role |
|---|---|---|
| `--button/default` | `#4444ca` | Primary action |
| `--button/hover` | `#252590` | Primary hover |
| `--button/pressed` | `#0f0f4b` | Primary active |
| `--button/focus` | `#ff9a00` | Focus ring (orange) |
| `--button/disabled` | `#eeeeef` | Disabled surface |
| `--background/primary` | `#0a3161` | Dark hero / footer background |
| `--text/color/heading` | `#18181c` | Headings |
| `--text/color/default` | `#18181c` | Body |
| `--text/color/secondary` | `#565660` | Meta / supporting |
| `--text/color/tertiary` | `#9f9fa5` | Placeholder / disabled label |
| `--text/link/default` | `#4444ca` | Inline links |

Other brands (Hearclear, Clearliving, Eco Experts, …) override these via the `brand-element` variable in `contextual.light.tokens.json` — the component styling does not change, only the token values.

## How to use these

1. **Compile the tokens to CSS variables** via Style Dictionary, Tokens Studio sync, or any W3C-format build tool. Emit them at `:root` and scope them per brand (e.g. `[data-brand="hearclear"] { … }`).
2. **Drop the components into any app** — they depend on nothing except those variables (and React).
3. **Pattern-match new components** — if you need e.g. a Modal, model it on `Card.tsx` for surface/radius/padding, `Button.tsx` for the action, `Input.tsx` for text fields.
