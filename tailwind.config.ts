import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '150%',
     '16': '4rem',
    },

    extend: {
      colors: {
        primary: "#3EA7AD",
        primary2: "#3A9DA3",
        primary3: "#635D51",

        primaryActive: "#48A6DC",
        primaryHover: "#A8DFFF",

        solitude: "#E5E7EB",
        solitude2: "#D1D5DB",

        solitudeActive: "#FFF",

        statusActive: "#37E549",
        statusInactive: "#F50D0D",
      },
    },
  },
  plugins: [],
};
export default config;
