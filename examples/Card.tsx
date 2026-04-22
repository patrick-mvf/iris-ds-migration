/**
 * Iris — Article Card
 *
 * Extracted from Figma: 🟢 article-card (node 51:8366)
 *
 * Description (from Figma): "Cards are surfaces that display content and actions
 * on a single topic. They should be easy to scan for relevant and actionable
 * information. Elements, like text and images, should be placed on them in a way
 * that clearly indicates hierarchy."
 *
 * Composition (top → bottom):
 *   1. Image (16:9, rounded --card/image = 16px, placeholder bg --background/placeholder)
 *   2. Title (body-xl, 20/32, semibold, --text/color/heading); underlines in Hover state
 *   3. Supporting text (body-md, 16/26, regular, --text/color/default)
 *   4. Rating + price row (star-rating component on the left, £ price on the right)
 *   5. Author + date row (person name link + calendar icon + date)
 *
 * Styling references CSS custom properties emitted from the W3C tokens:
 *   --card/image, --system/padding/xs, --system/gap/xs, --system/gap/3xs,
 *   --text/color/heading, --text/color/default, --text/color/secondary,
 *   --text/link/default, --background/placeholder
 */

import React from "react";

export type CardState = "Default" | "Hover";

export interface RatingProps {
  value?: number; // 0–5
  reviews?: number;
  showNumber?: boolean;
  showReviews?: boolean;
}

export function Rating({ value = 4.5, reviews = 23, showNumber = true, showReviews = true }: RatingProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--system\\/gap\\/3xs, 8px)",
      }}
    >
      <span aria-hidden style={{ display: "inline-flex", gap: 0, color: "var(--rating\\/star\\/filled, #ff9a00)" }}>
        {/* Render 5 stars; last one is "half" if value has a fractional part */}
        {Array.from({ length: 5 }).map((_, i) => {
          const full = i + 1 <= Math.floor(value);
          const half = !full && i < value;
          return (
            <svg key={i} width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <path
                d={
                  full
                    ? "M10 1.67l2.58 5.22 5.75.83-4.16 4.06.98 5.72L10 14.73l-5.15 2.77.98-5.72L1.67 7.72l5.75-.83z"
                    : half
                    ? "M10 1.67v13.06l-5.15 2.77.98-5.72L1.67 7.72l5.75-.83z"
                    : "M10 1.67l2.58 5.22 5.75.83-4.16 4.06.98 5.72L10 14.73l-5.15 2.77.98-5.72L1.67 7.72l5.75-.83z"
                }
                fill={full || half ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          );
        })}
      </span>
      {showNumber && (
        <span
          style={{
            fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
            fontWeight: 600,
            fontSize: "var(--system\\/typography\\/font-size\\/body-md, 16px)",
            lineHeight: "var(--system\\/typography\\/line-height\\/body-md, 26px)",
            color: "var(--text\\/color\\/default, #18181c)",
          }}
        >
          {value}
        </span>
      )}
      {showReviews && (
        <a
          href="#reviews"
          style={{
            fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
            fontWeight: 600,
            fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
            lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
            color: "var(--text\\/link\\/default, #4444ca)",
            textDecoration: "underline",
          }}
        >
          ({reviews} Reviews)
        </a>
      )}
    </span>
  );
}

export interface ArticleCardProps {
  image?: string;
  title?: string;
  body?: string;
  author?: string;
  date?: string;
  price?: string;
  rating?: number;
  reviews?: number;
  showText?: boolean;
  showRatingPrice?: boolean;
  showAuthorDate?: boolean;
  state?: CardState;
  href?: string;
}

export function ArticleCard({
  image,
  title = "An article title spread over 2-3 lines should be more than enough",
  body = "Supporting information is displayed under the heading for those who need a bit more detail.",
  author = "Name Surname",
  date = "Dec 12, 2024",
  price = "£20",
  rating = 4.5,
  reviews = 23,
  showText = true,
  showRatingPrice = true,
  showAuthorDate = true,
  state = "Default",
  href = "#",
}: ArticleCardProps) {
  const isHover = state === "Hover";

  return (
    <a
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 376,
        minWidth: 346,
        width: "100%",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* 16:9 image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "var(--card\\/image, 16px)",
          background: image ? `center/cover no-repeat url(${image})` : "var(--background\\/placeholder, #eeeeef)",
          overflow: "clip",
        }}
      />

      {/* Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--system\\/gap\\/xs, 16px)",
          padding: "var(--system\\/padding\\/xs, 16px) 0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--system\\/gap\\/3xs, 8px)" }}>
          {/* Title */}
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "var(--system\\/typography\\/line-height\\/body-xl, 32px)",
              color: "var(--text\\/color\\/heading, #18181c)",
              textDecoration: isHover ? "underline" : "none",
            }}
          >
            {title}
          </h3>

          {showText && (
            <p
              style={{
                margin: 0,
                fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                fontWeight: 400,
                fontSize: "var(--system\\/typography\\/font-size\\/body-md, 16px)",
                lineHeight: "var(--system\\/typography\\/line-height\\/body-md, 26px)",
                color: "var(--text\\/color\\/default, #18181c)",
              }}
            >
              {body}
            </p>
          )}

          {showRatingPrice && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "var(--system\\/padding\\/3xs, 8px)",
              }}
            >
              <Rating value={rating} reviews={reviews} showNumber={false} />
              <span
                style={{
                  fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "32px",
                  color: "var(--text\\/color\\/default, #18181c)",
                }}
              >
                {price}
              </span>
            </div>
          )}
        </div>

        {showAuthorDate && (
          <div style={{ display: "flex", alignItems: "center", gap: "var(--system\\/gap\\/3xs, 8px)" }}>
            <span
              style={{
                fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                fontWeight: 400,
                fontSize: "var(--typography\\/font-size\\/small, 14px)",
                lineHeight: "var(--typography\\/line-height\\/small, 24px)",
                color: "var(--text\\/color\\/default, #18181c)",
              }}
            >
              {author}
            </span>
            <span aria-hidden style={{ opacity: 0.5 }}>
              📅
            </span>
            <span
              style={{
                fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                fontWeight: 400,
                fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
                lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
                color: "var(--text\\/color\\/default, #18181c)",
              }}
            >
              {date}
            </span>
          </div>
        )}
      </div>
    </a>
  );
}

export default ArticleCard;
