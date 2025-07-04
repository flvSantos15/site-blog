import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
