import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        default: "#FAC308",
        primary: "#0A0B0F", // darker base
        secondary: "#ffffff",
        tertiary: "#000000",
        accent: "#FAC308", // <-- add accent token
        "black-100": "#0e0e0e",
        "black-200": "#000000",
        "white-100": "#fbfbfb",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // if you keep a file:
        // "hero-pattern": "url('/src/assets/herobg.webp')",

        // optional: pure CSS version that matches your gold lines vibe
        "hero-gold":
          "radial-gradient(60% 50% at 80% 20%, rgba(250,195,8,0.08), transparent 60%),\
             radial-gradient(60% 50% at 15% 80%, rgba(250,195,8,0.06), transparent 60%),\
             linear-gradient(#0A0B0F, #0A0B0F)",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [nextui()],
};
