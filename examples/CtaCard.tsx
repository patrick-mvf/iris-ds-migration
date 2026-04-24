/**
 * Iris — CTA Card
 *
 * Extracted from the live iris WP theme: plugins/flexi-blocks/views/templates/cta-card.blade.php
 *
 * The archetypal Iris affiliate unit. An image (left or right) paired with a
 * product title, supporting text, price + price info, merchant attribution, and
 * a primary button that carries CTA tracking attributes.
 *
 * Layout variants:
 *   image_alignment:  "left" | "right"
 *   button_alignment: "left" | "center" | "right"
 *   isInsideSidebar:  narrower column variant used in article sidebars
 *   hide_on_mobile:   collapses on <768px viewports
 *
 * Styling references CSS custom properties emitted from the W3C tokens:
 *   --card/background, --card/border/default, --card/border/radius, --card/border/size,
 *   --card/padding/desktop, --card/padding/tablet, --card/padding/mobile,
 *   --card/shadow, --card/image,
 *   --text/color/heading, --text/color/default, --text/color/secondary,
 *   --button/default, --button/hover, --button/pressed, --button/button-radius
 */

import React from "react";
import Button from "./Button";

export type CtaCardImageAlignment = "left" | "right";
export type CtaCardButtonAlignment = "left" | "center" | "right";

export interface CtaCardProps {
  image?: string;
  title?: string;
  text?: string;
  price?: string;
  priceInfo?: string;
  merchant?: string;
  button?: { title: string; url: string; target?: string };
  imageAlignment?: CtaCardImageAlignment;
  buttonAlignment?: CtaCardButtonAlignment;
  isInsideSidebar?: boolean;
  hideOnMobile?: boolean;
}

export function CtaCard({
  image,
  title = "Product title",
  text = "A short pitch explaining why this option wins.",
  price = "£20",
  priceInfo = "inc. VAT",
  merchant = "Amazon",
  button = { title: "See deal", url: "#", target: "_blank" },
  imageAlignment = "left",
  buttonAlignment = "left",
  isInsideSidebar = false,
  hideOnMobile = false,
}: CtaCardProps) {
  const flexDirection =
    imageAlignment === "right" ? "row-reverse" : "row";

  const buttonJustify =
    buttonAlignment === "center"
      ? "center"
      : buttonAlignment === "right"
      ? "flex-end"
      : "flex-start";

  return (
    <div
      data-component="cta-card"
      style={{
        display: hideOnMobile ? "none" : "flex",
        flexDirection,
        alignItems: "stretch",
        gap: "var(--system\\/gap\\/sm, 24px)",
        padding: isInsideSidebar
          ? "var(--card\\/padding\\/mobile, 24px)"
          : "var(--card\\/padding\\/desktop, 40px)",
        background: "var(--card\\/background, white)",
        border: "var(--card\\/border\\/size, 2px) solid var(--card\\/border\\/default, #f4f4f5)",
        borderRadius: "var(--card\\/border\\/radius, 12px)",
        boxShadow: "var(--card\\/shadow, 0 12px 16px -8px rgb(0 0 0 / 12%))",
        maxWidth: isInsideSidebar ? 360 : 760,
      }}
    >
      {image && (
        <div
          style={{
            flex: "0 0 30%",
            aspectRatio: "4 / 3",
            borderRadius: "var(--card\\/image, 16px)",
            background: `center/contain no-repeat url(${image}), var(--background\\/placeholder, #f4f4f5)`,
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--system\\/gap\\/2xs, 12px)",
          flex: 1,
          minWidth: 0,
        }}
      >
        <p
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
        </p>

        {text && (
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
            {text}
          </p>
        )}

        {price && (
          <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                fontWeight: 700,
                fontSize: "var(--system\\/typography\\/font-size\\/body-xl, 20px)",
                lineHeight: "var(--system\\/typography\\/line-height\\/body-xl, 32px)",
                color: "var(--text\\/color\\/default, #18181c)",
              }}
            >
              {price}
            </span>
            {priceInfo && (
              <span
                style={{
                  fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
                  fontWeight: 400,
                  fontSize: "var(--system\\/typography\\/font-size\\/body-xs, 12px)",
                  lineHeight: "var(--system\\/typography\\/line-height\\/body-xs, 16px)",
                  color: "var(--text\\/color\\/secondary, #565660)",
                }}
              >
                {priceInfo}
              </span>
            )}
          </p>
        )}

        {merchant && (
          <p
            style={{
              margin: 0,
              fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
              fontWeight: 400,
              fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
              lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
              color: "var(--text\\/color\\/secondary, #565660)",
            }}
          >
            from <strong>{merchant}</strong>
          </p>
        )}

        {button && (
          <div
            data-cta-type="cta-card-primary"
            data-position={1}
            data-total-positions={1}
            style={{
              display: "flex",
              justifyContent: buttonJustify,
              marginTop: "var(--system\\/gap\\/3xs, 8px)",
            }}
          >
            <Button type="Primary" size="Medium" label={button.title} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CtaCard;
