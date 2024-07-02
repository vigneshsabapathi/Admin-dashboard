// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6",
          DEFAULT: "#1D4ED8",
          dark: "#1E40AF",
        },
        secondary: {
          light: "#818CF8",
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
        },
        background: "#F3F4F6",
        white: "#FFFFFF",
        gray: {
          light: "#E5E7EB",
          DEFAULT: "#9CA3AF",
          dark: "#6B7280",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
