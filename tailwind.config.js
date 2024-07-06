/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Yekan Bakh", ...fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
