/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#07090c",
        foreground: "#f6f7f9",
        muted: "#a4aab3",
        surface: "#0f1318",
        surfaceElevated: "#141a21",
        card: "#10151b",
        border: "#27303a",
        line: "#202832",
        brandOrange: "#F5A623",
        brandCyan: "#5BC0BE",
        brandMagenta: "#E91E63",
        ink: "#090b0f"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(0, 0, 0, 0.28)",
        insetLine: "inset 0 1px 0 rgba(255, 255, 255, 0.04)"
      }
    }
  },
  plugins: []
};
