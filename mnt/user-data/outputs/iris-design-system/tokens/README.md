# Tokens

Three-tier structure, exported from Figma variables in [W3C Design Tokens format](https://tr.designtokens.org/format/).

## `primitive.tokens.json` — 879 tokens

Raw values. No semantic meaning, no references to other tokens. Everything downstream ultimately resolves to these.

- `Colours/*` — full colour ramps (Alerts, brand palettes, greys, etc.) in 100–900 steps
- `Size/*` — the spacing and sizing scale

## `semantic.tokens.json` — 640 tokens

Role-based tokens that alias primitives via `$extensions.com.figma.aliasData`. This is where the multi-brand architecture lives.

Top-level collections:

- `System/*` — cross-brand system tokens (Padding, Radius, etc.)
- `Core/*`, `MVF/*`, `Expert Market/*`, `Expert Reviews/*`, `Eco Experts/*`, `Startups/*`, `Techco/*`, `Clearliving/*`, `Connect Hearing/*`, `Hearclear/*`, `Lasik-Eyes/*`, `Amazon/*`, `FindPro USA/*`, `GoWizard/*`, `WBE/*` — per-brand semantic overrides

Consumers should read from semantic, not primitive. Components should never hardcode a primitive value.

## `contextual.light.tokens.json` — 238 tokens (Light mode)

Component-specific tokens that alias semantics. Use these only when a component needs a value that the semantic layer doesn't already express.

Component coverage: Accordion, Avatar, Back to top button, Background, Badge, Border, Button, Card, Custom radio button, Hero CTA, Icon, Icon button, Image, Input, Menu, Mini card, Navigation, Paid btt content, Paid card, Paid header, Popover, Quote, Table, Tag, Text.

A `contextual.dark.tokens.json` should be added when Dark mode is ready.

## Figma-specific metadata

Each token carries a `$extensions` block with:

- `com.figma.variableId` — canonical Figma variable ID (useful for round-tripping)
- `com.figma.aliasData` — when the token references another variable (`targetVariableName`, `targetVariableSetName`)
- `com.figma.scopes` — where the variable is valid (e.g. `GAP`, `ALL_SCOPES`)

Keep these intact when editing — they're what lets tools sync changes back into Figma.

## Typical flow

1. Edit variables in Figma.
2. **Libraries → Variables → Export as .tokens.json** (or push via Tokens Studio).
3. Replace the matching file in this directory.
4. Commit, push, bump `package.json`.
