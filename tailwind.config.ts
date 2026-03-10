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
        card: "#18181b",
        border: "#27272a",
        amberAccent: "#f59e0b",
        cyanAccent: "#06b6d4",
        pinkAccent: "#ec4899",
        purpleAccent: "#8b5cf6"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(245,158,11,0.16), transparent 30%), radial-gradient(circle at top right, rgba(6,182,212,0.16), transparent 28%), radial-gradient(circle at bottom, rgba(139,92,246,0.16), transparent 32%)"
      }
    }
  },
  plugins: []
};

export default config;
