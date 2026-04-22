/**
 * Iris — Input
 *
 * Extracted from Figma: ❖ Input (node 13300:270725)
 *
 * Description: "An input enables the user to interact with and input short content
 * and data."
 *
 * States (all 10 ship with the component):
 *   Default, Hover, Focus, Typing, Entered, Disabled,
 *   Informational, Success, Warning, Error
 *
 * Anatomy:
 *   - Label (body-sm, semibold, --text/color/default)
 *   - Field container (radius --input/radius = 8px, height 48px)
 *       ↳ Optional left icon-button (24px icon inside a 48px square)
 *       ↳ Text input (padding xs 16px / 2xs 12px, body-md, placeholder --text/color/tertiary)
 *       ↳ Optional right icon-button (close-sm when Typing/Entered)
 *   - Help text (body-sm, icon + message)
 *
 * Token references:
 *   --input/radius, --input/background/{default,hover,entered,disabled}
 *   --input/border/{default,hover,focus,typing,entered,disabled,success,warning,error}
 *   --system/border/{sm,md}, --system/padding/{xs,2xs}, --system/gap/3xs
 *   --text/color/{default,secondary,tertiary}
 *   --system/shadow/xs/*
 */

import React from "react";

export type InputState =
  | "Default"
  | "Hover"
  | "Focus"
  | "Typing"
  | "Entered"
  | "Disabled"
  | "Informational"
  | "Success"
  | "Warning"
  | "Error";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helpText?: string;
  state?: InputState;
  leadingIcon?: React.ReactNode;
  onClear?: () => void;
}

// ------ field border per state --------------------------------------------------------
function fieldBorder(state: InputState): string {
  switch (state) {
    case "Error":
      return "var(--system\\/border\\/sm, 1px) solid var(--input\\/border\\/error, #ed2012)";
    case "Warning":
      return "var(--system\\/border\\/sm, 1px) solid var(--input\\/border\\/warning, #ff9a00)";
    case "Success":
      return "var(--system\\/border\\/sm, 1px) solid var(--input\\/border\\/success, #73b44b)";
    case "Disabled":
      return "var(--system\\/border\\/sm, 1px) solid var(--input\\/border\\/disabled, #eeeeef)";
    case "Entered":
    case "Informational":
      return "var(--system\\/border\\/sm, 1px) solid var(--input\\/border\\/entered, #c6c6c9)";
    case "Typing":
      return "var(--system\\/border\\/md, 2px) solid var(--input\\/border\\/typing, #4444ca)";
    case "Focus":
      return "var(--system\\/border\\/sm, 1px) solid var(--input\\/border\\/default, #c6c6c9)";
    case "Hover":
      return "var(--system\\/border\\/md, 2px) solid var(--input\\/border\\/hover, #9f9fa5)";
    default:
      return "var(--system\\/border\\/sm, 1px) solid var(--input\\/border\\/default, #c6c6c9)";
  }
}

// ------ field background per state ----------------------------------------------------
function fieldBackground(state: InputState): string {
  if (state === "Disabled") return "var(--input\\/background\\/disabled, #eeeeef)";
  if (state === "Entered" || state === "Informational" || state === "Typing" || state === "Focus") {
    return "var(--input\\/background\\/entered, white)";
  }
  if (state === "Hover") return "var(--input\\/background\\/hover, white)";
  return "var(--input\\/background\\/default, white)";
}

// ------ helper colour/icon/label for help-text per state ------------------------------
function helpAffordance(state: InputState): { icon: string; label: string } | null {
  switch (state) {
    case "Informational":
      return { icon: "ℹ", label: "Informational message" };
    case "Success":
      return { icon: "✓", label: "Positive message" };
    case "Warning":
      return { icon: "⚠", label: "Warning message" };
    case "Error":
      return { icon: "✕", label: "Error message" };
    default:
      return null;
  }
}

// --------------------------------------------------------------------------------------
export function Input({
  label = "Label",
  helpText,
  state = "Default",
  leadingIcon,
  onClear,
  placeholder = "Placeholder",
  value,
  disabled,
  ...rest
}: InputProps) {
  const effective: InputState = disabled ? "Disabled" : state;
  const showFocusRing = effective === "Focus";
  const help = helpAffordance(effective) ?? (helpText ? { icon: "ℹ", label: helpText } : null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--system\\/gap\\/3xs, 8px)", width: "100%" }}>
      {/* Label */}
      <label
        style={{
          fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
          fontWeight: 600,
          fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
          lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
          color: "var(--text\\/color\\/default, #18181c)",
        }}
      >
        {label}
      </label>

      {/* Focus ring wrapper */}
      <div
        style={{
          borderRadius: "var(--input\\/radius, 8px)",
          border: showFocusRing ? "var(--system\\/border\\/md, 2px) solid var(--input\\/border\\/focus, #ff9a00)" : "none",
          padding: showFocusRing ? 0 : undefined,
        }}
      >
        {/* Field */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            width: "100%",
            borderRadius: "var(--input\\/radius, 8px)",
            background: fieldBackground(effective),
            border: fieldBorder(effective),
            boxShadow:
              effective === "Typing"
                ? "0px var(--system\\/shadow\\/xs\\/y, 2px) var(--system\\/shadow\\/xs\\/blur, 4px) 0px rgba(0,0,0,0.04)"
                : "none",
          }}
        >
          {leadingIcon && (
            <span
              aria-hidden
              style={{
                width: 48,
                height: 48,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "0 0 auto",
              }}
            >
              {leadingIcon}
            </span>
          )}
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            disabled={effective === "Disabled"}
            style={{
              flex: "1 1 0",
              minWidth: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              padding: "var(--system\\/padding\\/2xs, 12px) var(--system\\/padding\\/xs, 16px)",
              fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
              fontWeight: effective === "Entered" || effective === "Typing" ? 600 : 400,
              fontSize: "var(--system\\/typography\\/font-size\\/body-md, 16px)",
              lineHeight: "var(--system\\/typography\\/line-height\\/body-md, 26px)",
              color:
                effective === "Entered" || effective === "Typing"
                  ? "var(--text\\/color\\/default, #18181c)"
                  : "var(--text\\/color\\/tertiary, #9f9fa5)",
            }}
            {...rest}
          />
          {(effective === "Typing" || effective === "Entered") && (
            <button
              type="button"
              aria-label="Clear"
              onClick={onClear}
              style={{
                width: 48,
                height: 48,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {help && (
        <div style={{ display: "flex", alignItems: "center", gap: "var(--system\\/gap\\/3xs, 8px)" }}>
          <span aria-hidden>{help.icon}</span>
          <span
            style={{
              fontFamily: "var(--text\\/font\\/primary, 'Inter', sans-serif)",
              fontWeight: 400,
              fontSize: "var(--system\\/typography\\/font-size\\/body-sm, 14px)",
              lineHeight: "var(--system\\/typography\\/line-height\\/body-sm, 24px)",
              color: "var(--text\\/color\\/secondary, #565660)",
            }}
          >
            {help.label}
          </span>
        </div>
      )}
    </div>
  );
}

export default Input;
