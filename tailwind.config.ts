import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101418",
        muted: "#64748b",
        surface: "#f8fafc",
        brand: {
          navy: "#0f172a",
          blue: "#2563eb",
          green: "#16a34a",
          gold: "#d4a017"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
