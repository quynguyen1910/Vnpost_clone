/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { min: "375px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
    },
    extend: {
      colors: {
        "ctBlack-1": "#444",
        "ctBlue-1": "#004b8e",
        "ctYellow-1": "#FDB813",
      },
      boxShadow: {
        "ctShadow-1": "0 4px 4px rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};
