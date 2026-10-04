import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        navy: "#0B1F4B",
        royal: "#4169E1",
        mist: "#EAF1FF",
        gold: "#D4AF37",
        paper: "#FAFBFF",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      maxWidth: {
        page: "1240px",
      },
      borderRadius: {
        card: "15px",
        panel: "20px",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 41, 84, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
