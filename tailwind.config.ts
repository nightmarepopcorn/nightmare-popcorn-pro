
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0c",
        card: "#141414",
        ink: "#e7e7e7",
        muted: "#a7a7a7",
        accent: "#e11d48"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem"
      }
    }
  },
  plugins: []
}
export default config;
