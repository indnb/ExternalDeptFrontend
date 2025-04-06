import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1800px",
        "max-lg": { max: "850px" },
        "ming-lg": { min: "850px" },
        "max-sm": { max: "550px" },
        "max-xl": { max: "1300px" },
        "min-xl": { min: "1300px" },
        "min-xl2": { min: "1800px" },
        "max-xl2": { max: "1800px" },

      },

      colors: {
        mainBlue: "#203C8F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        kharkiv: ['"Kharkiv Tone"', 'sans-serif'],
        kyivSerif: ['"Kyiv*Type Serif"', 'serif'],
        kyivSans: ['"Kyiv Type Sans"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: []
} satisfies Config;
