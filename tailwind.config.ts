import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roxborough': ["Roxborough"],
        'inter': ['Inter'],
      }
    },
  },
  plugins: [],
} satisfies Config;
