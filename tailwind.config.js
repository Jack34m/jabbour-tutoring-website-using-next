/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4f0",
          100: "#d7e6dc",
          200: "#b0cdba",
          300: "#82ae91",
          400: "#568f6c",
          500: "#3a7351",
          600: "#285a3f",
          700: "#1b4332",
          800: "#14301f",
          900: "#0d2016",
        },
        gold: {
          300: "#e2cb84",
          400: "#d4b45a",
          500: "#c9a227",
          600: "#a9861c",
        },
        ivory: "#faf7f0",
        ink: "#2b2a28",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out both",
        "fade-in-up": "fadeInUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
