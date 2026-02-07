import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "accent-1": "#A5D8FF",
        "accent-2": "#D0BCFF",
        "accent-3": "#B197FC",
        primary: {
          DEFAULT: "#3B82F6",
          bg: "#EFF6FF",
        },
        secondary: {
          DEFAULT: "#F3F4F6", 
          bg: "#FFFFFF",
        },
        dark: {
            bg: "#000000",
            sec: "#737373",
            "sec-bg": "#404040"
        }
      },
    },
  },
  plugins: [],
};
export default config;
