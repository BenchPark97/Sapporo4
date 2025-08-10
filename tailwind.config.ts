import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { brand: { 50:"#ECF8FF",100:"#D6EEFF",200:"#AEE0FF",300:"#7ED0FF",400:"#4EC0FF",500:"#22B0FF",600:"#0C95E6",700:"#0775B4",800:"#055483",900:"#033452" } }
    },
  },
  plugins: [],
};
export default config;
