import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        muted: "#a1a1aa",
        card: "#121212",
        border: "#1f1f1f",
        // Brand colors from logo
        brandOrange: "#F5A623",
        brandCyan: "#5BC0BE",
        brandMagenta: "#E91E63",
        // Accent aliases
        amberAccent: "#F5A623",
        cyanAccent: "#5BC0BE",
        pinkAccent: "#E91E63"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(245, 166, 35, 0.15)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(245,166,35,0.12), transparent 35%), radial-gradient(circle at top right, rgba(91,192,190,0.12), transparent 35%), radial-gradient(circle at bottom center, rgba(233,30,99,0.08), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
