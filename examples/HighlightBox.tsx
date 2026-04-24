/**
 * Iris — Highlight Box
 *
 * Extracted from the live iris WP theme: plugins/flexi-blocks/views/templates/highlight-box.blade.php
 *
 * Editorial callout block. Two variants:
 *   - "featured" (type.value === "none"): a coloured panel used to draw the eye
 *     to a key takeaway or stat inline with article body copy.
 *   - "quote":                            an expert opinion pull-quote with
 *     avatar, name, and role. Used to add trust to review/opinion pages.
 *
 * Both variants support an optional type Badge, a title, rich-HTML content,
 * and a primary CTA button.
 *
 * Styling references CSS custom properties emitted from the W3C tokens:
 *   --surface/lighter, --surface/lightest, --border/brand-light,
 *   --card/border/radius, --card/padding/desktop, --card/padding/mobile,
 *   --text/color/heading, --text/color/default, --text/color/secondary,
 *   --badge/background/brand, --badge/border/brand, --badge/radius,
 *   --avatar/popover/border-radius
 */

import React from "react";
import Button from "./Button";

export type HighlightBoxVariant = "featured" | "quote";

export interface HighlightBoxProps {
  variant?: HighlightBoxVariant;
  typeLabel?: string;
  title?: string;
  content?: string;
  cta?: { title: string; url: string; target?: string };
  expertName?: string;
  expertTitle?: string;
  expertBio?: string;
  expertImage?: string;
}

function TypeBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        background: "var(--badge\\/background\\/brand, #f3f3fc)",
        border: "1px solid var(--badge\\/border\\/brand, #eeeefb)",
        borderRadius: "var(--badge\\/radius, 8px)",
        fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
        fontWeight: 600,
        fontSize: "var(--system\\/typography\\/font-size\\/body-xs, 12px)",
        lineHeight: "var(--system\\/typography\\/line-height\\/body-xs, 16px)",
        color: "var(--badge\\/icon\\/primary, #4444ca)",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
      }}
    >
      {label}
    </span>
  );
}

export function HighlightBox({
  variant = "featured",
  typeLabel = "Expert tip",
  title = "The short answer",
  content = "Most UK households will see payback on solar panels within 10–14 years. Batteries shorten that window but raise upfront cost.",
  cta,
  expertName = "Dr. Jane Smith",
  expertTitle = "Lead Reviewer",
  expertBio = "Jane has evaluated over 200 clinics across the UK and writes our surgery methodology.",
  expertImage,
}: HighlightBoxProps) {
  const isQuote = variant === "quote";

  return (
    <aside
      data-component="highlight-box"
      data-variant={variant}
      style={{
        display: "flex",
        flexDirection: isQuote ? "column" : "column",
        gap: "var(--system\\/gap\\/sm, 24px)",
        padding: "var(--card\\/padding\\/desktop, 40px)",
        background: isQuote
          ? "var(--surface\\/lightest, #fbfbfe)"
          : "var(--surface\\/lighter, #f3f3fc)",
        border: isQuote
          ? "1px solid var(--border\\/brand-light, #eeeefb)"
          : "none",
        borderLeft: isQuote
          ? "4px solid var(--colors\\/brand, #eeeefb)"
          : "4px solid var(--colors\\/brand, #eeeefb)",
        borderRadius: "var(--card\\/border\\/radius, 12px)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--system\\/gap\\/xs, 16px)" }}>
        {typeLabel && <TypeBadge label={typeLabel} />}

        {title && (
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
              fontWeight: 600,
              fontSize: "var(--typography\\/font-size\\/h4, 24px)",
              lineHeight: "var(--system\\/typography\\/line-height\\/heading-xs, 32px)",
              color: "var(--text\\/color\\/heading, #18181c)",
            }}
          >
            {title}
          </h3>
        )}

        {content && (
          <div
            style={{
              fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
              fontWeight: 400,
              fontSize: "var(--system\\/typography\\/font-size\\/body-md, 16px)",
              lineHeight: "var(--system\\/typography\\/line-height\\/body-md, 26px)",
              color: "var(--text\\/color\\/default, #18181c)",
            }}
            // In the live Blade version this is `{!! $content !!}` — trusted HTML.
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {cta && (
          <div data-cta-type="highlight-box-cta-primary" data-position={1} data-total-positions={1}>
            <Button type="Primary" size="Medium" label={cta.title} />
          </div>
        )}
      </div>

      {isQuote && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--system\\/gap\\/xs, 16px)",
            paddingTop: "var(--system\\/gap\\/sm, 24px)",
            borderTop: "1px solid var(--border\\/default, #f4f4f5)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--system\\/gap\\/3xs, 8px)" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "var(--avatar\\/popover\\/border-radius, 12px)",
                background: expertImage
                  ? `center/cover no-repeat url(${expertImage})`
                  : "var(--background\\/placeholder, #eeeeef)",
                flexShrink: 0,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                  fontWeight: 600,
                  fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
                  lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
                  color: "var(--text\\/color\\/heading, #18181c)",
                }}
              >
                {expertName}
              </span>
              <span
                style={{
                  fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                  fontWeight: 400,
                  fontSize: "var(--system\\/typography\\/font-size\\/body-xs, 12px)",
                  lineHeight: "var(--system\\/typography\\/line-height\\/body-xs, 16px)",
                  color: "var(--text\\/color\\/secondary, #565660)",
                }}
              >
                {expertTitle}
              </span>
            </div>
          </div>

          {expertBio && (
            <p
              style={{
                margin: 0,
                fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                fontWeight: 400,
                fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
                lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
                color: "var(--text\\/color\\/default, #18181c)",
              }}
            >
              {expertBio}
            </p>
          )}
        </div>
      )}
    </aside>
  );
}

export default HighlightBox;
