/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "tech-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "tech-marquee": "tech-marquee 72s linear infinite",
        "tech-marquee-slow": "tech-marquee 140s linear infinite",
      },
      colors: {
        background: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        elevated: "rgb(var(--color-elevated) / <alpha-value>)",
        "footer-mid": "rgb(var(--color-footer-mid) / <alpha-value>)",
        "footer-end": "rgb(var(--color-footer-end) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-bright": "rgb(var(--accent-bright) / <alpha-value>)",
        link: "#60A5FA",
        "nav-surface": "rgb(var(--color-nav) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgb(var(--accent) / 0.35)",
        "glow-sm": "0 0 40px -8px rgb(var(--accent) / 0.25)",
      },
    },
  },
  plugins: [],
};
