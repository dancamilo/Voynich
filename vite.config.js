import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // GitHub Pages serves project sites from a sub-path
  // (https://username.github.io/repo-name/), so every built asset must be
  // referenced with a relative path instead of an absolute one. Using './'
  // works for both a project page and a user/organization root page
  // (https://username.github.io/) without any per-repo configuration.
  base: './',

  resolve: {
    alias: {
      // Matches the "@/*" -> "./src/*" mapping in jsconfig.json.
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
  },
})
