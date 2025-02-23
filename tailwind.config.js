/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF4C60",
        primaryDarkColor: "#F8384E",
        secondaryColor: "#1ED3FF",
        secondaryDarkColor: "#15BEE7",
        headingColor: "#222222",
        textColor: "#777777",
        borderColor: "#EEEEFC",
        bodyColor: "#F9F9FE",
        tagColor: "#9C9C9C",
        accent: {
          yellow: "#FF9602",
          yellowlight: "#FEA01B",
          purple: "#C265E9",
          purplelight: "#C774EB",
        },
      },

      fontFamily: {
        headingFont: ["Kanit", "sans-serif"],
        textFont: ["Poppins", "sans-serif"],
      },

      screens: {
        sm: "320px",
        md: "375px",
        lg: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopl: "1440px",
        "4k": "2560xpx",
      },
    },
  },
  plugins: [],
};
