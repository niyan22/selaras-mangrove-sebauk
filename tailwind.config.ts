import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canopy: "#0B3D2E",
        moss: "#6F8F3A",
        tide: "#0E7490",
        ember: "#D7903B",
        mist: "#E8F1EC",
        ink: "#081412"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(14, 116, 144, 0.24)"
      },
      backgroundImage: {
        "hero-texture":
          "linear-gradient(180deg, rgba(8,20,18,0.22), rgba(8,20,18,0.88)), url('https://images.unsplash.com/photo-1516399558788-81f8f8f3b8e6?auto=format&fit=crop&w=2400&q=85')"
      }
    }
  },
  plugins: []
};

export default config;
