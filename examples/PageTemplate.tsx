/**
 * Iris — Page Template (MVF / "Homepage")
 *
 * Extracted from Figma: Homepage (section node 20186:304191)
 * The Figma section contains the same homepage rendered across 7 breakpoints
 * (1920, 1400, 1200, 992, 768, 576, 320). This file encodes the canonical
 * structure and responsive rules from all 7 frames into a single component.
 *
 * Structure (top → bottom):
 *
 *   <browser-controls 80>     (design-time chrome; omit in production)
 *   <navigation 80 | 56>      header with brand, nav links, CTA
 *   <Section> Hero            1192 container, padded 80/48/40 top
 *   <Section> Article grid    6× article-card, 3×2 → 2×3 → 1×6
 *                             header + "See all" link
 *   <Section> Call-out        1 × dark promotional panel (304px tall at desktop)
 *   <Section> Mini-card grid  6× mini-card, 3×2 → 2×3 → 1×6
 *                             header + "See all" link
 *   <footer>                  brand, links, legal
 *
 * Breakpoints (from the design file):
 *   1920 — container 1192, side gutter 364
 *   1400 — container 1192, side gutter 104
 *   1200 — container 1120, side gutter 40
 *    992 — container  744, side gutter 124
 *    768 — container  704, side gutter 32
 *    576 — container  528, side gutter 24, mini-cards become a vertical list
 *    320 — container  272, side gutter 24, single-column everything
 *
 * This template is the composition — the individual components (Button, Card,
 * Input) are in sibling files. Hero, Navigation, Footer, Call-out, Mini-card
 * and Text-block are sketched inline as simple placeholders that point at the
 * right tokens, so Claude Designer can see the intended shape.
 */

import React from "react";
import { ArticleCard } from "./Card";
import { Button } from "./Button";

// --------------------------------------------------------------------------------------
// Layout primitives — a Section with a fixed-width Container, matching the Figma grid.
// --------------------------------------------------------------------------------------

function Section({ children, background }: { children: React.ReactNode; background?: string }) {
  return (
    <section style={{ width: "100%", background: background ?? "transparent" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 1192,
          margin: "0 auto",
          padding: "var(--system\\/padding\\/xl, 80px) var(--system\\/padding\\/xl, 24px)",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </section>
  );
}

// --------------------------------------------------------------------------------------
// Hero — H1 + sub-copy + primary CTA, image on the right (stacks below at < 768)
// --------------------------------------------------------------------------------------

function Hero() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gap: "var(--system\\/gap\\/lg, 40px)",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--system\\/gap\\/sm, 24px)" }}>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--text\\/font\\/heading, 'Inter', sans-serif)",
            fontWeight: 700,
            fontSize: "var(--typography\\/font-size\\/h1, 44px)",
            lineHeight: "var(--typography\\/line-height\\/h1, 54px)",
            letterSpacing: "var(--typography\\/letter-spacing\\/h1, -1px)",
            color: "var(--text\\/color\\/heading, #18181c)",
          }}
        >
          A hero title 1–2 lines
        </h1>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
            fontWeight: 400,
            fontSize: "var(--typography\\/font-size\\/body, 18px)",
            lineHeight: "var(--typography\\/line-height\\/body, 28px)",
            color: "var(--text\\/color\\/default, #18181c)",
          }}
        >
          Supporting copy beneath the headline explains what this page is for in plain language.
        </p>
        <div>
          <Button label="Primary CTA" />
        </div>
      </div>
      <div
        aria-hidden
        style={{
          aspectRatio: "4 / 3",
          borderRadius: "var(--card\\/image, 16px)",
          background: "var(--background\\/placeholder, #eeeeef)",
        }}
      />
    </div>
  );
}

// --------------------------------------------------------------------------------------
// Section header: small eyebrow / H2 + trailing "See all →" link
// --------------------------------------------------------------------------------------

function SectionHeader({ title }: { title: string }) {
  return (
    <header style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--text\\/font\\/heading, 'Inter', sans-serif)",
          fontWeight: 700,
          fontSize: "var(--typography\\/font-size\\/h2, 32px)",
          lineHeight: "var(--typography\\/line-height\\/h2, 40px)",
          color: "var(--text\\/color\\/heading, #18181c)",
        }}
      >
        {title}
      </h2>
    </header>
  );
}

function SeeAllLink({ children = "See all →" }: { children?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
      <a
        href="#"
        style={{
          fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
          fontWeight: 600,
          fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
          lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
          color: "var(--text\\/link\\/default, #4444ca)",
          textDecoration: "underline",
        }}
      >
        {children}
      </a>
    </div>
  );
}

// --------------------------------------------------------------------------------------
// Article grid: 6 cards, responsive 3-col → 2-col → 1-col
// --------------------------------------------------------------------------------------

function ArticleGrid() {
  return (
    <div>
      <SectionHeader title="H2 Text block header" />
      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 32,
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
      <SeeAllLink />
    </div>
  );
}

// --------------------------------------------------------------------------------------
// Call-out: dark promotional panel with title + body + CTA
// --------------------------------------------------------------------------------------

function CallOut() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
        gap: 32,
        alignItems: "center",
        padding: "var(--system\\/padding\\/xl, 48px)",
        borderRadius: "var(--card\\/image, 16px)",
        background: "var(--background\\/primary, #0a3161)",
        color: "var(--text\\/color\\/inverted, white)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--text\\/font\\/heading, 'Inter', sans-serif)",
            fontWeight: 700,
            fontSize: "var(--typography\\/font-size\\/h2, 32px)",
            lineHeight: "var(--typography\\/line-height\\/h2, 40px)",
          }}
        >
          H2 Text block header
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
            fontWeight: 400,
            fontSize: "var(--typography\\/font-size\\/body, 18px)",
            lineHeight: "var(--typography\\/line-height\\/body, 28px)",
          }}
        >
          Supporting text sits under the heading. Keep it short and concrete.
        </p>
        <div>
          <Button type="Inverse" label="Primary CTA" />
        </div>
      </div>
      <div
        aria-hidden
        style={{
          aspectRatio: "1 / 1",
          borderRadius: "var(--card\\/image, 16px)",
          background: "rgba(255,255,255,0.1)",
        }}
      />
    </div>
  );
}

// --------------------------------------------------------------------------------------
// Mini-card grid: 6 compact cards (title + body), 3-col → 2-col → 1-col
// --------------------------------------------------------------------------------------

function MiniCard() {
  return (
    <a
      href="#"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "var(--system\\/padding\\/xs, 16px)",
        borderRadius: "var(--card\\/image, 16px)",
        border: "var(--system\\/border\\/sm, 1px) solid var(--border\\/default, #f4f4f5)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <strong
        style={{
          fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
          fontWeight: 600,
          fontSize: "var(--system\\/typography\\/font-size\\/body-md, 16px)",
          lineHeight: "var(--system\\/typography\\/line-height\\/body-md, 26px)",
          color: "var(--text\\/color\\/heading, #18181c)",
        }}
      >
        H2 Text block header
      </strong>
      <span
        style={{
          fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
          fontWeight: 400,
          fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
          lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
          color: "var(--text\\/color\\/secondary, #565660)",
        }}
      >
        H2 Text block header
      </span>
    </a>
  );
}

function MiniCardGrid() {
  return (
    <div>
      <SectionHeader title="H2 Text block header" />
      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <MiniCard key={i} />
        ))}
      </div>
      <SeeAllLink />
    </div>
  );
}

// --------------------------------------------------------------------------------------
// Navigation — brand left, links middle, CTA right
// --------------------------------------------------------------------------------------

function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        padding: "0 var(--system\\/padding\\/xl, 80px)",
        borderBottom: "var(--system\\/border\\/sm, 1px) solid var(--border\\/default, #f4f4f5)",
        background: "var(--background\\/default, white)",
      }}
    >
      <strong style={{ fontFamily: "var(--text\\/font\\/heading, 'Inter', sans-serif)", fontWeight: 700 }}>MVF</strong>
      <div style={{ display: "flex", gap: 24 }}>
        {["Main Link", "Main Link", "Main Link", "Main Link"].map((l, i) => (
          <a
            key={i}
            href="#"
            style={{
              fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
              fontWeight: 500,
              fontSize: "var(--system\\/typography\\/font-size\\/body-md, 16px)",
              color: "var(--text\\/color\\/default, #18181c)",
              textDecoration: "none",
            }}
          >
            {l}
          </a>
        ))}
      </div>
      <Button size="Medium" label="CTA" />
    </nav>
  );
}

// --------------------------------------------------------------------------------------
// Footer — dark panel, nav links, legal strip
// --------------------------------------------------------------------------------------

function Footer() {
  return (
    <footer
      style={{
        background: "var(--background\\/primary, #0a3161)",
        color: "var(--text\\/color\\/inverted, white)",
        padding: "var(--system\\/padding\\/xl, 48px) var(--system\\/padding\\/xl, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: 1192,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <strong>MVF</strong>
        <div style={{ display: "flex", gap: 24 }}>
          {["Main Link", "Main Link", "Main Link", "Main Link"].map((l, i) => (
            <a
              key={i}
              href="#"
              style={{ color: "inherit", textDecoration: "none", fontSize: 14, opacity: 0.9 }}
            >
              {l}
            </a>
          ))}
        </div>
        <span style={{ fontSize: 14, opacity: 0.7 }}>© 2025 MVF Global</span>
      </div>
    </footer>
  );
}

// --------------------------------------------------------------------------------------
// The page
// --------------------------------------------------------------------------------------

export default function PageTemplate() {
  return (
    <div style={{ background: "var(--background\\/default, white)" }}>
      <Navigation />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ArticleGrid />
      </Section>
      <Section>
        <CallOut />
      </Section>
      <Section>
        <MiniCardGrid />
      </Section>
      <Footer />
    </div>
  );
}
