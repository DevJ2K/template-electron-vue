/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // b_project_card: "930px"
    },
    extend: {
      colors: {
        "app-bg": "#FDFDFE", // 1. App background
        "subtle-bg": "#F7F9FF", // 2. Subtle background
        "ui-bg": "#EDF2FE", // 3. UI element background
        "hover-ui-bg": "#E1E9FF", // 4. Hovered UI element background
        "active-ui-bg": "#D2DEFF", // 5. Active / Selected UI element background
        "subtle-border": "#C1D0FF", // 6. Subtle borders and separators
        "ui-border": "#ABBDF9", // 7. UI element border and focus ring
        "hover-ui-border": "#8DA4EF", // 8. Hovered UI element border
        "accent-color": "#3E63DD", // 9. Solid backgrounds
        "hover-accent-color": "#3358D4", // 10. Hovered solid backgrounds
        "low-contrast-text": "#3A5BC7", // 11. Low-contrast text
        "high-contrast-text": "#1F2D5C", // 12. High-contrast text
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      padding: "2rem",
      center: true,
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1100px', // 48rem
        'xl': '1100px'
      }
    }
  },
  plugins: [],
}

