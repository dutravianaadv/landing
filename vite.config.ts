import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serve o site em /<nome-do-repo>/; localmente continua em /
  base: process.env.GITHUB_PAGES ? '/advogacia-landing/' : '/',
  build: {
    rolldownOptions: {
      // Versões do mockup: / (v1) e /v2/ a /v5/
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        v2: resolve(import.meta.dirname, 'v2/index.html'),
        v3: resolve(import.meta.dirname, 'v3/index.html'),
        v4: resolve(import.meta.dirname, 'v4/index.html'),
        v5: resolve(import.meta.dirname, 'v5/index.html'),
      },
    },
  },
})
