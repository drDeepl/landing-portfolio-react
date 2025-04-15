import type { Config } from "tailwindcss";



module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-text": "#69696b",
        
      }
    },
  },
  plugins: [],
} satisfies Config;
