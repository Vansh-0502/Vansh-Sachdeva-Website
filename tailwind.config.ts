import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "820px",
      lg: "1080px",
      xl: "1320px",
    },
    extend: {
      colors: {
        // values live in globals.css (:root = dark, [data-theme="light"] = light)
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          2: "rgb(var(--ink-2) / <alpha-value>)",
          3: "rgb(var(--ink-3) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--paper) / <alpha-value>)",
          dim: "rgb(var(--paper-dim) / <alpha-value>)",
          faint: "rgb(var(--paper-faint) / <alpha-value>)",
        },
        lime: {
          DEFAULT: "rgb(var(--lime) / <alpha-value>)",
        },
        rule: "rgb(var(--paper) / 0.14)",
        "rule-strong": "rgb(var(--paper) / 0.32)",
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        page: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
