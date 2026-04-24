# Iris — Component Catalog

This is the canonical list of components that Iris ships in production. The live WordPress theme (`wp-content/themes/iris/`) + the `flexi-blocks` plugin between them implement ~45 components across the standard Atomic Design layers. Tokens in this repo resolve against every one of them.

Use this catalog to understand the **shape** of the system — it is a content-led, comparison/lead-capture-focused design system, not an application-shell or dashboard system. If you are recreating the library in another target (React, web components, Figma), these are the components to cover.

> **Scope note**  Only components authored as part of the Iris system are listed. Third-party widgets (Amazon, Stickee, Sovrn, Lytics, Chameleon, Flourish, TablePress, uCalc, Instagram) are wrapped but not styled by Iris — they are omitted.

## Atoms

| Component | Purpose | Key tokens |
|---|---|---|
| **Button** | Primary CTA. 4 types (Primary, Outline, Transparent, Inverse) × 5 states × 3 sizes, with icon-left/icon-right slots. | `--button-background-default/hover`, `--button-border-radius`, `--button-padding-sm/md/lg`, `--button-inverted-*` |
| **Icon** | Single-glyph icon (size modifiers: sm/regular/lg, colour tokens). | `--icon-color-default/light/success/error/warning/info/inverted/disable` |
| **Tag** | Inline chip used for taxonomy links (e.g. "Reviews", "Guides"). | `--tag-radius`, `--tag-default`, `--tag-hover` |
| **Rating stars** | 5-star rating display, half-star support. | `--background-star-rating`, `--icon-color-warning` |
| **Award badge** | "Best for X" medallion overlaid on article cards. | `--primary-default`, `--neutral-white` |
| **Skimlinks / Trackonomics** | Analytics/affiliate tracking shims (non-visual). | — |

## Molecules

| Component | Purpose | Key tokens |
|---|---|---|
| **Article card** | Image + title + body + rating/price + author/date. The workhorse content card. | `--card-image`, `--text-color-*`, `--text-link-*`, `--background-placeholder` |
| **Author card / Author info / Author popup** | Byline block with avatar, name, role, mini-bio. | `--avatar-page-border-radius`, `--avatar-popover-border-radius`, `--text-color-*` |
| **Authors box (top / bottom)** | Reviewed-by / written-by panels at article head and foot. | `--surface-lighter`, `--border-brand` |
| **Badge** | Coloured label (success, error, info, warning, dark, brand). | `--badge-background-*`, `--badge-border-*`, `--badge-icon-*`, `--badge-radius` |
| **Breadcrumbs** | Path navigation above page title. | `--text-color-secondary`, `--text-link-default` |
| **Clinic card** | Clinic-listing card (name, location, rating, CTA). | `--card-background`, `--card-border-default`, `--card-shadow` |
| **Comment card / comment list** | User-submitted reviews on products. | `--card-background`, `--border-default` |
| **Comparison table row** | One row of a ComparisonTable organism — product/clinic with image, rating, attributes, CTA. | `--table-header`, `--table-border`, `--button-*` |
| **Dropdown / dropdown item / dropdown button-back** | Mega-menu dropdown primitives. | `--menu-hover`, `--menu-press`, `--menu-item-radius` |
| **Entry header row** | Article meta row (date, read-time, author chips). | `--text-color-secondary` |
| **Featured post item** | Editor's-pick card variant with emphasised visual. | `--surface-lighter`, `--card-background-featured` |
| **Flexi-table cells** (html, image, link, number, radio, recommended, wysiwyg, header, footer CTA, navigation) | Building blocks of the generic data-driven table block. | `--table-*`, `--background-*` |
| **Footer menu** | Multi-column links block in the footer. | `--background-footer`, `--text-color-inverted` |
| **Header locale switcher** | Language/country switcher pill in the top nav. | `--navigation-*` |
| **Header logo / header menu / header menu item / header menu toggle / header search / mega menu** | Site navigation primitives. | `--navigation-background-primary`, `--navigation-default-menu-item`, `--navigation-icon` |
| **Hero** | Page-level hero surface (title + intro + optional media). | `--primary-default`, `--background-brand`, `--text-color-heading` |
| **Hero form** | Lead-capture form embedded in the hero. | `--input-*`, `--button-*`, `--surface-lightest` |
| **Icon list** | Check/close bulleted list used inside Pros/Cons and highlights. | `--icon-color-success/error` |
| **Icons grid card** | Small trust-badge / USP cell with icon + caption. | `--surface-lighter`, `--text-color-default` |
| **Icon button / icon link** | Square icon-only button primitives. | `--button-*`, `--icon-color-default` |
| **Menu button-back** | "Back" control inside nested mobile menus. | `--menu-*` |
| **Pagination** | Numeric pagination for archives. | `--text-link-*`, `--menu-hover` |
| **Search form** | Stand-alone search input with submit. | `--input-border-*`, `--input-background-*` |
| **Sitemap category / sitemap link-list** | Sitemap template primitives. | `--text-link-*`, `--border-default` |
| **Social list** | Share buttons / follow icons row. | `--icon-color-default` |
| **Surgeon clinic details** | Specialist-page data block (specialisms, credentials). | `--border-brand`, `--text-color-*` |
| **Tags list** | Row of Tag atoms (article tags). | `--tag-*` |

## Organisms

| Component | Purpose | Key tokens |
|---|---|---|
| **Header** | Full site header: logo, mega-nav, search, locale switcher. Brand-customised per domain. | `--navigation-*`, `--background-default` |
| **Footer** | Full site footer: multi-column links, legal, social, newsletter signup. | `--background-footer`, `--text-color-inverted` |
| **Hero CTA** | Conversion-focused hero with form, badges, strap message, trust indicators. Variants: `basic`, `centered`, `detailed`. | `--hero-cta-background`, `--hero-cta-strap`, `--hero-cta-strap-text`, `--hero-cta-strap-radio`, `--hero-cta-border-*` |
| **Article content** | Post-body wrapper that applies typography scale and rhythm. | `--paragraph-spacing-*`, `--text-color-default` |
| **Article section** | Section wrapper with heading + intro + nested blocks. | `--padding-section-vertical`, `--gap-container-title-block` |
| **Entry header** | Article page title + meta + hero image cluster. | `--text-color-heading`, `--border-default` |
| **Related grid** | 3-up grid of related posts at article foot. | `--gap-container-grid`, `--card-*` |
| **Sidebar** | Right-rail column (author, related, CTA card) for post templates. | `--surface-lighter`, `--gap-container-grid` |
| **Card list** | Generic grid wrapper used by content-grid, featured-post, etc. | `--gap-container-grid` |
| **Comment list** | Container for user comment cards. | `--border-default` |
| **Gallery popup** | Lightbox overlay for Gallery block. | `--background-default`, `--shadow-xl` |
| **Chameleon overlay** | Full-page survey/quiz overlay. | `--background-default`, `--shadow-lg` |

## Templates (page-level compositions)

| Template | Purpose |
|---|---|
| `template-homepage` | Homepage composition: hero CTA → content grid → highlight → card list → newsletter. |
| `template-full-width` | Full-bleed marketing/landing layout. |
| `template-medium-width` | Centered-readable layout for editorial long-form. |
| `template-sitemap` | HTML sitemap. |
| `single` | Default article page: entry-header → article-content → authors-box → related-grid → sidebar. |
| `single-surgeons` / `single-clinics` / `single-sponsor` | Specialist post-type pages. |
| `archive-surgeons` / `archive-clinics` | Taxonomy-style listing pages. |
| `author` / `category` / `tag` / `taxonomy-manufacturer` / `taxonomy-product` | Archive templates for each taxonomy. |
| `search` | Search results. |
| `error` / `page` / `index` | Standard WordPress template fallbacks. |

## Content blocks (flexi-blocks)

These are the authoring blocks editors compose pages out of. They are **not** new components — they are compositions of the atoms/molecules/organisms above with ACF-driven content.

| Block | What it renders |
|---|---|
| **AccordionFaq** | FAQ accordion (schema.org marked). |
| **Button** | Standalone CTA (atoms.button). |
| **CallOut** | Highlighted side-note within article body. |
| **ComparisonTable** | Filterable, sortable comparison of products/clinics. |
| **ContentGrid** | N-up grid of article cards. |
| **CopyPasteTable** | HTML paste-in table with Iris styling applied. |
| **CtaCard** | Price/merchant card with primary button — the archetypal Iris affiliate unit. |
| **CustomerReview / CustomerReviewForm** | User review display + submission form. |
| **FeaturedPost** | Editor's-pick article pull-out. |
| **FlexiTable** | Data-driven table (builds on flexi-tables plugin). |
| **Gallery** | Image gallery with lightbox. |
| **HighlightBox** | Quote / expert-opinion / tip callout. Variants: `none` (featured), `quote`. |
| **IconsGrid** | Trust-badge / USP grid. |
| **Image** | Standalone image with Iris sizing + caption. |
| **JumpLinks** | TOC for long articles. |
| **LegalWording** | Legal/disclaimer boilerplate (custom post type). |
| **Logos** | Logo wall (as-seen-on, awards). |
| **Newsletter / LyticsInlineNewsletter** | Newsletter signup. |
| **ProsCons** | Two-column pros/cons list with success/error badges. |
| **RadioCta** | Multi-choice lead-capture with radio options. |
| **RatingPrice** | Compact rating + price + CTA unit. |
| **TextBlock** | Rich-text content. |
| **ThreeColumnSection / TwoColumnTable / ThreeColumnTable** | Layout / pricing-table blocks. |
| **YoutubeVideo** | YouTube embed with Iris frame. |

Third-party wrappers (unstyled by Iris): `AmazonWidget`, `StickeeMobiles`, `SovrnWidget`, `ChameleonOverlay*`, `ChameleonWidget`, `ClinicFinder`, `FlourishChart`, `Instagram`, `Tablepress`, `UCalc`, `LaserSurgery*`, `AdsWidget`.

## How this maps to the tokens in this repo

The three token files cover different strata of the taxonomy above:

- `primitive.tokens.json` — raw colour + size scale (what every brand's palette is drawn from).
- `semantic.tokens.json` — the `System` + per-brand mapping from primitives to **roles** (e.g. `interactive/default`, `surface/lightest`, `text/color/heading`). This is the layer that atoms consume.
- `contextual.light.tokens.json` — the component-level slots (e.g. `button/default`, `card/image`, `hero-cta/strap`, `input/radius`) for Light mode. Maps the `*.scss` vars files in the live theme 1:1.
