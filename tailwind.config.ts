import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#C89B3C",
        cream: "#F8F3E7",
        light: "#F8FAFC",
        muted: "#64748B"
      },
      boxShadow: {
        soft: "0 16px 50px rgba(15, 23, 42, 0.10)",
        lift: "0 22px 70px rgba(15, 23, 42, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
