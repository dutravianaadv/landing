import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serve o site em /<nome-do-repo>/; localmente continua em /
  base: process.env.GITHUB_PAGES ? '/advogacia-landing/' : '/',
})
