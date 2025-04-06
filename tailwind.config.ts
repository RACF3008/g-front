import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#ccd1d1",
          200: "#99a3a3",
          300: "#667474",
          400: "#334646",
          500: "#001818",
          600: "#001313",
          700: "#000e0e",
          800: "#000a0a",
          900: "#000505",
        },
        secondary: {
          100: "#d0fae7",
          200: "#a1f5ce",
          300: "#73efb6",
          400: "#44ea9d",
          500: "#15e585",
          600: "#11b76a",
          700: "#0d8950",
          800: "#085c35",
          900: "#042e1b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
