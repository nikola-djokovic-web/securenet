// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: { "2xl": "1rem" },
    },
  },
  darkMode: "class", // fine even if MUI drives theme
} satisfies Config;
