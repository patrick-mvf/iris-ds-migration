/**
 * Iris — Button
 *
 * Extracted from Figma: ❖ Button (node 13300:27640)
 *
 * Variants:
 *   type:     Primary | Outline | Transparent | Inverse
 *   state:    Default | Hover   | Press       | Focus   | Disabled
 *   size:     Large   | Medium  | Small
 *   modifier: Hug content | Full width
 *
 * Styling references CSS custom properties emitted from the W3C tokens:
 *   --button/default, --button/hover, --button/pressed, --button/focus, --button/disabled
 *   --button/inverted/default, --button/inverted/hover, --button/inverted/press
 *   --button/button-radius, --button/padding-horizontal, --button/padding-vertical
 *   --text/color/inverted, --text/link/default, --text/link/hover, --text/link/pressed,
 *   --text/link/focus, --text/link/disabled
 */

import React from "react";

export type ButtonType = "Primary" | "Outline" | "Transparent" | "Inverse";
export type ButtonState = "Default" | "Hover" | "Press" | "Focus" | "Disabled";
export type ButtonSize = "Large" | "Medium" | "Small";
export type ButtonModifier = "Hug content" | "Full width";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  state?: ButtonState;
  size?: ButtonSize;
  modifier?: ButtonModifier;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label?: string;
}

// ---------- container (outer) styles --------------------------------------------------
function containerStyle({ state }: Pick<ButtonProps, "state">): React.CSSProperties {
  if (state === "Focus") {
    return {
      borderRadius: "var(--button\\/button-radius, 4px)",
      border: "var(--system\\/border\\/lg, 4px) solid var(--button\\/focus, #ff9a00)",
      overflow: "clip",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    };
  }
  return {
    borderRadius: "var(--button\\/button-radius, 4px)",
    overflow: "clip",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: state === "Disabled" ? "not-allowed" : "pointer",
  };
}

// ---------- inner (background / border / padding) styles ------------------------------
function innerStyle({ type = "Primary", state = "Default", size = "Large" }: ButtonProps): React.CSSProperties {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--system\\/gap\\/4xs, 4px)",
    borderRadius: "var(--button\\/button-radius, 4px)",
    overflow: "clip",
    padding:
      size === "Small"
        ? "var(--system\\/padding\\/3xs, 8px) var(--system\\/padding\\/xl, 48px)"
        : size === "Medium"
        ? "var(--system\\/padding\\/2xs, 12px) var(--system\\/padding\\/xl, 48px)"
        : "var(--button\\/padding-vertical, 16px) var(--button\\/padding-horizontal, 48px)",
    minHeight: size === "Small" ? 40 : size === "Medium" ? 48 : 56,
  };

  // ---- backgrounds per type × state ----
  if (state === "Disabled") {
    return {
      ...base,
      background: type === "Transparent" ? "transparent" : "var(--button\\/disabled, #eeeeef)",
      border: type === "Outline" ? "var(--system\\/border\\/md, 2px) solid var(--button\\/disabled, #eeeeef)" : undefined,
    };
  }

  switch (type) {
    case "Primary":
      return {
        ...base,
        background:
          state === "Press"
            ? "var(--button\\/pressed, #0f0f4b)"
            : state === "Hover"
            ? "var(--button\\/hover, #252590)"
            : "var(--button\\/default, #4444ca)",
      };
    case "Outline":
      return {
        ...base,
        background: "transparent",
        border: `var(--system\\/border\\/md, 2px) solid ${
          state === "Press"
            ? "var(--button\\/pressed, #0f0f4b)"
            : state === "Hover"
            ? "var(--button\\/hover, #252590)"
            : "var(--button\\/default, #4444ca)"
        }`,
      };
    case "Transparent":
      return { ...base, background: "transparent" };
    case "Inverse":
      return {
        ...base,
        background:
          state === "Press"
            ? "var(--button\\/inverted\\/press, #f3f3fc)"
            : state === "Hover"
            ? "var(--button\\/inverted\\/hover, #fbfbfe)"
            : "var(--button\\/inverted\\/default, white)",
      };
  }
}

// ---------- label colour per type × state ---------------------------------------------
function labelColour({ type = "Primary", state = "Default" }: ButtonProps): string {
  if (state === "Disabled") return "var(--text\\/link\\/disabled, #9f9fa5)";
  if (type === "Primary") return "var(--text\\/color\\/inverted, white)";
  if (state === "Focus") return "var(--text\\/link\\/focus, #4444ca)";
  if (state === "Press") return "var(--text\\/link\\/pressed, #0f0f4b)";
  if (state === "Hover") return "var(--text\\/link\\/hover, #252590)";
  return "var(--text\\/link\\/default, #4444ca)";
}

// --------------------------------------------------------------------------------------
export function Button({
  type = "Primary",
  state = "Default",
  size = "Large",
  modifier = "Hug content",
  iconLeft,
  iconRight,
  label = "Label",
  disabled,
  ...rest
}: ButtonProps) {
  const effectiveState: ButtonState = disabled ? "Disabled" : state;
  const isTransparent = type === "Transparent";

  return (
    <button
      type="button"
      disabled={effectiveState === "Disabled"}
      style={{
        ...containerStyle({ state: effectiveState }),
        width: modifier === "Full width" ? "100%" : "auto",
        background: "transparent",
        border: "none",
        padding: 0,
      }}
      {...rest}
    >
      <span style={innerStyle({ type, state: effectiveState, size })}>
        {iconLeft && <span aria-hidden>{iconLeft}</span>}
        <span
          style={{
            fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
            fontWeight: 600,
            fontSize:
              size === "Small"
                ? "var(--system\\/typography\\/font-size\\/body-sm, 14px)"
                : "var(--system\\/typography\\/font-size\\/body-md, 16px)",
            lineHeight: "var(--system\\/typography\\/line-height\\/body-md, 26px)",
            color: labelColour({ type, state: effectiveState }),
            textDecoration: isTransparent ? "underline" : "none",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        {iconRight && <span aria-hidden>{iconRight}</span>}
      </span>
    </button>
  );
}

export default Button;
