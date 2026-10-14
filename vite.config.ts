import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: this must match the GitHub repo name exactly (case-sensitive).
  // The repo is named "PixelForge", so the site is served at /PixelForge/ on GitHub Pages.
  // This exact match is what prevents the previously seen 404 errors.
  base: '/PixelForge/',
  build: {
    // Output the built site straight into /docs so GitHub Pages can deploy it
    // directly from the "main" branch (Source: Deploy from a branch → main → /docs).
    // No GitHub Actions workflow is needed.
    outDir: 'docs',
  },
})
