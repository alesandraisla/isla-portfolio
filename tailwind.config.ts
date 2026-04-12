import type { Config } from "tailwindcss";

/**
 * Valores padrão (tema jardim): #FDFBF7, #D1E2D3, #FBC4AB, #A8DADC — ver src/styles/theme.css.
 * Tokens usam CSS variables para troca de paleta em runtime.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "jardim-creme": "var(--color-jardim-creme)",
        "jardim-verde": "var(--color-jardim-verde)",
        "jardim-pessego": "var(--color-jardim-pessego)",
        "jardim-azul": "var(--color-jardim-azul)",
      },
    },
  },
};

export default config;
