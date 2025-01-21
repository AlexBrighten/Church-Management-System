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
    },
  },

  colors: {
    cmsBlue: "#1F77B4",
    cmsLightBlue: "#AEC7E8",
    cmsYellow: "#FF7F0E",
    lamasky: "#C3EBFA",
    lamaSkyLight: "#EDFOFD",
    lamaPurple: "#CFCEFF",
    lamaPurpleLight: "#F1FFF",
    lamaYellow: "#FAE27C",
    lamaYellowLight:"#FEFCES",

  },
  plugins: [],
};
export default config;
