import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  colors:{
    blue: "#2997FF",
    gray: {
      DEFAULT: "#86868b",
      100: "#94928d",
      200: "#afafaf",
      300: "#42424570",
    },
    zinc: "#101010",
  },
  plugins: [
    tailwindcss(),
  ],
})
