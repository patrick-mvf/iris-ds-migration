/**
 * Iris — Pros / Cons
 *
 * Extracted from the live iris WP theme: plugins/flexi-blocks/views/templates/pros-cons.blade.php
 *
 * Two-column list comparing positives and negatives, each column headed by a
 * coloured Badge (success for Pros, error for Cons) and rendered with iconed
 * list rows (check / close).
 *
 * Styling references CSS custom properties emitted from the W3C tokens:
 *   --badge/background/success, --badge/background/error,
 *   --badge/border/success, --badge/border/error,
 *   --badge/icon/success, --badge/icon/error, --badge/radius,
 *   --surface/lighter, --border/default, --text/color/heading, --text/color/default,
 *   --icon/color/success, --icon/color/error,
 *   --card/border/radius, --card/padding/desktop
 */

import React from "react";

export interface ProsConsProps {
  title?: string;
  pros?: string[];
  cons?: string[];
}

function Badge({
  tone,
  children,
}: {
  tone: "success" | "error";
  children: React.ReactNode;
}) {
  const background =
    tone === "success"
      ? "var(--badge\\/background\\/success, #e3f0db)"
      : "var(--badge\\/background\\/error, #fbd2d0)";
  const border =
    tone === "success"
      ? "var(--badge\\/border\\/success, #c7e1b7)"
      : "var(--badge\\/border\\/error, #f8a6a0)";
  const color =
    tone === "success"
      ? "var(--badge\\/icon\\/success, #456c2d)"
      : "var(--badge\\/icon\\/error, #8e130b)";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        background,
        border: `1px solid ${border}`,
        borderRadius: "var(--badge\\/radius, 8px)",
        fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
        fontWeight: 600,
        fontSize: "var(--system\\/typography\\/font-size\\/body-xs, 12px)",
        lineHeight: "var(--system\\/typography\\/line-height\\/body-xs, 16px)",
        color,
      }}
    >
      {children}
    </span>
  );
}

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
      <path
        d="M5 10.5l3 3 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
      <path
        d="M5 5l10 10M15 5L5 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconList({
  items,
  tone,
}: {
  items: string[];
  tone: "success" | "error";
}) {
  const iconColor =
    tone === "success"
      ? "var(--icon\\/color\\/success, #73b44b)"
      : "var(--icon\\/color\\/error, #ed2012)";
  const Icon = tone === "success" ? IconCheck : IconClose;
  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "var(--system\\/gap\\/3xs, 8px)",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--system\\/gap\\/3xs, 8px)",
            fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
            fontWeight: 400,
            fontSize: "var(--system\\/typography\\/font-size\\/body-md, 16px)",
            lineHeight: "var(--system\\/typography\\/line-height\\/body-md, 26px)",
            color: "var(--text\\/color\\/default, #18181c)",
          }}
        >
          <span style={{ color: iconColor, flexShrink: 0, marginTop: 3 }}>
            <Icon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProsCons({
  title = "Verdict",
  pros = [
    "Best-in-class rating",
    "Locations across the UK",
    "Transparent pricing",
  ],
  cons = ["Consultation fee not refundable", "Limited weekend availability"],
}: ProsConsProps) {
  return (
    <section
      data-component="pros-cons"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--system\\/gap\\/sm, 24px)",
        padding: "var(--card\\/padding\\/desktop, 40px)",
        background: "var(--surface\\/lighter, #f3f3fc)",
        border: "1px solid var(--border\\/default, #f4f4f5)",
        borderRadius: "var(--card\\/border\\/radius, 12px)",
      }}
    >
      {title && (
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
            fontWeight: 600,
            fontSize: "var(--system\\/typography\\/font-size\\/heading-xs, 24px)",
            lineHeight: "var(--system\\/typography\\/line-height\\/heading-xs, 32px)",
            color: "var(--text\\/color\\/heading, #18181c)",
          }}
        >
          {title}
        </h3>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "var(--system\\/gap\\/md, 32px)",
        }}
      >
        {pros.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--system\\/gap\\/xs, 16px)" }}>
            <Badge tone="success">Pros</Badge>
            <IconList items={pros} tone="success" />
          </div>
        )}

        {cons.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--system\\/gap\\/xs, 16px)" }}>
            <Badge tone="error">Cons</Badge>
            <IconList items={cons} tone="error" />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProsCons;
